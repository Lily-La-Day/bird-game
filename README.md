# Bird Game

**Pre-Bootcamp Challenge (April 2019)**

**(And my very first game!)**

Overview

The aim of the game is to match the audio snippets of birdsong to the correct bird, the snippets play when the bird silhouettes are clicked and the egg fragments disappear if the correct bird is then selected. 

Technologies used: CSS3, HTML5, Vanilla JavaScript

Link to deployed game: https://lily-la-day.github.io/bird-game/

I made this game as a way of preparing for bootcamp. I was very worried that I would be totally out of my depth and that my classmates would all be semi-professional coders just looking to fine tune their skills. These fears were unfounded but I am glad that I had them as in the weeks before the course I put a lot of effort in to learning as much of the basics of CSS, HTML and JavaScript as I possibly could. This put me in a really good position starting out on the course as although I had only scraped the surface, I didn't have to worry about learning everything from actual scratch (well during weeks one and two anyway!). This allowed me to focus on really getting to grips with the concepts covered and to push myself that little bit further than I would have been able to had I still thought that a "div" was a pejorative term for a not very bright person and and nothing more. 

<th><p align="center"><img src="https://i.ibb.co/sRYs932/bird-game.png" width="700"></p></th>

**The "Graphics"** 

In my head the fragmented egg that would gradually be cleared seemed like a pretty simple concept - and don't get me wrong, it is simple but it definitely wasn't as simple to execute as I had anticipated it would be. I realised very quickly that I had no idea how to get or target indivdual fragments of an image or how to compose one image made of multiple bits. Good old google lead me to SVG and I am very glad that it did as this whole world of coded, unpixelated images that could be styled with css and targeted with JavaScript so specifically was brand new to me and very exciting! As much as now, I am less interested in design-y/CSS-y things than in other aspects of web development I would still like to come back and play around with SVG as a fun side project. I may try and make an SVG interactive self-portrait... then old me and new me will truly collide! 

I made my egg in Adobe Illustrator and then exported the fragments individually and added them to my HTML thusly: 

```js 
<g id="nightingale-fragment">
	<path style="fill:#E31C58;" d="M111.1,293.6c-0.3,0.5-0.6,1.1-1,1.6c-6.6,8-13.2,16.1-19.9,24c-1.6,1.9-3.5,3.5-5.6,4.9
		c-8.3,5.6-12.4,13.6-15.2,22.9c-3.1,10.4-6.9,20.6-10.7,31.2c-0.5,1.5-1.1,3-1.6,4.6c-0.8-0.6-1.5-1.2-2.2-1.8
		c-4.4-3.5-8.5-7.2-12.5-11.2c-1.3-1.3-2.5-2.6-3.8-3.9c-0.6-0.7-1.2-1.3-1.8-2c-1.2-1.3-2.4-2.7-3.5-4.1c-2.3-2.8-4.5-5.6-6.5-8.6
		c-1.9-2.4-3.4-5.1-4.4-8c-2.4-7.2-3.2-14.9-2.4-22.4c0.1-2,1.1-3.9,2.7-5.1c0.3-0.2,0.6-0.4,0.9-0.6s0.7-0.4,1-0.5
		c9-4.2,17.9-8.8,26.9-13c10.8-5,22.5-7.5,34.3-7.6c8-0.1,16-0.3,24-0.5C110,293.5,110.4,293.5,111.1,293.6z"/>
	<rect x="28.332" y="324.302" style="fill:none;" width="43.386" height="8.595"/>

		<text id="nightingale-word" transform="matrix(1 0 0 1 33.9476 328.4665)" style="fill:#FFFFFF; font-family:'Coming Soon'; font-size:6px;">nightingale</text>
</g>
```

**The Game**

Even this most basic of game logic was pretty tricky for a total newbie like me to implement in my JavaScript, it entailed checking the bird id of the audio sound against the bird id of the selected fragment and then changing the display of the fragment to "none" if a match was found. A this point in my coding career, I had evidently not been made aware (and was not astute enough to realise for myself) that it might be sensible to disentangle a huge, all-purpose function into clear self contained single-purpose functions. So I ended up with this (yes, it really is all one function): 

```js

const handleBirdClick = function(event) {
//using regex to match the bird namess
  let fragmentTest = new RegExp("fragment")
  let birdWordTest = new RegExp("image")
  //gets clicked bird
  let parentElement = event.target.parentElement.id
  const firstWord = parentElement.split('-')[0];
  const secondWord = parentElement.split('-')[1]
  let birdMatch = new RegExp(firstWord)
  let soundMatch = new RegExp(secondWord)
  
  //If song and name array is empty, so nothing else selected change bird colour and play matching bird audio
  if ((songAndName.length===0) && (birdWordTest.test(parentElement))) {
    let clickedBird = firstWord + '-image'
    document.getElementById(clickedBird).style.fill = colorChange();

    for(i=0;i<birdSongArray.length;i++) {
      let audio = birdSongArray[i]
      const playAudio = () => {
        audio.play()
      }
      //	let birdMatch = new RegExp(justBirdWord)
      let sourceString = birdSongArray[i].src

      if (birdMatch.test(sourceString)) {
        console.log(audio)
        
        playAudio()
        
      }
    }
  }
  
   let clickedBird = songAndName[0] + '-image'
  let clickedId = songAndName[0] + '-fragment'
  //if bird name clicked and one has not been clicked already, add to array 
  if ((birdWordTest.test(parentElement))&&(songAndName.length<3)) {
    songAndName.push(firstWord)
     }
  
  if (fragmentTest.test(parentElement)) {
    songAndName.push(firstWord)
    songAndName.push(secondWord)
  }
 //if no match, empty array and revert to black
  if ((songAndName.length>=2)&&(songAndName[0]!==songAndName[1])){
    songAndName.length=0;
    document.getElementById(clickedBird).style.fill = 'black';
    console.log('wrong')
  }
  //if they do match fragment disappears
  if ((songAndName.length ===3) && (songAndName[2] === 'fragment'))  {
    if (songAndName[0]===songAndName[1]){
      
      document.getElementById(clickedId).style.opacity = 0;
      evaporatedFragmentArray.push(1)
      document.getElementById(clickedBird).style.fill = colorChange();
      console.log(clickedBird)
      songAndName.length=0
      console.log(songAndName)
    }
    else if (songAndName[0]!==songAndName[1]){
      songAndName.length=0
      document.getElementById(clickedBird).style.fill = 'black';
      console.log(songAndName)
      
    }
    
  } else if ((songAndName.length ===3) && (songAndName[2] !== 'fragment')) {
    songAndName.length = 0
  } else if((songAndName.length > 3)){
    songAndName.length = 0
  } else if (songAndName[1]==='fragment'){
    songAndName.length = 0
  }
  //if 23 fragments have been added to evaporated fragment array, the user wins
  if (evaporatedFragmentArray.length === 23){
    alert('YOU WIN!')
  }
};

```

phew, trying to work that out was exhausting and a valuable lesson in why commenting should be done as one goes and is particularly important during those early days when one's code is not exactly _clear_. This is something I am still very bad at, I am acutely aware that this is something I need to improve upon. I just get too excited when coding and want to _make things happen_, I find it hard to stop and breathe and take time to _make things clear_ (which is just as important I know!).






