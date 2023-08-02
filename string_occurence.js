function occurence(str,char){
    var count=0;
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)==char)
        count++;
    }
    return count
}
let str=prompt("Enter a string");
let char=prompt("Enter a character")
console.log(occurence(str,char))