
//let gameover = document.getElementById("gameover")
//let gameover =true
document.getElementById("gameover").style.display ="none"

/*function Gameover() {
    let gameover = document.getElementById("gameover");
   // gameover.style;

    if(getComputedStyle(gameover).display != "none"){
        gameover.style.display = "none";
      } else {
        gameover.style.display = "block";
      }
    };
 Gameover()*/



piece();

function piece(){
  // recuperation de la resolution de l'ecran chez l'utilisateur
  // positionnement aleatoire
  posx = Math.floor(Math.random()*(window.innerWidth-100)+50);
  posy = Math.floor(Math.random()*(window.innerHeight-100)+50);
  
  // recuperation de l'element div servant a afficher l'image
    document.getElementById("piece").setAttribute("style","position:absolute; left:"+posx+"px ; top:"+posy+"px ;");
  // ajustement de l'attribute style, notament left et top
}
    

let mariox = window.innerWidth/2;
let marioy = window.innerHeight/2;

document.getElementById("perso").style.left= mariox + "px";
document.getElementById("perso").style.top= marioy + "px";
    
function depmario (event){

  if(event.key == "ArrowLeft"){  
        mariox -= 20;
        document.getElementById("perso").style.left= mariox + "px";
        collision()
        
    }
    if(event.key=="ArrowRight"){
      mariox+=20;
      document.getElementById("perso").style.left= mariox+"px";
      collision()
      
  }
  if(event.key=="ArrowDown"){
      marioy+=20;
      document.getElementById("perso").style.top= marioy+"px"
      collision()
      
  }
  if(event.key=="ArrowUp"){
      marioy-=20;
      document.getElementById("perso").style.top= marioy+"px";
      collision()
      
  }
    
}

document.addEventListener("keydown",depmario); 

let score = 0
function  collision(){
  
    if(
    mariox +60 >= posx&&
    mariox <=posx +40 &&
    marioy +60 >= posy&&
    marioy <=posy +40)
  {
   piece()
   score++;
   document.getElementById("score").innerHTML="score :"+ score}
  }
  let temps = 30
  let timerElement = document.getElementById("secondes")

  function diminuerTemps() {
    if(temps >= 0){
      timerElement.innerHTML= "Temps restant : "+ temps+ " s"
    temps--
  }else{
    document.getElementById("gameover").style.display ="block"
    document.getElementById("perso").style.display ="none"
    document.getElementById("piece").style.display ="none"
  }
    // document.getElementById("gameover").style.display ="block"
    // temps = temps <= 0 ? 0 : temps
  }
  setInterval(diminuerTemps, 1000)
  // gameover.style.display= "block";
  // const goomba = new Image (70,70); 
  // document.body.appendChild(goomba); 
  // goomba.style.position = "absolute" 
  // goomba.style.left = "500px" ; 
  // goomba.style.top = "100px" ; 
  // goomba.src = "img/goomba.png";



