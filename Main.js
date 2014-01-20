//
//		imagine a summer field
//			where there is no concept of monday
//		full of the best people
//			in their best states
//				laid out in the bliss of sun
//			all strumming and shaking and singing
//				different parts
//				of the same song
//					but is it the same song?
//		
//		now imagine yourself
//			as a butterfly
//				flitting on the air
//				between the sounds
//					the conductor of your own symphony
//
//		this is that
//

// and this is a test!...

var Main = (function() {
	
	window.onload = init;
	
	function init() {
		
		World.init();
		
		// draw the world 60 times a second or so
		draw();
		function draw() {
			World.draw();
			setTimeout(draw, 1000 / Config.fps);
		}
		
	}
	
}());
