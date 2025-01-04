const openBrackets = ['(', '{', '['];
const closeBrackets = [')', '}', ']'];

function checkBrackets(str) {
    const arr = [];

    for (let char of str) {
        if (openBrackets.includes(char)) {
          arr.push(char);
        } else if (closeBrackets.includes(char)) {
            const lastOpen = arr.pop();
            const indexOpen = openBrackets.indexOf(lastOpen);
            const indexClose = closeBrackets.indexOf(char);

            
            if (indexOpen !== indexClose) {
                return false;
            }
        }
    }

    return arr.length === 0; 
}


console.log(checkBrackets("function test() { return [1, 2, 3]; }")); 
console.log(checkBrackets("function test() { return [1, 2, 3; }"));  
console.log(checkBrackets("(function() { return {}; })"));           
console.log(checkBrackets("(function() { return {}; )"));            





































