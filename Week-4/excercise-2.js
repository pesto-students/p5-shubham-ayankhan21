var Person = function(){}
Person.prototype.initialize = function(name,age){
    this.name=name;
    this.age=age;
}
class Teacher extends Person{
    constructor(name,subject){
        super(name);
        this.subject = subject;
    }
    // teach(subject){
    //     console.log(`${this.name} is teaching ${subject}`)
    // }
}
//the above commented code also works for the result
//adding teach function using the .prototype method
Teacher.prototype.teach = function(subject){
    console.log(`${this.name} is teaching ${subject}`)
}

var him = new Teacher();
him.initialize("Shubham",45);
him.teach("Closures");


him.initialize("Ayan",45);
him.teach("prototypes");

