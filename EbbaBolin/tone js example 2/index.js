//const button = document.getElementById("button");
const synth = new Tone.Synth().toDestination();
const now = Tone.now();

//const guitar = new Tone.Player("./sounds/guitar.wav").toDestination();
//const drums = new Tone.Player("./sounds/drums.wav").toDestination();

document.getElementById("button").addEventListener("mousedown", buttonone);
document.getElementById("button1").addEventListener("mousedown", buttontwo);
document.getElementById("button2").addEventListener("mousedown", buttonthree);
document.getElementById("button3").addEventListener("mousedown", buttonfour);
document.getElementById("button4").addEventListener("mousedown", buttonfive);
document.getElementById("button5").addEventListener("mousedown", buttonsix);

  function buttonone(){
  
    synth.triggerAttack("D4", now)
     document.getElementById("button").style.backgroundColor = "lightpink";
     document.getElementById("button1").style.backgroundColor = "white";
    };

    function buttontwo(){
  
      synth.triggerRelease(now+1)
       document.getElementById("button1").style.backgroundColor = "lightpink";
       document.getElementById("button").style.backgroundColor = "white";
      };
      
      function buttonthree(){
  
        synth.triggerAttack("F4", now)
         document.getElementById("button2").style.backgroundColor = "lightpink";
         document.getElementById("button3").style.backgroundColor = "white";
        };
    
        function buttonfour(){
      
          synth.triggerRelease(now+1)
           document.getElementById("button3").style.backgroundColor = "lightpink";
           document.getElementById("button2").style.backgroundColor = "white";
          };
          
      
          function buttonfive(){
  
            synth.triggerAttack("A4", now)
             document.getElementById("button4").style.backgroundColor = "lightpink";
             document.getElementById("button5").style.backgroundColor = "white";
            };
        
            function buttonsix(){
          
              synth.triggerRelease(now+1)
               document.getElementById("button5").style.backgroundColor = "lightpink";
               document.getElementById("button4").style.backgroundColor = "white";
              };

  


