for(var i=0;i<document.querySelectorAll(".go").length;i++)
{
document.querySelectorAll("button")[i].addEventListener("click",function(){
     makesound(this.innerHTML)
     /*{
      switch(this.innerHTML){
        case "w":new Audio('sounds/tom-1.mp3').play();
        break;
        case "a":new Audio('sounds/tom-2.mp3').play();
        break;
        case "s":new Audio('sounds/tom-3.mp3').play();
        break;
        case "d":new Audio('sounds/tom-4.mp3').play();
        break;
        case "j":new Audio('sounds/kick-bass.mp3').play();
        break;
        case "k":new Audio('sounds/snare.mp3').play();
        break;
        case "l":new Audio('sounds/crash.mp3').play();
        break;
        
        default: console.log("Wrong button");
        
     }*/
});

}

document.addEventListener("keydown",function(event){
   makesound(event.key);
});

function makesound(key){

   switch(key){
      case "w":new Audio('sounds/tom-1.mp3').play();
        break;
        case "a":new Audio('sounds/tom-2.mp3').play();
        break;
        case "s":new Audio('sounds/tom-3.mp3').play();
        break;
        case "d":new Audio('sounds/tom-4.mp3').play();
        break;
        case "j":new Audio('sounds/kick-bass.mp3').play();
        break;
        case "k":new Audio('sounds/snare.mp3').play();
        break;
        case "l":new Audio('sounds/crash.mp3').play();
        break;

        default:console.log("Wrong Button");

   }
   //button pressed is pressed
   animate(key);
};

// var audio=new Audio('sounds/crash.mp3');
//audio.play();

//animation to the button pressed

function animate(currentKey){
   document.querySelector("."+currentKey).classList.add("pressed");

   setTimeout(function(){
      document.querySelector("."+currentKey).classList.remove("pressed")
   },1000);
}
