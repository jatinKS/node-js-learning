/*
module Wrapper function
(function (exports, require, module,__filename,__dirname){

})
*/
console.log(__dirname, __filename);

class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
module.exports = Person;