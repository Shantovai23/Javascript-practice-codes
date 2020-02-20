var list=[23,53,65,872,3245,657,23,4,6,1,5,9,46];
    var length=list.length-1;

    for(var i=0; i<length; i++){
        for(var j=0; j<length; j++){
            if(list[j]>list[j+1]){
                [list[j],list[j+1]]=[list[j+1],list[j]];
            }
        }
    }
    document.write(list);