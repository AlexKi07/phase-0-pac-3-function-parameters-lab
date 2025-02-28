function introduction(name) {
    return `Hi, my name is ${name}.`;
}

function introductionWithLanguage(name, language){
   return 'Hi, my name is ${name} and I am learning to program in ${language}'
}

introductionWithLanguage()

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

// Example usage:
console.log(introductionWithLanguage("Aki", "Ember.js"));

//  name = "Aki" 
// function introductionWithLanguage(name, language = "Javascript"){
//     console.log('Hi, my name is ', {name},', and i am learning to program in' , {language})
// }

// introductionWithLanguage()
// name = "Gracie"
//  language = "Javascript"
// function introductionWithLanguage(name, language){
//     console.log("Hi, my name is " + name + ", and i am learning to program in " + language)
// }

// introductionWithLanguage()

// introductionWithLanguage()
// name = "Gracie"
//  language = "Python."
// function introductionWithLanguage(name, language){
//     console.log("Hi, my name is " + name + ", and i am learning to program in " + language)
// }

// introductionWithLanguage()


// function introductionWithLanguageOptional(name = "User", language = "Javascript"){
//     console.log("Hi, my name is " + name + ", and i am learning to program in " + language)
// }

// introductionWithLanguageOptional()