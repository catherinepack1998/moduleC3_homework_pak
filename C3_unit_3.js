// Task 1
function getProperty(obj){
    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            console.log(`${key} : ${obj.key}`);
        }
    }
}

// Task 2
function ifPrototype(str, obj){
    return (str in obj);
}

// Task 3
function createPrototype() {
    return Object.create(null);
}