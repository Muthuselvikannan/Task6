//Convert the UML diagram to Typescript class. - use number for double

class Circle {
    
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }

    
    getRadius() {
        return this.radius;
    }

    setRadius(radius)  {
        this.radius = radius;
    }

    getColor() {
        return this.color;
    }

    setColor(color)  {
        this.color = color;
    }

    
    getArea(){
        return Math.PI * Math.pow(this.radius, 2);
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }

   
    printInfo() {
        
        console.log(`Circle: Radius=${this.radius}, Color=${this.color}`);
        console.log(`Area: ${this.getArea()}, Circumference: ${this.getCircumference()}`);
    }
}

const myCircle = new Circle(5, "red");
myCircle.printInfo();