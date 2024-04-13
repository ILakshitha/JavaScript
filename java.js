var x=100;
const a= 10;
a=20;
console.log(a);

var myGloble = 10;

function func1(){
    oopsGloble =5;

}

function func2(){
    var output = "";
    if (typeof myGloble!= "underfined"){
        output += "myGloble : " +myGloble;
    }
    if (typeof oopsGloble!= "underfined"){
        output += "oopsGloble : " +oopsGloble;
    }

    console.log(output);

}

func1();
func2();