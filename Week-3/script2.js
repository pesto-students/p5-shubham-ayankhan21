//BIND

// Binding a parameter to a certain value of a function 

function driving(age,n){
    if(n<age){
        console.log(`You need to turn ${age} to get a Drivers License`);
    }
    else if(age===n){
        console.log(`Cool you can go ahead and apply for a Drivers License`);
    }
    else if(n>age){
        console.log(`You are ${n} and still dont have a Drivers License Shame on you!`)
    }
}

const drive = driving.bind(null,18)
drive(10);

//Binding `this` to a different object

function add(a,b){
    return this.a + this.b;
}
console.log(add(35,45))//Nan since the "this" attribute is refering to global

var add2 = add.bind({a:30,b:40})
console.log(add2(2,3))

/// CALL

function Cars(){
    console.log(this.car + ' costs ' + this.cost +"$")
}
Cars.call({car:'Bugatti Chiron',cost:35000000})//Can directly add the object
var posrche = {car:"Porsche 911 Turbo S",cost:200000}
var mcLaren = {car:"Mclaren 765LT",cost:400000}
Cars.call(posrche)
Cars.call(mcLaren)


/// APPLY

const user1 = {
    firstName: "Ayan",
    lastName: "Khan",
  };
  
  // function definition
  function greet(wish, message) {
    return `Hello ${this.firstName}, ${wish}. ${message}`;
  }
  
  // calling greet() function by passing two arguments
  let result = greet.apply(user1, ["Good morning", "How are you?"]);
  
  console.log(result);