(function(window){
	var byespeaker={};
	var speakWord="Good Bye";
	byespeaker.speak=function(name){
		 console.log(speakWord + " " + name);
	}

	window.byespeaker = byespeaker;
})(window);



// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.
// xxxx.xxxx = byeSpeaker;
