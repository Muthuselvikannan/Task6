//Write a “person” class to hold all the details

class person{
    constructor(firstname, lastname, gender, age, location){
        this.firstname = firstname;
        this.lastname = lastname;
        this.gender = gender;
        this.age = age;
        this.location = location;
    }

    getPersonInfo(){
        return `Name: ${this.firstname} ${this.lastname}
        Gender: ${this.gender}
        Age: ${this.age}
        Location: ${this.location}`;
    }
}
let person1 = new person("Deepa","Venkat", "Female", "25", "Chennai");
console.log(person1.getPersonInfo());