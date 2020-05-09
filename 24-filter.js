 var x=[12,3,4,5,0,1,10,1.6,1.5,2];
  document.write(x+"<br>");

  var y=x.filter(check);
  document.write(y);

  function check(even){
      if(even%2!=0){
        return true;
      }
  }