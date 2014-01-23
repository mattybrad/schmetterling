var Festival = (function() {
	
	// define who's on the bill, yeah?
	// like, a list of the artists
	
	var artists = [];

	artists.push({
		name: "Test Man",
		folder: "testman",
		audio: {
			src: "testman.mp3",
			volume: 1.0
		},
		sections: {
			main: {
				src: ["main4.png","main5.png","main6.png"]
			}
		},
		rect: {
			x: -100,
			y: -100,
			w: 80,
			h: 80
		}
	});
	
	artists.push({
		name: "Test Man 2",
		folder: "testman",
		audio: {
			src: "testman.mp3",
			volume: 1.0
		},
		sections: {
			main: {
				src: ["main4.png","main5.png","main6.png"]
			}
		},
		rect: {
			x: 100,
			y: 100,
			w: 80,
			h: 80
		}
	});
	
	return {
		artists: artists
	}
	
	
}());
