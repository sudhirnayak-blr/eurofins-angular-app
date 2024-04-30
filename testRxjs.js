var {Observable, of, filter, map, reduce, from}  = require("rxjs");
const { observeNotification } = require("rxjs/internal/Notification");

let arr = [1,2,3,4,5,6,7,8,9,10]; 

function filterFn(value, index) { 
    console.log('filter fn', value, index); 
    return value %2 ==0;
}
let filteredArray = arr.filter(filterFn); 
console.log(filteredArray);
function mapFn(value, index) { 
    console.log('map', value, index)
    return value + 10; 
}
let mappedArray = filteredArray.map(mapFn); 
console.log(mappedArray);
function reduceFn(prevValue,currValue) { 
    console.log('reduce', prevValue, currValue);
    return prevValue+currValue;
}
let sum = mappedArray.reduce(reduceFn);
console.log(sum);


// // console.log('-------------------------')
// let sum2 = arr.filter(filterFn)
//             .map(mapFn)
//             .reduce(reduceFn); 
// console.log(sum2)

// let arrValues = new Observable((subscriber)=>{
//     subscriber.next(1);
//     console.log('sent first item')
//     subscriber.next(2);
//     console.log('sent 2nd first item')
//     subscriber.next(3);
//     console.log('sent 3rd item')
//     subscriber.next(4);
//     console.log('sent 3rd item')
//     subscriber.next(5);
//     console.log('sent 3rd item')
//     subscriber.next(6);
// })
// arrValues.subscribe({
//     next(x) { console.log('received. ', x); }, 
//     error(e) { console.log(e) }, 
//     complete(e) {console.log('completed'); }
// });
// let obs1 = from([1,2,3,4,5,6,7,8,9,10]);
// of(arr).pipe(
//     filterFn((value,index)=>value%2==0),
//     mapFn((value,index)=>value+10),
//     reduceFn((prevValue, currValue) => prevValue+currValue)
// ).subscribe( data=> console.log(data)
// );

// from(arr)
// .pipe(
//     filter(filterFn),
//     map(mapFn),
//     reduce(reduceFn)
// ).subscribe(x=>console.log('result',x));

/*
Promise 
-- is a task that will be executed in future 
- either resolve or reject and this marks the completion of the task. 

EventEmitter -> subscription was added and the task could get executed/invoked 
    multiple times 

RxJs 
- functional programming, iterator pattern and observable pattern 
- Observable - core Rxjs class 
- Observer - raise notifications - event delegates 
- Subscriptions -> functions that subscribe to the delegates/observers 
- Subject -> like the Event Emitter class for multi-casted event handling

*/

// var data = 1; 
// var promise = new Promise((resolve, reject) =>{
//     if(data%2==0)
//         resolve('promise resolved ' + data); 
//     else 
//         reject('promise rejected ' + data)
// }); 
// console.log('promise initialized')
// var observer = new Observable(function() { 
//     console.log('observer function called ', data );
// })
// console.log('observable initialized');
// for(let index=0;index<20; index++) { 
//     data++; 
//     observer.subscribe(); 
//     promise.then((d)=>console.log(d), (e)=>console.log('err: ', e))
//     observer.subscribe();
//     promise.then((d)=>console.log(d), (e)=>console.log('err: ', e))
// }

// let obs = new Observable((observer) => { 
//     for(let i=1; i<11; i++) { 
//         console.log('inside the observer, ', i)
//         observer.next(i); //yields the current value

//         if(i==8) { 
//             observer.complete(); //stops the push notifications
//             //all subscriptions will be marked as completed.
//         }
//         if(i==5) { 
//             observer.error(Error('Error from observer'))
//         }
//     }
// })
// obs.subscribe({
//     next(value) { console.log('next value, ', value);}, 
//     complete() { console.log('Iteration completed.')},
//     error(err) { console.log('Error: ', err)}
// });

// let obs2 = of(11,22,33,44,55,66,77,88,99,110); 
// let sub = obs2.subscribe({
//     next: (result) => console.log(result),
//     complete : () => console.log('completed'),
//     error: (err)=> console.log(err)
// });
// sub.unsubscribe();

// Data Pipelining 
//--> push values from one function to another function till the end of the 
// function chain. 
// f1.next() -> pushes one value to f2, f2.next() pushes it to f3..... 
let obs3 = from(arr); 
obs3.pipe(
    filter(filterFn),
    map(mapFn),
    reduce(reduceFn)
).subscribe(
    (data)=>console.log('Final data: ', data)
);


