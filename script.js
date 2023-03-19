let uname;

document.getElementById("button1").onclick =function(){
    uname = document.getElementById("input").value;
    console.log(uname);
    document.getElementById("myLabel").innerHTML = "Hello " + uname;
    document.getElementById("inpdiv").innerHTML=" ";
}
