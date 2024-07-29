products=[
    [1,"hide and seek",50,20],
    [2,"lays",20,80],
    [3,"oreo",40,100],
    [4,"parleG",25,10],
    [5,"tiger",20,0],
    [6,"unibic",60,20],
    [7,"good day",70,20],
]
    
// products name

// console.log(products.map((a=>a[1])));
// console.log(products.filter(a=>a[2]<=50));
// console.log(products.filter((a=>a[1]=="oreo")))
// console.log(products.reduceRight((a,b)=>a[2]>b[2]?a:b))
// console.log(products.filter(a=>a[3]==0))
// console.log(products.filter(a=>a[0]==4))
// console.log(products.sort((a,b)=>b[3]-a[3]))
// console.log(products.sort((a,b)=>a[2]-b[2]));
console.log(products.reduceRight((a,b)=>a[3]>b[3]?a:b))
console.log(products.reduceRight((a,b)=>a[3]<b[3]?a:b));