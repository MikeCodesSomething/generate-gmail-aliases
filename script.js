document.getElementById('generate-button').onclick = function() {
    email = document.getElementById('email').value
    for (let i = 1; i <= 5; i++)  {
        let resultId = `result${i}`
        let alias = generateAlias(email)
        document.getElementById(resultId).innerHTML = alias
    }
}

function generateAlias(email) {
    //for now just sticking 1 period after the first character
    let indexesForPeriods = [];
    for (let i = 1; i <= email.length && email[i] != '@'; i++) {
        if (email[i] != '.' && Math.random() < 0.5) {
            indexesForPeriods.unshift(i)
            // little hack here, using unshift rather than push, because we
            // need to add periods multiple times, but every time we do it
            // will shift the indexes of the rest of the string, so we could
            // end up putting periods in the wrong place. Starting with the
            // highest index period first because we will only shift the index
            // of later characters in the string, so starting with the last 
            // place we need it means we can this function multiple times on
            // the same string without messing the indexes up
        } 
    }
    let alias = email
    for (i in indexesForPeriods) {
        alias = addPeriodAtIndex(alias,indexesForPeriods[i])
    }
    return alias
}

let addPeriodAtIndex = (string,index) =>
string.slice(0,index) +'.'+ string.slice(index,string.length)

console.log(addPeriodAtIndex('test',0))