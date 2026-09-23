// var arr = [1,2,3,4,5];
// // arr.forEach(function(val){
// //     console.log(val+" hello");
// // })

// var ans = arr.map(function(val){
//     return 13 ;
// })
// // console.log(ans);

// var newarr = arr.filter(function(val){
//     if( val>3){ return true;}
//     else{return false ;}
// })
// console.log(newarr);
 
// var newA = arr.find(function(val){
//     if(val===2){ return val;}
// })
// console.log(newA);
// arr.indexOf(12);

// var obj = {
//     name : "Anand " ,
//     age : 12 
// }
// // object.freeze(obj);

// obj.name = "uttam"


// var abcd = function(a,b,c,d,){

// }

// var blob = awaitfetch(`https://randomuser.me/api/`);
// var res = await blob.json();

// console.log(res);

async function ayu() {
    var blob = await fetch(`https://randomuser.me/api/`)
    var ans = await blob.json();
    console.log(ans.results[0].name.first);
}
ayu();