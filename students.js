arr=[
    [1,"manu",12,45,65,70],
    [2,"amal",10,67,86,75],
    [3,"sara",12,86,87,90],
    [4,"vimal",10,86,56,93],
    [5,"shaju",12,56,61,70],
    [6,"kavita",10,55,56,60],
]
// console.log(arr.sort((a,b)=>b[3]-a[3]));
// console.log(arr.filter(a=>a[2]==10));
// arr.forEach(a=> console.log(a[1]));
// console.log(arr.filter(a=>a[1]=="kavita"));
console.log(arr.reduceRight((a,b)=>a[4]<b[4]?a:b));
console.log(arr.reduceRight((a,b)=>a[5]>b[5]?a:b));
console.log(arr.some((a=>a[1]=="amal")));
console.log(arr.map(a=>a[4]));
arr.filter(a=>a[2]==10).forEach(a=>console.log(a[1]))
console.log(arr.some((a=>a[2]==11)));