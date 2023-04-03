var numbers=[], number,index,indexNum, x, num, i, sortedNumbers, main=[], count=0,max,min;
document.getElementById("input").onchange=function(){
    let input = document.getElementById("input").value;
    input=Number(input);
        
    let n = numbers.push(input);
        
    x=numbers.length;
            
    index=Math.floor(Math.random()*x);
    number = numbers[index];
    number=Number(number);
    console.log(`Index no.: ${index} -------> Number: ${number}  ------- size: ${x}`);
    main = numbers;
    console.log(numbers);
    document.getElementById("display").style.display="block";
    document.getElementById("display").innerHTML=`The Array: [ ${numbers} ]`;
    document.getElementById("input").value=" ";
    document.getElementById("rm").style.backgroundColor="black";
    document.getElementById("rm").style.color="tomato";
        
    }


    document.getElementById("sort").onclick = function(){
        sortedNumbers=numbers.sort(function(a,b){
            return a-b
        });

        document.getElementById("display").innerHTML=`The sortedArray: [ ${sortedNumbers} ]`;
        document.getElementById("rm").style.backgroundColor="black";
        document.getElementById("rm").style.color="tomato";
      
    }
    document.getElementById("inverse"). onclick=function (){
        let inverted=numbers.reverse();

        document.getElementById("display"). innerHTML=`The invertedArray: [ ${inverted} ]`;
        document.getElementById("rm").style.backgroundColor="black";
        document.getElementById("rm").style.color="tomato";
        }

    document.getElementById("rm").onclick=function (){
        let rm=numbers.pop();
        document.getElementById("display").style.display="block";
        document.getElementById("display"). innerHTML=`The Array: [${numbers}]`;
    }
    input.addEventListener('keydown', function(event) {
        const key = event.key;
        if (key === "Backspace" || key === "Delete") {
            let rm=numbers.pop();
            document.getElementById("display").style.display="block";
            document.getElementById("rm").style.backgroundColor="tomato";
            document.getElementById("rm").style.color="black";
            
            document.getElementById("display"). innerHTML=`The Array: [${numbers}]`;
        }
    });

    var maxminCount=0;
    document.getElementById("maxmin").onclick = function(){
        maxminCount+=1;
        if(maxminCount%2!=0){
            max = Math.max(...numbers);
            document.getElementById("maxmin").innerHTML="Minimum";
            document.getElementById("display").innerHTML = `Maximum number of this array: ${max}`;
            console.log(`Max: ${max}`);
        }else if(maxminCount%2==0){
            min = Math.min(...numbers);
            document.getElementById("maxmin").innerHTML="Maximum";
            document.getElementById("display").innerHTML = `Minimum number of this array: ${min}`;
            console.log(`min: ${min}`);

        }
    }
    
    document.getElementById("odd").onclick=function(){
      let odd=[], even=[];
      for(let number of numbers){
        if(number%2!=0){
          odd.push(number);
        }else if(number%2==0){
          even.push(number);
        }
       
      }
      count+=1;
        if(count%2==0 ){
       document.getElementById("odd"). innerHTML="Odd";
       document.getElementById("display"). innerHTML=`Evens: [ ${even} ]`;
     }else if(count%2!=0){
       document.getElementById("odd"). innerHTML="Even";
      document.getElementById("display"). innerHTML=`Odds: [ ${odd} ]`;
     }
     console.log(`counter: ${count}`);
    }



//Filter in array--> arrray.filter(function without parantheses) == creates another array that that satisfies a function;
    document.getElementById("cancel-filt").onclick=function(){
        counter+=1;
        document.getElementById("filt").style.display="none";
        document.getElementById("filt-bg").style.display="none";
    }

    var counter=1;
    document.getElementById("filter").onclick=function(){

        
        counter+=1;
        if(counter%2==0){
            document.getElementById("filt").style.display="block";
            document.getElementById("filt-bg").style.display="block";
            
            document.getElementById("ok-filt").onclick=function(){
                let filterInput=document.getElementById("filter-input").value;
                console.log(`filterInput: ${filterInput}`);

                let filtA=numbers.filter(checkNumb);
                console.log(`The filtered Array: [${filtA}]`);
                document.getElementById("display").innerHTML = `The filtered Array: [${filtA}]`;
                document.getElementById("filt").style.display="none";
                document.getElementById("filt-bg").style.display="none";
                counter+=1;
                function checkNumb(element){
                   if(document.getElementById("above").checked == true){
                    return element>filterInput;
                   }else if(document.getElementById("eq").checked == true){
                    return element == filterInput;
                   }else if(document.getElementById("below").checked == true){
                    return element<filterInput;
                   }
                }
                
            }

 
        }else if(counter%2!=0 ){
         
            document.getElementById("filt").style.display="none";
            document.getElementById("filt-bg").style.display="none";
        }
    }
