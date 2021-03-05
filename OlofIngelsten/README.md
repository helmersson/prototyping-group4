# Olof Ingelsten
These three prototypes were made using the [Tone.js](https://tonejs.github.io/) API library.
# Toneslider
## What does it do?
This prototype is based on the first "Hello Tone" example shown on the Tone.js website. It uses a HMTL slider element to change the pitch of the synthesizer that is playing. There are also buttons to turn it on and off.
## What does this example explore?
With this example I explored both how to make sound and synthesize it through Tone and how I then would connect it through the DOM to a website. Opening up Tone to the DOM gives you a plethora of tools to use when you need sound in web development. This is a very simple example but it is definitely scalable to larger projects where one might need sound effects, music, etc.
## Installation
For all examples i use the Tone.js CDN:
> <script src="https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.10/Tone.js"></script>
To use tone this way you only need to put this script tag in the body of the main HTML document of any new Tone projects.

**To open my prototypes you only need to open index.html.**
## Contributions
Code based on examples from ["Hello Tone"](https://tonejs.github.io/) on the Tone.js website. All other code i made myself.

# Polysynth
## What does it do?
This is a simple prototype that uses the Polysynth instrument to play the introduction melody to the 1954 classic **Mr.Sandman**. Press the button to play the melody.
## What does this example explore?
This example is a continuation of one of the limitations I found with the regular synthesizer, it's monophonic. This explores the possibilites of using polyphonic synths to play melodies. This is also a simple example with room for expansion, perhaps connecting MIDI files to play full songs or make a synthesizer website which allows users to play their own music perhaps.
## Installation
For all examples i use the Tone.js CDN:
> <script src="https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.10/Tone.js"></script>
To use tone this way you only need to put this script tag in the body of the main HTML document of any new Tone projects.
## Contributions
Code based on examples from ["Instruments --> Polysynth"](https://tonejs.github.io/) on the Tone.js website. All other code i made myself.

# Refined Bee Slider Prototype
## What does it do?
This is meant as a prototype that explores the interaction we expect from our Bee project, with a focus on how the sound might modulate and change based on the user's ditance from the bee and the moisture of the soil. The distance slider adds a synth after some cutoff values and the moisture slider detunes the synths when the percentage is lowered makig the overall sound inharmonious.
## What does this example explore?
This prototype explores one of the possible applications of how one might connect Tone to the DOM with a concrete example of our Bee project. A further exploration of this would be to connect it through Node Express and Johnny Five to an arduino with the correct corresponding sensors.  
## Installation
For all examples i use the Tone.js CDN:
> <script src="https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.10/Tone.js"></script>
To use tone this way you only need to put this script tag in the body of the main HTML document of any new Tone projects.
## Contributions
This is a continuation of the Toneslider prototype and is therefore very loosely based on the ["Hello Tone"](https://tonejs.github.io/) example. 
The mapping function is from user _Enijar_ from the [GitHub forum](https://gist.github.com/xposedbones/75ebaef3c10060a3ee3b246166caab56)
All other code is my own
