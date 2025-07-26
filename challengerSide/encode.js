// encode.js
// 用法：node encode.js <word>

const word = process.argv[2]; // 从命令行参数获取输入

if (!word) {
  console.error('Usage: node encode.js <word>');
  process.exit(1);
}

// 1. 字符串 → UTF-8 字节 → 16 进制
const hex = Buffer.from(word, 'utf8').toString('hex');

// 2. 16 进制 → BigInt
const num = BigInt('0x' + hex);

// 3. 打印结果
console.log(`word: ${word}`);
console.log(`hex:  0x${hex}`);
console.log(`dec:  ${num.toString()}`);