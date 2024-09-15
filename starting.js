// ternary


 const age = 2;
// if(age > 18){
//     console.log("You Can vote for bangladesh");
// }
// else{
//     console.log("You are not eligable for voting");
// }

// age > 18 ? console.log("vote dao giye")  : console.log("ghumiye poro when") ; 

 let price = 500;
const isLeader = true ;

// price = isLeader === true ? 50 : price+200;
// console.log(price)

price = isLeader === true ? price > 400 ? price/2 : 0 : price+5000;
console.log(price)