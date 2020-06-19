function main() {
    for (let i = 1; i <= 100; i++) {
        let flag = 1;
        const k = Math.sqrt(i);     // important

        for (let j = 2; j <= k; j++) {
            if(i % j === 0) flag = 0;
        }

        if (flag) console.log(i);
    }
}
main();