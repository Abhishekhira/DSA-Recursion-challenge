console.log('this file is connected')

//in this challenge w will learn how we will learn how recursion works
function recursion(item) {

    if (item==1) {
        return [0,1];
    }
    else{
        let s=recursion(item-1)
        s.push(s[s.length-1] + s[s.length-2])
        return s
    }

}
console.log(recursion(7))

function recursion2(item){
    if (item==1) {
        return 1
    }
    return item*recursion2(item-1)
}
console.log(recursion2(5))