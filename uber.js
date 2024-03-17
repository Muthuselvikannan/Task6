//Write a class to calculate the Uber price

class uber{

    constructor(basefare, perkilometer, duration, kilometers, perminute){

        this.basefare = basefare;
        this.perkilometer = perkilometer;
        this.duration = duration;
        this.kilometers = kilometers;
        this.perminute = perminute;
    }

    finalfare(){

        return this.basefare * (this.perkilometer*this.kilometers) + (this.duration*this.duration);
    }
}
let Uberfare = new uber(17, 5, 1.5, 25, 3);
console.log(Uberfare.finalfare());