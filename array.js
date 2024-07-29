
covid_data=[
    [1,"ernakulam",34000,2000,23000,20000,2000],
    [2,"idukki",14000,3000,25000,3000,1000],
    [3,"thrissur",24000,4000,33000,24000,2500],
    [4,"pathanamthitta",20000,2000,45000,22000,1500],
    [5,"kozhikode",44000,5000,12000,21000,500],
    [6,"kottayam",27000,1500,27000,14000,1000],
    [7,"kollam",14000,2500,25000,1800,27000],
]

//  console.log(covid_data.reduce((a,b)=>a[3]<b[3]? a:b).find(item=>item[1]))
// console.log(covid_data.reduce((a,b)=>a[3]>b[3]? a:b).find(item=>item[1]))
// console.log(covid_data.reduce((a,b)=>a[5]>b[5]? a:b).find(item=>item[1]))
// console.log(covid_data.sort((a,b)=>b[2]-a[2]))
// console.log(covid_data.sort((a,b)=>a[6]-b[6]))
// console.log(covid_data.map(a=>a[4]).reduce((a,b)=>a+b))
covid_data.filter(a=>a[1]=="idukki").forEach(b=> console.log(b[4]))
// console.log(covid_data.find(a=>a[2]>27000));

