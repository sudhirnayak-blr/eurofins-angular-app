var {Observable, of, filter, map, reduce, from}  = require("rxjs");

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

from(arr)
.pipe(
    filter(filterFn),
    map(mapFn),
    reduce(reduceFn)
).subscribe(x=>console.log('result',x));
