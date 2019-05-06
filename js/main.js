

const colorChange = function() {
var r = Math.floor(Math.random()*256);
var g = Math.floor(Math.random()*256);
var b = Math.floor(Math.random()*256);
var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';

  return rgb;
}

const colorChangeFunction = function() {
var r = Math.floor(Math.random()*256);
var g = Math.floor(Math.random()*256);
var b = Math.floor(Math.random()*256);
var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';

    event.target.style.backgroundColor = rgb;
}

const removeColor = function() {
	event.target.style.fill = 'black';
}


const birdSongArray = [
 new Audio("bird-sounds/bittern-sound.m4a"),
	new Audio("bird-sounds/blackbird-sound.m4a"),
 	new Audio("bird-sounds/buzzard-sound.m4a"),
	new Audio("bird-sounds/chaffinch-sound.m4a"),
 	new Audio("bird-sounds/chiffchaff-sound.m4a"),
 	new Audio("bird-sounds/cuckoo-sound.m4a"),
 	new Audio("bird-sounds/curlew-sound.m4a"),
 	new Audio("bird-sounds/greenwoodpecker-sound.m4a"),
 	new Audio("bird-sounds/lapwing-sound.m4a"),
  new Audio("bird-sounds/littleowl-sound.m4a"),
	new Audio("bird-sounds/marshwarbler-sound.m4a"),
	new Audio("bird-sounds/nightingale-sound.m4a"),
  new Audio("bird-sounds/nightjar-sound.m4a"),
  new Audio("bird-sounds/pheasant-sound.m4a"),
	new Audio("bird-sounds/rook-sound.m4a"),
	new Audio("bird-sounds/skylark-sound.m4a"),
	new Audio("bird-sounds/sparrowhawk-sound.m4a"),
  new Audio("bird-sounds/starling-sound.m4a"),
	new Audio("bird-sounds/swift-sound.m4a"),
	new Audio("bird-sounds/tawnyowl-sound.m4a"),
  new Audio("bird-sounds/woodpigeon-sound.m4a"),
	new Audio("bird-sounds/wren-sound.m4a"),
	new Audio("bird-sounds/yellowhammer-sound.m4a"),
	]

	let songAndName = []

const handleBirdClick = function(event) {
	let fragmentTest = new RegExp("fragment")
	let birdWordTest = new RegExp("image")
let parentElement = event.target.parentElement.id
	const firstWord = parentElement.split('-')[0];
const secondWord = parentElement.split('-')[1]
		let birdMatch = new RegExp(firstWord)
		let soundMatch = new RegExp(secondWord)

		if ((songAndName.length===0) && (birdWordTest.test(parentElement))) {
			let clickedBird = firstWord + '-image'
document.getElementById(clickedBird).style.fill = colorChange();
console.log(songAndName)
for(i=0;i<birdSongArray.length;i++) {
		let audio = birdSongArray[i]
	  const playAudio = () => {
			audio.play()
		}
	//	let birdMatch = new RegExp(justBirdWord)
	let sourceString = birdSongArray[i].src
	//console.log(sourceString)
	if (birdMatch.test(sourceString)) {
		console.log(audio)

			playAudio()

}
}
}


let clickedBird = songAndName[0] + '-image'
let clickedId = songAndName[0] + '-fragment'
if ((birdWordTest.test(parentElement))&&(songAndName.length<3)) {
  songAndName.push(firstWord)
	console.log(songAndName)
}
if (fragmentTest.test(parentElement)) {
	console.log(parentElement)
songAndName.push(firstWord)
songAndName.push(secondWord)
console.log(songAndName)
}
if (songAndName.length>=2){
	songAndName.length===0;
	document.getElementById(clickedBird).style.fill = 'black';
}

if ((songAndName.length ===3) && (songAndName[2] === 'fragment'))  {
 if (songAndName[0]===songAndName[1]){

      document.getElementById(clickedId).style.opacity = 0;
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
	console.log(songAndName)
} else if((songAndName.length > 3)){
	songAndName.length = 0
	console.log(songAndName)
} else if (songAndName[1]==='fragment'){
	songAndName.length = 0
}
};

document.addEventListener("click", handleBirdClick)
