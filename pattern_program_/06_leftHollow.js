let n = 7;
let string = ""

for (let i = 1; i < n ;i++){
    string += ""
    for(let j = 0 ; j < i  ; j++){
        if (i === 0 || i === n - 1) {
            string += "*"
        }
        else if (j === 0 || j === i- 1) {
            string += "*"
        }
        else {
            string += " "

        }

    }
    
    string += "\n"
}
console.log(string);
