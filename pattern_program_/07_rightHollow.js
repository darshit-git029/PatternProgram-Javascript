let n = 10;
let string = ""

for (let i = 1; i <= n; i++) {

    for (let j = 0; j < n - i; j++) {
        string += " "
    }
    for (let k = 1; k <= i; k++) {
        if (k === 1 || k === i || i === n) {
            string += "*"
        }
        else {
            string += " "

        }

    }
    string += "\n"
}
console.log(string); 