const args = process.argv.slice(2);
let total = 0;

for (let i = 0; i < args.length; i++) {
    const valueAtIndex = Number(args[i]);

    if (Number.isInteger(valueAtIndex)) {
        total += valueAtIndex;
    }
}

console.log('Integer arguments sum: ', total);