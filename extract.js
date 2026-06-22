const fs = require('fs');

const html = fs.readFileSync('d:/Hassan/technoweld-temp/technoweld/home.html', 'utf8');
const headMatch = html.match(/<head>([\s\S]*?)<\/head>/);

if (headMatch) {
  let head = headMatch[1];
  const stylesMatch = head.match(/(<link[^>]+rel=['"]stylesheet['"][^>]*>|<style[^>]*>[\s\S]*?<\/style>)/gi);
  
  if (stylesMatch) {
    const reactElements = stylesMatch.map((s, i) => {
      if (s.startsWith('<style')) {
        const contentMatch = s.match(/<style([^>]*)>([\s\S]*?)<\/style>/i);
        if (contentMatch) {
          // Replace dangerous characters for JSON stringification
          const attrs = contentMatch[1].replace(/class=/g, 'className=');
          const innerCSS = contentMatch[2];
          return `<style key="${i}" ${attrs} dangerouslySetInnerHTML={{ __html: ${JSON.stringify(innerCSS)} }} />`;
        }
      } else {
        let link = s.replace(/class=/g, 'className=');
        // make sure it is self-closing
        if (!link.endsWith('/>') && !link.endsWith('/ >')) {
          link = link.replace(/>$/, ' />');
        }
        // inject key
        link = link.replace('<link ', `<link key="${i}" `);
        
        // fix id -> key, handle other unclosed attributes? usually link is simple
        return link;
      }
      return '';
    });

    const finalJsx = `
import React from 'react';

export function ThemeStyles() {
  return (
    <>
      ${reactElements.join('\n      ')}
    </>
  );
}
`;
    fs.writeFileSync('d:/Hassan/technoweld/avion-cms/src/components/ThemeStyles.tsx', finalJsx);
    console.log('Successfully created ThemeStyles.tsx');
  } else {
    console.log('No styles found in head');
  }
}
