const animationSteps = "|/-\\|";
let c = '';
for (let x = 0; x <= animationSteps.length; x++) {
  c += animationSteps[x];
  setTimeout(()=>{
    if (x !== animationSteps.length) {
      process.stdout.write(`\r${c[x]} `);
    } else {
      console.log();
    }
  },x * 300)
}