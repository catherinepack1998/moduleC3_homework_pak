function ElectroTools(category, status='turnOff'){
    this.category = category;
    this.status = status;
}

ElectroTools.prototype.turnOn = function(){
    console.log(`Прибор ${this.model} вкючен,`);
    this.status = 'turnOn';
}

ElectroTools.prototype.turnOff = function(){
    console.log(`Прибор ${this.model} выкючен,`);
    this.status = 'turnOff';
}

function Phone (model , power){
    this.model = model;
    this.power = power;
    this.category = 'gadget';
    this.getMyCategory= function(){
        console.log(`Меня можно найти в категории - ${this.category}`);
    }
}

Phone.prototype = new ElectroTools();

function Headphones (model , power){
    this.model = model;
    this.power = power;
    this.category = 'accessories';
    this.getMyCategory= function(){
        console.log(`Меня можно найти в категории - ${this.category}`);
    }
}

Headphones.prototype = new ElectroTools();

let myPhone = new Phone('Samsung', 4000);
let myHeadphones = new Headphones('Apple', 500);
myPhone.turnOn()
myPhone.getMyCategory()
console.log(myPhone.status)
console.log(myHeadphones.status)