# Refined Bee Slider Prototype
## What does it do?
This is meant as a prototype that explores the interaction we expect from our Bee project, with a focus on how the sound might modulate and change based on the user's ditance from the bee and the moisture of the soil. The distance slider adds a synth after some cutoff values and the moisture slider detunes the synths when the percentage is lowered makig the overall sound inharmonious.
## What does this example explore?
This prototype explores one of the possible applications of how one might connect Tone to the DOM with a concrete example of our Bee project. A further exploration of this would be to connect it through Node Express and Johnny Five to an arduino with the correct corresponding sensors.  
## Installation & usage
For all examples i use the Tone.js CDN:
> <script src="https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.10/Tone.js"></script>
To use tone this way you only need to put this script tag in the body of the main HTML document of any new Tone projects.

**To open my prototypes please use the Live Server plugin in Visual Studio Code**
## Contributions
This is a continuation of the Toneslider prototype and is therefore very loosely based on the ["Hello Tone"](https://tonejs.github.io/) example. 
The mapping function is from user _Enijar_ from the [GitHub forum](https://gist.github.com/xposedbones/75ebaef3c10060a3ee3b246166caab56)
All other code is my own
