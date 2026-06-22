const fs = require('fs');
const path = require('path');

function walkDir(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walkDir(file));
        } else {
            if (file.endsWith('.tsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walkDir('src/app/(frontend)');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf-8');
    
    // Fix all the malformed tags that could cause hydration / parsing crashes
    content = content.replace(/data- class/g, 'class');
    content = content.replace(/data- width/g, 'width');
    content = content.replace(/<\/p>\s*<p data-start=[^>]+>/g, '<p>');
    content = content.replace(/<p data-start=[^>]+>\s*<\/div>/g, '<\/div>');
    content = content.replace(/<p data-start=[^>]+>/g, '<p>');
    content = content.replace(/<div class="desc">\s*<\/p>/g, '<div class="desc">');
    
    fs.writeFileSync(file, content, 'utf-8');
});

console.log('Fixed malformed HTML in all pages!');
