//circumference
let R;
let ans;
const PI = 3.14;
document.getElementById("button").onclick = function(){
    
    R = document.getElementById("R").value;
    console.log(R);
    ans = 2 * PI * R;
    document.getElementById("title").innerHTML="The circumference of the circle for given radius is " + ans + "cm";
    
}
