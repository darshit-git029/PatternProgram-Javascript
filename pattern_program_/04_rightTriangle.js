let n = 5;
let string = ""

for(let i = 0 ;i < n ;i++){
    string +=""
    for(let  j = 0 ; j < n - i ;j ++){
        string +=" "
    }
    for(let k =0 ; k < i ; k++){
        string += "*"
    }
    string += "\n"
}
console.log(string); 