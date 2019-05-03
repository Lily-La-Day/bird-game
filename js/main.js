


//let bird = document.getElementById("lapwing-image");

//const playAudio = () => {


//bird.addEventListener('click', playAudio)

 //const testFunction = () => {
//let audio = new Audio("bird-sounds/lapwing-sound.m4a" )
//const playAudio = () => {
	//	audio.play()
	//}

//let nodeImages =	document.querySelectorAll(('[class^="bird-image"]'))
//let birdImageArray = Array.prototype.slice.call(nodeImages)
//let birdImageArray = [];
//birdImageArray.push(document.querySelectorAll(('[class^="bird-image"]')))
//birdImageArray[2].addEventListener('click', playAudio)

//for(i=0;i<birdImageArray; i++){
//birdImageArray[i].addEventListener('click', playAudio)
//birdImageArray.forEach(function(birdImage){
//	birdImage.addEventListener('click', playAudio)
//})


//}
//testFunction()

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
new Audio("bird-sounds/blackbird-sound.m4a"),
 new Audio("bird-sounds/buzzard-sound.m4a"),
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
	let singing = true
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
		//console.log(birdMatch)
	for(i=0;i<birdSongArray.length;i++) {
		let audio = birdSongArray[i]
		const pauseAudio = () => {
			audio.pause()
		}
		const playAudio = () => {
			audio.play()
		}
	//	let birdMatch = new RegExp(justBirdWord)
	let sourceString = birdSongArray[i].src
	//console.log(sourceString)
	if (birdMatch.test(sourceString)) {
	//console.log(soundMatch.test('fragment'))
		//console.log(audio)
		//console.log(singing)
		//const playAudio = () => {
  //songAndName.push(firstWord)
				//if (songAndName.length===1){
         //audio.play()
        //console.log(songAndName.length)
				//console.log(songAndName)

//}
    songAndName.push(firstWord)
					//	if (songAndName.length===1){
			playAudio()

	//}
} else if (songAndName.length >1) {
	pauseAudio()
}
	}
}


if (fragmentTest.test(parentElement)) {
	console.log(parentElement)
songAndName.push(firstWord)
songAndName.push(secondWord)
console.log(songAndName)
}
if ((songAndName.length ===3) && (songAndName[2] === 'fragment'))  {
let clickedBird = songAndName[0] + '-image'
		if (songAndName[0]===songAndName[1]){
			let clickedId = songAndName[0] + '-fragment'
			//let clickedBird =  songAndName[0] + '-image'
      document.getElementById(clickedId).style.opacity = 0;
			document.getElementById(clickedBird).style.fill = colorChange();

			console.log(clickedBird)
			songAndName.length=0
			console.log(songAndName)
} else if (songAndName[0]!==songAndName[1]){
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
//console.log(birdWordTest.test(parentElement))
/*	if ((songAndName.length===0) && (birdWordTest.test(parentElement))) {
		colorChange();
	//console.log(birdMatch)
for(i=0;i<birdSongArray.length;i++) {
	let audio = birdSongArray[i]
//	let birdMatch = new RegExp(justBirdWord)
let sourceString = birdSongArray[i].src
//console.log(sourceString)
if ((birdMatch.test(sourceString)||(soundMatch.test('fragment')))) {
//console.log(soundMatch.test('fragment'))
	//console.log(audio)
	//console.log(singing)
	const playAudio = () => {

songAndName.push(firstWord)
			if (songAndName.length===1){

		  audio.play()

			//console.log(songAndName.length)
			console.log(songAndName)
		}

		}
		playAudio()
	}

}


}*/


	}









/*
const fragmentFunction = () => {
if (fragmentTest.test(parentElement)) {
console.log('fragment')
songAndName.push(soundMatch)
if ((songAndName.length ===2) && (songAndName[1] === 'fragment'))  {
 console.log('is it a match?')
console.log(songAndName)
}
}
fragmentFunction()
if ((songAndName.length ===1) && (secondWord===firstWord)) {
	songAndName.push(secondWord)
	console.log(songAndName)*/


document.addEventListener("click", handleBirdClick)

/*const matchToUse = handleBirdClick()
const birdSongMatch = function(eventtwo) {

	let parentElement = eventtwo.target.parentElement;
	const birdFragmentId = eventtwo.target.parentElement.id;
const birdFragmentWord = birdFragmentId.split('-')[0]
if(matchToUse === birdMatch) {
	console.log('yes')
}
	if (justBirdWord === birdFragmentWord) {
		document.birdFragment.style.opacity = 0;
	}
}*/

//document.addEventListener('click', birdSongMatch)
/*const birdSongMatch = function(event) {
	const birdFragment = event.target.birdFragment;
	const birdFragmentId = event.target.birdFragment.id;
	const birdFragmentWord = parentElement.split('-')[0]
	if (justBirdWord === birdFragmentWord) {
		document.birdFragment.style.opacity = 0;
	}
}*/

//const birdSongMatch = (event) => {
	//const birdFragment = event.target.parentElement;
	//const birdFragmentId = event.target.parentElement.id;
	//const birdFragmentWord = parentElement.split('-')[0]
	//if (justBirdWord === birdFragmentWord) {
	//	document.birdFragment.style.opacity = 0;
	//}
//}
	//console.log(birdSongArray[i].src.test(birdMatch))







/*const clickToPlay = () =>{

	let nodeBirds =	document.querySelectorAll(('[class^="bird-image"]'))
let birdImageArray = Array.prototype.slice.call(nodeBirds)
	//let birdImageArray = [];
const getBirdName = () => {
	//let nodeBirds =	document.querySelectorAll(('[class^="bird-image"]'))
	let birdsArray = Array.prototype.slice.call(nodeBirds)
let classNameString = ''
let birdWord = ''
	for (i=0;i<birdsArray.length;i++) {
		classNameString = birdsArray[i].className.animVal.split(' ').toString().split('-')[2]
		console.log(classNameString)
}
}
birdImageArray.forEach(function(birdImage){
	birdImage.addEventListener('click', getBirdName)
})
	//let birdName = birdsArray.forEach(function(bird){
	//	return bird.className
//	})
}
clickToPlay()*/



//	let idArray = [];
//	let getClassName = () =>{
//	return bird.className
//}
//	const getNameString=()=>{
		//should return array of
	//	let classArray = (array)={
	//		birdsArray.split(',')
	//		}
//		return classArray[0]
//	}

//
//const birdSoangObject= {
//	birdName: cuckoo
//}




/*let cuckooSound = new Audio("bird-sounds/cuckoo-sound.m4a")
const playCuckoo =()=>{
	 cuckooSound.play()
}
document.getElementById('cuckoo-image').addEventListener('click', playCuckoo)




const handleFragmentClick = function(event) {
	const parentElement = event.target.parentElement
	if (parentElement.dataset.target == "fragment") {
		toggleVisibility(parentElement)
	}
}

const toggleVisibility = function(el) {
	if (el.style.opacity !== "0") {
		el.style.opacity = 0
	} else {
		el.style.opacity = 100
	}
}

document.addEventListener("click", handleFragmentClick)*/
