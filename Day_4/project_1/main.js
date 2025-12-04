const greet = require('./greet');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { promisify } = require('util');

const writeFile = promisify(fs.writeFile);

async function main() {
  const msg = greet('Bhanu');
  console.log(msg);

  const filePath = path.join(__dirname, 'info.txt');
  const sysInfo = `User: ${os.userInfo().username}, Platform: ${os.platform()}`;
  await writeFile(filePath, `${msg}\n${sysInfo}`);
  console.log('Wrote info to', filePath);
}

main().catch(console.error);
