class ElectroTools{
    constructor(category, status='turnOff'){
        this.category = category;
        this.status = status;
    }
    turnOn(){
        console.log(`Прибор ${this.model} вкючен,`);
        this.status = 'turnOn';
    }
    turnOff(){
        console.log(`Прибор ${this.model} вкючен,`);
        this.status = 'turnOn';
    }
}
class Phone extends ElectroTools {
    constructor(model , power){
        super(status)
        this.model = model;
        this.power = power;
        this.category = 'gadget';
        this.getMyCategory= function(){
            console.log(`Меня можно найти в категории - ${this.category}`);
        }
    }
}

class Headphones extends ElectroTools{
        constructor(model , power){
        super(status)
        this.model = model;
        this.power = power;
        this.category = 'accessories';
        this.getMyCategory= function(){
            console.log(`Меня можно найти в категории - ${this.category}`);
        }
    }
}


let myPhone = new Phone('Samsung', 4000);
let myHeadphones = new Headphones('Apple', 500);
myPhone.turnOn()
myPhone.getMyCategory()
console.log(myPhone.status)
console.log(myHeadphones.status)