const frames = ['|    ', '/    ', '-    ', '\\   '];
let delay = 0;

for (let frame of frames) {
  setTimeout(() => {
    process.stdout.write(`\r${frame}`);
  }, delay);

  delay += 200;
}

setTimeout(() => {
  process.stdout.write(`\n`);
}, delay);
