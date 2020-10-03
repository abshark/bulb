var image= document.getElementById("abc");
var check=document.getElementById("b");
function fun() {
    if(check.checked == true){
        image.src="glow.jpg";

    }
    else{
        image.src="download.jpg"
    }
}