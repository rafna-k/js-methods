products=[
    [1,"hide and seek",50,20],
    [2,"lays",20,80],
    [3,"oreo",40,100],
    [4,"parleg",25,10],
    [5,"tiger",20,0],
]
// products.filter(a=>a[2]<=40 && a[2]>=20).forEach(item=>console.log(item[1]))
products.filter(a=>a[2]<=40 && a[2]>=20).find(item=>console.log(item[1]))
// products.forEach(a=>console.log(a[1]))
