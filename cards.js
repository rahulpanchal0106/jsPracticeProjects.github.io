  var cardsHeart=["Ace-H","2-H","3-H","4-H","5-H","6-H","7-H","8-H","9-H","10-H","Jack-H","Queen-H","King-H"];
  var cardsDiamond=["Ace-D","2-D","3-D","4-D","5-D","6-D","7-D","8-D","9-D","10-D","Jack-D","Queen-D","King-D"];
  var cardsSpade=["Ace-S","2-S","3-S","4-S","5-S","6-S","7-S","8-S","9-S","10-S","Jack-S","Queen-S","King-S"];
  var cardsFlower=["Ace-F","2-F","3-F","4-F","5-F","6-F","7-F","8-F","9-F","10-F","Jack-F","Queen-F","King-F"];
  var cards=["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
  
  var allCards=[];
  allCards.push(cardsHeart,cardsDiamond,cardsSpade,cardsFlower);
  console.log(`All cards: [${allCards}]`);
  cards.forEach(print);
  function print(element){
    console.log(element);
  }
  document.getElementById("shuffle").onclick=()=>{
    document.getElementById("display").style.display="block";
    document.getElementById("display").style.borderColor="white";
    document.getElementById("display").style.border="2px white dotted";
    shuffle(cards);
  }
  
  
  function shuffle(cards){
    let cIndex=cards.length;
    for(let i=0;i<cIndex;i+=1){
      let rIndex=Math.floor(Math.random()*cards.length);
      cIndex-=1;
      let temp=cards[cIndex];
      cards[cIndex]=cards[rIndex];
      cards[rIndex]=temp;
    }
    
    console.log(`The shuffled cards: [${cards}]`);
    document.getElementById("display"). innerHTML=`Shuffled cards: [${cards}]`;

    return cards;
  }