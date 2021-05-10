let angramGame =  (string1, string2) => {
    let stringNoSpace1 = string1.replace(/\s/g, '')
    let stringNoSpace2 = string2.replace(/\s/g, '')
    for (i = 0; i < stringNoSpace1.length; i ++){
        let eachChar =  stringNoSpace1[i]
        //i am checking if the chars on s2 includes each char of my s1
        let myMatch = stringNoSpace2.indexOf(eachChar)
        console.log(`I am the each char [${eachChar}]`)
        console.log(`you found ${eachChar} in [${myMatch}] `)
        console.log(`-----`)
        if (myMatch == -1) {
            //meaning it is not a match - not an anagram
            console.log('no match')
            return false
        }
        else{
            //here I got remove each chat that has a match from string 2
            stringNoSpace2 = stringNoSpace2.replace(eachChar,'')
            console.log(stringNoSpace2)
        } 
// i am checking if the STRING 1 is an anagram of the STRING 2
    }
    console.log('match')
    return true 

}

angramGame('developers institute', 'an ana gram game')