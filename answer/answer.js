/*

Don't cheat 

*/


/* <================= maths ====================> */

// q1 ==> Use all four functions or method  that round up let fl = 23.5151515151 
 
let fl = 23.5151515151 
 console.log(Math.trunc(fl))
 console.log(Math.round(fl))
 console.log(Math.ceil(fl))
 console.log(Math.floor(fl))



//  q2 ==> Return the min and max value from following data

// 🔥 => use spreading to array 

// let arr = [25,12,45,78,36,25,14]

let arr = [25,12,45,78,36,25,14]
console.log(Math.max(...arr))
console.log(Math.min(...arr))


// q3 ==> Create the random no between  [0 -> 11] && [1 --> 10]

// [ 0 --> 11 ]
let rno =Math.trunc( Math.random()*12)
console.log(rno)


//[1 --> 10]
let rn01 = Math.trunc(Math.random()*11)+1;
console.log(rn01)



// q4 ==> find square root and convert the negative value into positive 

let no1 = -4
console.log(Math.sqrt(Math.abs(no1)))

/* <================= strings ==================>  */

// q-5) fint the length of work [ Lucy ]

console.log('lucy'.length)


// q-6) convert string 'Apple' to both Upper case and Lower case  


console.log('Apple'.toUpperCase())
console.log('Apple'.toLowerCase())

// q-7)  convert 'This is sentence' into array  and just log word hero by performing operation on word 'Thehero'


let st = 'Bashingthequeen'
console.log(st.split(''))
console.log(st.slice(2,5))