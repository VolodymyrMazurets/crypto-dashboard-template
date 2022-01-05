/* eslint-disable no-console */
const testFolder = './src/assets/svg/';
const fs = require('fs');

function transformFromKebabCaseToPascalCase(text) {
  return text.replace(/(^\w|-\w)/g, (str) => str.replace(/-/, '').toUpperCase());
}

fs.readdir(testFolder, (err, files) => {
  try {
    const iconNames = files.length
      ? files.reduce((prev, cur, idx) => {
          return `${prev}
    '${cur.replace('.svg', '')}'${
            files.length === idx + 1
              ? `,
  ]; 
  export default iconNames;
  `
              : ','
          }`;
        }, 'export const iconNames = [')
      : `export const iconNames = [];
`;

    const iconTypes = files.length
      ? files.reduce((prev, cur, idx) => {
          return `${prev}
    | '${cur.replace('.svg', '')}'${
            files.length === idx + 1
              ? `;
  `
              : ''
          }`;
        }, 'export type IconType =')
      : `export {};
`;

    const icons = files.length
      ? files.reduce((prev, cur) => {
          return `${prev}export { ReactComponent as Icon${transformFromKebabCaseToPascalCase(
            cur.replace('.svg', '')
          )} } from '../../../assets/svg/${cur}';
  `;
        }, '')
      : `export {};
`;

    fs.writeFileSync('./src/components/common/Icon/types.ts', iconTypes);
    fs.writeFileSync('./src/components/common/Icon/iconNames.ts', iconNames);
    fs.writeFileSync('./src/components/common/Icon/icons.ts', icons);
    console.log('💚 icons generated');
  } catch {
    console.log('🚨 icons generation failure');
  }
});
