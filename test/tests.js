/* QUnit tests */

var firstContainer = {width: 200, height: 200},
	secondContainer = {width: 200, height: 100},
	largeImage = {width: 640, height: 362, ratio: (640/362)},
	smallImage = {width: 80, height: 45, ratio: (80/45)};

test("Contain tests", function() {
	equal($('#container1 img').width(), firstContainer.width, "Container 1 Width is correct");
	equal($('#container1 img').height(), Math.round(firstContainer.width/largeImage.ratio), "Container 1 Height is correct");

	equal($('#container2 img').height(), secondContainer.height, "Container 2 Height is correct");
	equal($('#container2 img').width(), Math.round(secondContainer.height*largeImage.ratio), "Container 2 Width is correct");

	equal($('#container3 img').width(), firstContainer.width, "Container 3 Width is correct");
	equal($('#container3 img').height(), Math.round(firstContainer.width/smallImage.ratio), "Container 3 Height is correct");

	equal($('#container4 img').height(), secondContainer.height, "Container 4 Height is correct");
	equal($('#container4 img').width(), Math.round(secondContainer.height*smallImage.ratio), "Container 4 Width is correct");
});

test("Cover tests", function() {
	equal($('#container5 img').height(), largeImage.height, "Container 5 Height is correct");
	equal($('#container5 img').width(), largeImage.width, "Container 5 Width is correct");

	equal($('#container6 img').width(), largeImage.width, "Container 6 Width is correct");
	equal($('#container6 img').height(), largeImage.height, "Container 6 Height is correct");

	equal($('#container7 img').height(), firstContainer.height, "Container 7 Height is correct");
	equal($('#container7 img').width(), Math.round(firstContainer.height*smallImage.ratio), "Container 7 Width is correct");

	equal($('#container8 img').width(), secondContainer.width, "Container 8 Width is correct");
	equal($('#container8 img').height(), Math.round(secondContainer.height*smallImage.ratio), "Container 8 height is correct");
});