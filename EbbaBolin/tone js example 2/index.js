
const synth = new Tone.Synth().toDestination();
const synth1 = new Tone.Synth().toDestination();
const synth2 = new Tone.Synth().toDestination();
const synth3 = new Tone.Synth().toDestination();
const now = Tone.now();



document.getElementById("button").addEventListener("mousedown", buttonzero);
document.getElementById("button1").addEventListener("mousedown", buttonone);
document.getElementById("button2").addEventListener("mousedown", buttontwo);
document.getElementById("button3").addEventListener("mousedown", buttonthree);
document.getElementById("button4").addEventListener("mousedown", buttonfour);
document.getElementById("button5").addEventListener("mousedown", buttonfive);
document.getElementById("button6").addEventListener("mousedown", buttonsix);
document.getElementById("button7").addEventListener("mousedown", buttonseven);
document.getElementById("button8").addEventListener("mousedown", buttoneight);

  function buttonzero(){
  
    synth.triggerAttack("D4", now)
     document.getElementById("button").style.backgroundColor = "lightpink";
     document.getElementById("button1").style.backgroundColor = "white";
    };

    function buttonone(){
  
      synth.triggerRelease(now)
       document.getElementById("button1").style.backgroundColor = "lightpink";
       document.getElementById("button").style.backgroundColor = "white";
      };
      
      function buttontwo(){
  
        synth1.triggerAttack("F4", now)
         document.getElementById("button2").style.backgroundColor = "lightpink";
         document.getElementById("button3").style.backgroundColor = "white";
        };
    
        function buttonthree(){
      
          synth1.triggerRelease(now)
           document.getElementById("button3").style.backgroundColor = "lightpink";
           document.getElementById("button2").style.backgroundColor = "white";
          };
          
      
          function buttonfour(){
  
            synth2.triggerAttack("A4", now)
             document.getElementById("button4").style.backgroundColor = "lightpink";
             document.getElementById("button5").style.backgroundColor = "white";
            };
        
            function buttonfive(){
          
              synth2.triggerRelease(now)
               document.getElementById("button5").style.backgroundColor = "lightpink";
               document.getElementById("button4").style.backgroundColor = "white";
              };

  

              function buttonsix(){
  
                synth3.triggerAttack("C4", now)
                 document.getElementById("button6").style.backgroundColor = "lightpink";
                 document.getElementById("button7").style.backgroundColor = "white";
                };
            
                function buttonseven(){
              
                  synth3.triggerRelease(now)
                   document.getElementById("button7").style.backgroundColor = "lightpink";
                   document.getElementById("button6").style.backgroundColor = "white";
                  };

                  function buttoneight(){
                    synth.triggerRelease(now)
                    synth1.triggerRelease(now)
                    synth2.triggerRelease(now)
                    synth3.triggerRelease(now)
                    document.getElementById("button1").style.backgroundColor = "lightpink";
                    document.getElementById("button").style.backgroundColor = "white";
                    document.getElementById("button3").style.backgroundColor = "lightpink";
           document.getElementById("button2").style.backgroundColor = "white";
           document.getElementById("button5").style.backgroundColor = "lightpink";
               document.getElementById("button4").style.backgroundColor = "white";
               document.getElementById("button7").style.backgroundColor = "lightpink";
               document.getElementById("button6").style.backgroundColor = "white";
                    };
    

