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

var Main = (function() {
	
	window.onload = init;
	
	function init() {
	
		logStatus("Loading stuff.");
		
		var i, j, k;
		var imagesTotal = 0, imagesLoaded = 0;
		
		for(i = 0; i < Festival.artists.length; i ++) {
			var a = Festival.artists[i];
			for(j in a.sections) {
				imagesTotal += a.sections[j].src.length;
				a.sections[j].images = {};
				for(k = 0; k < a.sections[j].src.length; k ++) {
					var im = new Image();
					im.onload = onImageLoaded;
					im.src = "gfx/" + a.folder + "/" + a.sections[j].src[k];
					a.sections[j].images[a.sections[j].src[k]] = im;
				}
			}
		}
		
		function onImageLoaded() {
			imagesLoaded ++;
			if(imagesLoaded == imagesTotal) {
				
				World.init();
		
				var mouse = {
					x: 0,
					y: 0
				};
				
				// draw the world 60 times a second or so
				draw();
				function draw() {
					World.camView.x += 0.01 * (mouse.x - window.innerWidth / 2);
					World.camView.y += 0.01 * (mouse.y - window.innerHeight / 2);
					World.draw();
					setTimeout(draw, 1000 / Config.fps);
				}
				
				window.onmousemove = function(ev) {
					mouse.x = ev.pageX;
					mouse.y = ev.pageY;
				}
				
				window.onmousewheel = function(ev) {
					World.camView.scale += ev.wheelDelta / 120 / 30;
				}
			}
		}
		
	}
	
	function logStatus(text) {
		document.getElementById('status').innerHTML += text + "<br>";
	}
	
}());
