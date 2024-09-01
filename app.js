// for loop -> dawtalt
for(var i=1; i<=10; i++){
    console.log("hello"+i);
}
// i=1 -> 1<=10 -> true -> hello1 -> 2
// i=2 -> 2<=10 -> true -> hello2 -> 3
// i=11 -> 11<=10 -> false -> stop
for(var i =10; i>=1; i--){
    console.log(i);
}
for(var i=1; i<=20; i++){
    if( i%2 == 0){
        console.log(i);
    }else{

    }
}
for(var i=1; i<=30; i++){
    if(i%3 == 0){
        if(i%5 == 0){
            console.log(i);
        }else{

        }
    }else{

    }
}
var niilber=0;
var urjver=1;
for(var i=1; i<=10; i++){
    niilber=niilber+i;
    urjver=urjver*i;
}
console.log(niilber);
console.log(urjver);
/*random=Math.floor(Math.random()*10)+1;
console.log(random);
for(var i=1; i <= 3; i++){
    var too=prompt("too=");
    if(random == too ){
        console.log("computer choice = "+random);
        console.log("your choice = "+too);
        console.log("You win");
        if( i == 1){
            alert("ta ehnii oroldlogooroo yallaa");
        }else if(i == 2){
            alert("ta 2 doh oroldlogooroo yallaa");
        }else{
            alert("ta suuliin oroldlogooroo yallaa");
        }
        break;
    }else if(too > random){
        alert("ih bn");
    }else if(too < random){
        alert("baga bn");
    }else{
        alert("try again");
    }
    if(i == 3){
        console.log("computer choice = "+random);
        console.log("your choice = "+too);
        alert("You lose");
    }
}*/
// nested loop -> loop dotor dahiad loop bichih 
for(var i = 1; i <= 10; i++){
    for(var q = 1; q <= 10; q++){
        console.log(i+" X "+q+" = "+(i*q));
    }
}
for (var i = 1; i <= 5; i++) {
    var row = '';
    for (var j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}