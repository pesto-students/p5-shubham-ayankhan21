// QUEUE USING 2 STACKS

function QUEUE(data){
    let s1 = [], s2 = []

    function enqueue(data){
        s1.push(data)
    }

    function dequeue(){
        while(s1.length!=0){
            s2.push(s1.pop())
        }
        return console.log(s2.pop())
    }

    function printQueue(){
        let arr = []
        while(s2.length!=0){
            arr.push(s2.pop())
        }
        return console.log(arr)
    }

    return {enqueue,dequeue,printQueue}
}

const q1 = new QUEUE()
q1.enqueue(20)
q1.enqueue(21)
q1.enqueue(22)
q1.enqueue(23)
q1.enqueue(24)
q1.printQueue()
q1.dequeue()
q1.printQueue()
