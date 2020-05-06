var x=[22,23,24,18,19];
    document.write(x+"<br>");

    var y=x.every(checkAdult);
    document.write(y);

    function checkAdult(age){
        return age>=18;
    }