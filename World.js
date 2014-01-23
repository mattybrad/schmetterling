var World = (function() {
	
	var cvs, ctx, tiles, artists, camView, frame = 0;
	
	// temp cam view
	camView = {
		x: 0,
		y: 0,
		scale: 2
	}
	
	// temp tile defs:
	tiles = [
		{
			rect: {
				x: 0,
				y: 0,
				w: 50,
				h: 50
			}
		},
		{
			rect: {
				x: 50,
				y: 50,
				w: 50,
				h: 50
			}
		}
	];
	
	function init() {
		cvs = document.getElementById("viewport");
		initCanvas();
		window.addEventListener("resize", initCanvas);
	}
	
	function initCanvas() {
		cvs.width = window.innerWidth;
		cvs.height = window.innerHeight;
		ctx = cvs.getContext('2d');
	}
	
	function draw() {
		frame ++;
		
		// clear screen
		ctx.clearRect(0, 0, cvs.width, cvs.height);
		
		// viewable area
		var cvsRect = {
			x: camView.x - cvs.width / 2 / camView.scale,
			y: camView.y - cvs.height / 2 / camView.scale,
			w: cvs.width / camView.scale,
			h: cvs.height / camView.scale
		};
		
		var i, j; // probs gonna use these here
		
		// draw all tiles in viewable area
		ctx.fillStyle = '#000033';
		for(i = 0, ii = tiles.length; i < ii; i ++) {
			if(rectanglesOverlap(tiles[i].rect, cvsRect)) {
				//ctx.fillRect(camView.scale * (tiles[i].rect.x - camView.x) + cvs.width / 2, camView.scale * (tiles[i].rect.y - camView.y) + cvs.height / 2, tiles[i].rect.w * camView.scale, tiles[i].rect.h * camView.scale);
			}
		}
		
		// draw all artists in viewable area
		ctx.fillStyle = '#FF0000';
		for(i = 0, ii = Festival.artists.length; i < ii; i ++) {
			var a = Festival.artists[i];
			if(rectanglesOverlap(a.rect, cvsRect)) {
				//ctx.fillRect(camView.scale * (a.rect.x - camView.x) + cvs.width / 2, camView.scale * (a.rect.y - camView.y) + cvs.height / 2, a.rect.w * camView.scale, a.rect.h * camView.scale);
				for(j in a.sections) {
					var s = a.sections[j];
					var im = s.images[s.src[frame % s.src.length]];
					var imScale = 0.2;
					ctx.drawImage(im, camView.scale * (a.rect.x - camView.x) + cvs.width / 2, camView.scale * (a.rect.y - camView.y) + cvs.height / 2, imScale * im.width * camView.scale, imScale * im.height * camView.scale);
				}
			}
		}
	}
	
	function rectanglesOverlap(r1, r2) {
		return !(r2.x > r1.x + r1.w || r2.x + r2.w < r1.x || r2.y > r1.y + r1.h || r2.y + r2.h < r1.y);
	}
	
	return {
		init: init,
		draw: draw,
		camView: camView
	}
	
}());
