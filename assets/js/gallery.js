var elments = document.getElementsByClassName("column-g");
var i;

function one(){
    for(i=0; i<elments.length; i++){
        elments[i].style.msflex ="100%";
        elments[i].style.flex  = "100%";
    }
}
function two(){
    for(i=0; i<elments.length; i++){
        elments[i].style.msflex ="50%";
        elments[i].style.flex  = "50%";
    }
}
function four(){
    for(i=0; i<elments.length; i++){
        elments[i].style.msflex ="25%";
        elments[i].style.flex  = "25%";
    }
}

//Add action class to the currennt button

var gallery = document.getElementById("galleryid");
var btns = addEventListener("btn");

for(var i=0; i<btns.length; i++){
    btns[i].addEventListener("click",function(){
        var current =document.getElementsByClassName
        ("active");
        current[0].className =current[0].className.
        replace("active","");
        this.className +="active";
    });
}