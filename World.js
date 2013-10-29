var World = (function() {
	
	var cvs, ctx, tiles, artists, camView;
	
	// temp cam view
	camView = {
		x: -50,
		y: -50,
		scale: 3
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
	
	// temp artist defs:
	artists = [
		{
			name: "Barry",
			rect: {
				x: 70,
				y: 70,
				w: 10,
				h: 20
			}
		}
	]
	
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
		// clear screen
		ctx.clearRect(0, 0, cvs.width, cvs.height);
		
		// viewable area
		var cvsRect = {
			x: camView.x - cvs.width / 2 / camView.scale,
			y: camView.y - cvs.height / 2 / camView.scale,
			w: cvs.width / camView.scale,
			h: cvs.height / camView.scale
		};
		
		// draw all tiles in viewable area
		ctx.fillStyle = '#000033';
		for(var i = 0, ii = tiles.length; i < ii; i ++) {
			if(rectanglesOverlap(tiles[i].rect, cvsRect)) {
				ctx.fillRect(camView.scale * (tiles[i].rect.x - camView.x) + cvs.width / 2, camView.scale * (tiles[i].rect.y - camView.y) + cvs.height / 2, tiles[i].rect.w * camView.scale, tiles[i].rect.h * camView.scale);
			}
		}
		
		// draw all artists in viewable area
		ctx.fillStyle = '#FF0000';
		for(var i = 0, ii = tiles.length; i < ii; i ++) {
			if(rectanglesOverlap(artists[i].rect, cvsRect)) {
				ctx.fillRect(camView.scale * (artists[i].rect.x - camView.x) + cvs.width / 2, camView.scale * (artists[i].rect.y - camView.y) + cvs.height / 2, artists[i].rect.w * camView.scale, artists[i].rect.h * camView.scale);
			}
		}
	}
	
	function rectanglesOverlap(r1, r2) {
		return !(r2.x > r1.x + r1.w || r2.x + r2.w < r1.x || r2.y > r1.y + r1.h || r2.y + r2.h < r1.y);
	}
	
	return {
		init: init,
		draw: draw
	}
	
}());
