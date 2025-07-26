# ZK Whisper

你获得了一个关键线索 —— 但你不能让别人知道它是什么。

如果你直接提交这个线索，服务器将广播你提交的内容，其他人会立刻知道你知道了什么，一切优势将归零。

因此，你必须：

- 保持线索为私密（private input）
- 使用我们提供的电路（修复过 bug 后）
- 提交一份 ZK 证明：证明你知道这个线索 (包含 proof.json 和 public.json 文件)

### 提供的文件

- `circuit.circom`: 有错误的 Circom 电路（你需要修复）
- `script.sh`: 你可以直接运行这个脚本来生成你的 proof
- `input.json`: 
  - `secret`: 使用我们提供的 `encode.js` 把你的线索转换成一串数字然后放进来 eg: `node encode.js xxxx`
  - `hash_expected`: 在整个计算流程处理完之后得到的输出，我们会验证这个输出是否匹配我们想要的结果
  - 上述两个字段均适用 dex 进制
  - 为此，你需要理阶电路中描述的计算过程，以及修复一些小 Bug
- `snarkjs groth16 verify server_verification_key.json public.json proof.json`: 你可以用这个文件来检查是否会通过服务器的部分检查（在这个文件中我们不会检查线索有关的内容，但是会检查你是否已经修改出我们预期的电路 ）
- 最后使用 `curl -F "proof=@proof.json" -F "public=@public.json" http://localhost:3000/verify` 上传文件并验证

### Hint

- `hash_expected = Poseidon_hash((secret / 62417857)^3 - secret)`
- 你不需要修改 signal 的数量

你需要去自己解决网络问题 如何使用脚本 利用你手头的工具 我相信你可以的。
当你完成验证之后 请上传你的 `proof.json` 和 `public.json` 到我们的页面 我们会进行检查
