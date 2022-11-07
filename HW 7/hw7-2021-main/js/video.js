var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false
	video.loop = false
	console.log("Auto play is set to "+video.autoplay)
	console.log("Loop is set to "+video.autoplay)
});

document.querySelector("#play").addEventListener("click", function() {
console.log("Play Video");
document.querySelector("#volume").innerHTML = video.volume *100 + "%"
video.play()
});


document.querySelector("#slider").addEventListener("click", function() {
	console.log("The current value is, video.volume")
	video.volume = this.value/100
	console.log("The current value is", video.volume)
console.log(document.queerySelector("#volume"))

})
