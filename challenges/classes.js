// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(attrs){
        this.length = attrs.length;
        this.width = attrs.width;
        this.height = attrs.height;
    }
    volume(){
        return this.length * this.width * this.height
    }
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
}

class CubeMaker extends CuboidMaker{
    constructor(cubeMakerAttrs){
        super(cubeMakerAttrs)
    }
    volumeForCube(){
        return this.length * this.width * this.height
    }
    surfaceAreaForCube(){
        return  6 * (Math.pow(this.length, 2)) // Math.pow allows me to square in an equation. The syntax is Math.pow(base number, exponent number) so to match the surface area equation of 6 * cube edge squared, I'd do Math.pow(5(which is the length of 1 edge), 2(which is the exponent for squaring a number))
    }
}

const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
})

const cube = new CubeMaker({
    length: 5,
    width: 5,
    height: 5
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

console.log(cube.volumeForCube());
console.log(cube.surfaceAreaForCube());

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.