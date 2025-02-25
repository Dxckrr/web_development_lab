import readline from "readline/promises";

const prompt = async (message) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const answer = await rl.question(message);

  rl.close();
  return answer;
};
export default prompt;