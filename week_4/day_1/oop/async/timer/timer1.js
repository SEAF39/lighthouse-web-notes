const args = process.argv.slice(2); // exclude "node" and the script name

for (const arg of args) {
  const num = Number(arg);
  if (Number.isNaN(num) || num < 0) {
    // ignore non-numeric or negative arguments
    continue;
  }
  setTimeout(() => {
    process.stdout.write('\x07'); // beep!
  }, num * 1000); // convert seconds to milliseconds
}