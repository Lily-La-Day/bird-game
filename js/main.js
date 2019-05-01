


//let bird = document.getElementById("lapwing-image");

//const playAudio = () => {


//bird.addEventListener('click', playAudio)

 //const testFunction = () => {
//let audio = new Audio("bird-sounds/lapwing-sound.mp3" )
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

const handleBirdClick = function(event) {
	let birdWordTest = new RegExp("image")
	const parentElement = event.target.parentElement;
	console.log(parentElement.id)
	if (birdWordTest.test(parentElement.id)) {

		
	}
}

document.addEventListener("click", handleBirdClick)

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




/*let cuckooSound = new Audio("bird-sounds/cuckoo-sound.mp3")
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
