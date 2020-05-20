var x={
     fName: "Hasibul",
     lastName: "Shanto",
     age : 21,
     favMovies : ['dhoom','titanic','bodyguard'],
     address : {

         city : "Dhaka",
         counrty: "Bangladesh",

     },
     salary : function(){
         return 50000;
     },

     fullName: function(){
         return this.fName+ " "+this.age;
    



 }

document.write(x.address.city);
console.log(x);