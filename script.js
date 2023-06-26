document.getElementById('generate-button').onclick = function() {
    let aliases = document.getElementById('aliases').value
    let email = document.getElementById('email').value
    resetAliases()
    for (let i = 1; i <= aliases; i++)  {
        let resultId = `result${i}`
        let alias = generateAlias(email)
        document.getElementById(resultId).innerHTML = alias
    }
}

function generateAlias(email) {
    //for now just sticking 1 period after the first character
    if (email.slice(-10) === "@gmail.com") {
        email = email.slice(0,-10)
    }
    if (email.slice(-15) === "@googlemail.com") {
        email = email.slice(0,-15)
    }

    let indexesForPeriods = [];
    for (let i = 1; i < email.length; i++) {
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
    if (Math.random() < 0.5) {
        let domain = "@googlemail.com"
        alias += domain
    }
    else {
        let domain = "@gmail.com"
        alias += domain
    }
    return alias
}

let addPeriodAtIndex = (string,index) =>
string.slice(0,index) +'.'+ string.slice(index,string.length)

function resetAliases() {
    //reset any aliases we set before
    for (let i = 1; i <= 50; i++) {
        let resultId = `result${i}`
        document.getElementById(resultId).innerHTML = ""}
}