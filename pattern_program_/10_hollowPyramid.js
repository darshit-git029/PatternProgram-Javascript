let n = 5
let string = ""

for(let i = 1 ; i <= n ; i++){

    for(let j = 1 ; j <=  n-i ; j ++){
        string += " "
    }
    for(let k = 0 ; k < 2 * i - 1 ; k++){
        // string +="*"
        if (k === 0 || k === 2 * i - 2 || i === n) {
            string += "*"; 
        } else {
            string += " "; 
        }
    }
    
    string += "\n"
}

console.log(string);