// var arr=[44,170,56,100,34,64,150,23,11,12,1]

// console.log(arr.sort())

// console.log(arr.sort((a,b)=>a-b))
// console.log(arr.sort((a,b)=>b-a))


// var a=[10,11,12,13,14]
// console.log(a.map(item=>item))
// console.log(a.map(item=>item*item))
// console.log(a.map(item=>Math.sqrt(item)))
// console.log(a.filter(item=>item%2==0))
// console.log(a.reduce((a,b)=>a+b))
// console.log(a.reduce((a,b)=>a>b?a:b))
// console.log(a.reduce((a,b)=>a<b?a:b))



// a=[1,2,3,4,5,6,7]
// console.log(a.map((item)=>item>=5? item+1: item-1))



// arr=[
//     [1,"manu",100],
//     [2,"vinu",200],
//     [3,"shibu",100],
//     [4,"sanu",100],
//     [5,"sachu",300]
// ]
console.log(arr.reduce((a,b)=>a[2]<b[2]? a:b))
console.log(arr.reduceRight((a,b)=>a[2]<b[2]? a:b))




a=[
    [10,50,20],
    [21,66,70],
    [80,30]
]

console.log(a.flat().filter(item=>item<50));




var employee=[
    [1000,"aju","developer","calicut",250000,3],
    [1001,"anu","tester","kochi",200000,2],
    [1002,"a","data analyst","calicut",750000,2],
    [1003,"b","developer","malapuram",500000,2],
    [1004,"c","content creator","kannur",207000,2]
]
//employee name

// for(items of employee){
//     console.log(items[1])
// }


// number of employees
    console.log(employee.length)



//developer employee
// for(key of employee){
//     if(key[2]=="developer"){
//         console.log(key)
//     }
// }

//salary greater than 30000
// for(items of employee){
//     if(items[4]>300000){
//         console.log(items)
//     }
// }


//employee anu
// for(items of employee){
//     if(items[1]=="anu"){
//         console.log(items)
        
//     }
// }






var a=[[1,2],[10,22],[14,21],[3,6],[5,9],[19,28],[9,0]]
for(items of a){
    for(keys of items){
        if(keys<10){
            console.log(keys)
        }
    }
}