products=[
    [1,"hide and seek",50,20],
    [2,"lays",20,80],
    [3,"oreo",40,100],
    [4,"parleg",25,10],
    [5,"tiger",20,0],
]

console.log(products.forEach(p=>p[1]));
products.forEach(item=>console.log(item[1]))

// var a= [1,23,4,4,3]
// console.log(a.map(b=>b));
// a.forEach(b=>console.log(b))

products.forEach(item=>console.log(item[2]))
