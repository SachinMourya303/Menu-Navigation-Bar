function moveRight(){
    document.getElementById("btn").style.marginLeft="110px";
    document.getElementById("left").style.marginTop= "-50px";
    document.getElementById("right").style.marginTop= "-50px";
    document.getElementById("right").style.opacity= 0;
    document.getElementById("left").style.opacity=1;
    document.getElementById("left").style.marginLeft = "135px"
    document.getElementById("profile").style.height = "100px"
    document.getElementById("profile").style.width = "100px"
    document.getElementById("img").style.height = "100px"
    document.getElementById("main").style.width ="300px"
    document.getElementById("text1").style.opacity = 1;
    document.getElementById("text2").style.opacity = 1;
    document.getElementById("text3").style.opacity = 1;
    document.getElementById("text4").style.opacity = 1;
    document.getElementById("text5").style.opacity = 1;
}

function moveLeft(){
    document.getElementById("btn").style.marginLeft="-110px";
    document.getElementById("right").style.marginLeft="-100px";
    document.getElementById("left").style.marginTop= "8px";
    document.getElementById("right").style.opacity= 1;
    document.getElementById("left").style.opacity=0;
    document.getElementById("profile").style.height = "50px"
    document.getElementById("profile").style.width = "50px"
    document.getElementById("img").style.height = "50px"
    document.getElementById("main").style.width ="70px"
    document.getElementById("text1").style.opacity = 0;
    document.getElementById("text2").style.opacity = 0;
    document.getElementById("text3").style.opacity = 0;
    document.getElementById("text4").style.opacity = 0;
    document.getElementById("text5").style.opacity = 0;
    document.getElementById("categories").style.marginTop ="100px"
}