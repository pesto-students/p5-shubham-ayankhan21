// Checking output of a program

function createlncrement() {
    let count= 0;
    function increment() {
        count++;
    }

    let message = `Count is ${count}`;
    function log() {
        console.log(message);
    }

    return [increment,log];
}

const [increment,log] = createlncrement();
increment();
increment();
increment();
log();// What is Logged?

// It prints count is 0
// since there is no code that changes the message string even tho the count variable is changing
// We can bypass this by adding the message code in the increment code itself


//uncoment this to run

// function createlncrement() {
//     let count= 0;
//     let message;
//     function increment() {
//         count++;
//         message = `Count is ${count}`;
//     }

//     function log() {
//         console.log(message);
//     }

//     return [increment,log];
// }

// const [increment,log] = createlncrement();
// increment();
// increment();
// increment();
// log();