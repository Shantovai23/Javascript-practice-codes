var x=[12,14,15,20,2,30];
  document.write(x+"<br>");

  var y=x.findIndex(check);
  document.write(y+"<br>");


  function check(age){
      return age>=18;
  }