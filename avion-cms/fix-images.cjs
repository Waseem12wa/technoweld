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
    
    // Replace src="data:image/svg..." with the real URL from data-src
    // Also remove the lazyload classes.
    content = content.replace(/<img([^>]+)>/g, (match, attrs) => {
        let newAttrs = attrs;
        
        const dataSrcMatch = attrs.match(/data-src="([^"]+)"/);
        if (dataSrcMatch) {
            newAttrs = newAttrs.replace(/src="([^"]+)"/, '');
            newAttrs = newAttrs.replace(/data-src="([^"]+)"/, 'src="$1"');
        }
        
        newAttrs = newAttrs.replace(/\blazyload\b/g, '');
        
        return `<img${newAttrs}>`;
    });
    
    fs.writeFileSync(file, content, 'utf-8');
});

console.log('Fixed lazyload images in all pages!');
