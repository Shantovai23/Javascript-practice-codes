var x=[
    {name: "Shanto",City: "Dhaka",Age: 20},
    {name: "Hasibul",City: "Savar",Age: 21},
    {name: "Hasan",City: "Bhola",Age: 22},
];

x[3]={name: "Cool",City: "Noakhali",Age: 100}
delete x[1];

var y=x.map(test)
document.write(y);


function test(i){
    return i.name+" "+i.City+" "+i.Age;
}