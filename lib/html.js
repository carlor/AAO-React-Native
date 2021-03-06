// @flow
import htmlparser from 'htmlparser2'
import cssSelect from 'css-select'
export {cssSelect}

export function parseHtml(string: string): Object {
  return htmlparser.parseDOM(string, {
    withDomLvl1: true,
    normalizeWhitespace: false,
    xmlMode: false,
    decodeEntities: true,
  })
}

// from https://github.com/fb55/domutils/blob/master/lib/stringify.js
export function getText(elem: Object|Object[]): string {
  if (Array.isArray(elem)) return elem.map(getText).join('')
  if (elem.type === 'tag') return getText(elem.children)
  if (elem.type === 'text') return elem.data
  return ''
}
