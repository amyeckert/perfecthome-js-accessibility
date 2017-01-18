// source and inspiration: https://github.com/mjhea0/jquery-madlibs

$(document).ready(function() {	

	// HIDE STUFF	----------------//
	$(".q1").hide();
	$(".q2").hide();
	$(".q3").hide();
	$(".listings").hide();
	$("#list1").hide();
	$("#list2").hide();
	$("#list3").hide();
	$(".replay").hide();   
	$("#btn-reset").hide();
	$(".share").hide();
	$(".eliza").hide();

});

// RANDOMLY CHOOSE WHICH QUESTIONAIRE --------------------//	

$("#btn-name").click(function(e) {
 	e.preventDefault();
	
	//	PICK A QUESTIONAIRE ------------//
	var q1 = document.querySelector(".q1");
 	var q2 = document.querySelector(".q2");
 	var q3 = document.querySelector(".q3");
	var listings = [q1, q2, q3];
 	var chosen = listings[Math.floor(Math.random() * listings.length)];

 	$(".enter-name").hide();
 	$(".firstName").empty().append($("input.firstName").val());
	
 	//need code to check to see what previous selection was, so that it doesn't repeat in it's randomness.
	// var recentChoice;

	if (chosen == q1) {
 		$(".q1").show(); 
 		$(".q2").hide();
		$(".q3").hide();
		$('body').css({
			"background-image" : "url('https://www.dropbox.com/s/3f1o48v63f100a6/tablebeast-hd.jpg?raw=1')" 
		});
 	}
	 else if (chosen == q2) {
 		$(".q2").show();
 		$(".q1").hide();  
 		$(".q3").hide();
 		$('body').css({
			"background-image" : "url('https://www.dropbox.com/s/7079ec574nda8rz/couches-hd.jpg?raw=1')"
		});
 	}
	else { 
		$(".q3").show();
 		$(".q1").hide(); 
 		$(".q2").hide();
 		$('body').css({
			"background-image" : "url('https://www.dropbox.com/s/4edthf0jb494dhh/seam2-hd.jpg?raw=1')"
		});
	};
});

// inputs for questionaires------------//

 
$("#btn-submit1").click(function(e) {
	e.preventDefault()
	// $('#questions1').parsley();

	// grab the values from the input boxes, then append them to the DOM
    $(".adj1").empty().append($("input.adj1").val());
    $(".favCountry").empty().append($("input.favCountry").val());
    $(".bestie").empty().append($("input.bestie").val());
    $(".adj2").empty().append($("input.adj2").val());
    
    //	Need rule here: if adj2 starts with a vowel, do this
    // else append "n " to the "a" before it.

    $(".noun1").empty().append($("input.noun1").val());
	$(".noun2").empty().append($("input.noun2").val());
    $(".favCartoon").empty().append($("input.favCartoon").val());
    $(".prez").empty().append($("input.prez").val());
    $(".gem").empty().append($("input.gem").val());
    $(".basement").empty().append($("input.basement").val());
    $(".tree").empty().append($("input.tree").val());
    $(".artist").empty().append($("input.artist").val());
    $(".water").empty().append($("input.water").val());
    $(".num1").empty().append($("input.num1").val());
    $(".favAnimal").empty().append($("input.favAnimal").val());
    $(".verb1").empty().append($("input.verb1").val());
	
    //	show the listing
    $(".listings").show();
	$("#list1").show();
	$("#list2").hide();
	$("#list3").hide();

	//	change button to replay button
	$("#btn-next").hide();
	$(".replay").show();

    // hide the questions
    $(".q1").hide();
	$("#btn-reset").show();
	$(".share").show();
	$(".eliza").show();

    //change the h1 message
   	var message = document.querySelector(".message").innerHTML = "How about this little gem?"; 
});

$("#btn-submit2").click(function(e) {
	e.preventDefault()
	// $('#questions2').parsley();

	var dir = $("#direction option:selected" ).text();
	var landmark = $("#landmark :selected").text();
	
	$(".num5").empty().append($("input.num5").val());
	$(".adj3").empty().append($("input.adj3").val());
	$(".num2").empty().append($("input.num2").val());
	$(".num3").empty().append($("input.num3").val());
	$(".num4").empty().append($("input.num4").val());
	$(".emotion").empty().append($("input.emotion").val());
	$(".direction").empty().append(dir);
	$(".room").empty().append($("input.room").val());
	$(".adj4").empty().append($("input.adj4").val());
	$(".pubInst").empty().append($("input.pubInst").val());
	$(".favCity").empty().append($("input.favCity").val());
	$(".landmark").empty().append(landmark);

	//	show the listing
	$(".listings").show();
	$("#list1").hide();
	$("#list2").show();
	$("#list3").hide();

	//	change button to replay button
	$("#btn-next").hide();
	$(".replay").show();

	// hide the questions
	$(".q2").hide();
	$("#btn-reset").show();	

	$(".share").show();
	$(".eliza").show(); 

    //change the h1 message
   	var message = document.querySelector(".message").innerHTML = "This one says YOU all over it!";
});

$("#btn-submit3").click(function(e) {
	e.preventDefault()
	// $('#questions3').parsley();

	var time = $("#time option:selected" ).text();

	$(".num6").empty().append($("input.num6").val());
	$(".num7").empty().append($("input.num7").val());
	$(".disaster").empty().append($("input.disaster").val());
	$(".clothing").empty().append($("input.clothing").val());
	$(".mood").empty().append($("input.mood").val());
	$(".adj6").empty().append($("input.adj6").val());
	$(".adj7").empty().append($("input.adj7").val());
	$(".urban").empty().append($("input.urban").val());
	$(".room2").empty().append($("input.room2").val());
	$(".verb2").empty().append($("input.verb2").val());
	$(".time").empty().append(time);
	$(".pluAnimals").empty().append($("input.pluAnimals").val());
	$(".verb3").empty().append($("input.verb3").val());
	
	//	show the listing
	$(".listings").show();
	$("#list1").hide();
	$("#list2").hide();
	$("#list3").show();

	//	change button to replay button
	$("#btn-next").hide();
	$(".replay").show();

	// hide the questions
	$(".q3").hide();
	$("#btn-reset").show();

	$(".share").show();
	$(".eliza").show();

	var message = document.querySelector(".message").innerHTML = "Bring your toolbox!";
});


	// REPLAY BUTTON------------------------//

// $("#btn-reset").click(function(e) {
// 	var message = document.querySelector(".message").innerHTML = "Find Your Perfect Home!";

// 	var reset = document.getElementById("firstName").className = "";
	

// 	$(".enter-name").show();
// 	$("#btn-reset").hide();
// 	$(".listings").hide();	
// 	$("#btn-next").show();
// 	// $("#empty-name").hide();
// 	$("#empty-name").css("visibility", "hidden");
	

//  	console.log(firstName, reset);

// 	 //clear inputs
// 	 $(":input").val(" ");
// 	 $("#btn-next").val("Let's go!");
// 	 $("#btn-submit1").val("Call the movers!");
// 	 $("#btn-submit2").val("Get packing!");
// 	 $("#btn-submit3").val("Call the bank!");

// });	 

