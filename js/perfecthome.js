// source and inspiration: https://github.com/mjhea0/jquery-madlibs

$(document).ready(function() {	

	// HIDE STUFF	----------------//
	// $(".q1").hide();
	$(".q2").hide();
	$(".q3").hide();
	$(".listings").hide();
	$(".js-list1").hide();
	$(".js-list2").hide();
	$(".js-list3").hide();
	$(".replay").hide();   
	$(".btn-reset").hide();
	$(".share").hide();
	$(".eliza").hide();

	// ERROR MESSAGES-------------------------//
	// var errRequired = 'Pssst! What\'s your name?';

	// REGEXP -------------------------------//
	const vowelRegExp = /^[aeiou]/gi; // for adding a(n) in front of nouns where required.
	var theRegExp = /\bthe\b/gi; //remove the word the
	
	// VALIDATIONS ---------------------------//

	const lettersRegExp = /[^a-z0-9 ]$/gi; // allow ONLY alphanumeric and whitespace
	var cleanText = function(inputText) {
		var textIsClean = false;
		if (inputText.match(lettersRegExp)) {
			console.log(inputText + ' has illegal chars');
			textIsClean = false;
		} else {
		// 	// console.log('no illegal chars')
			textIsClean = true;
		}
		console.log(textIsClean);
		return textIsClean; //returns t/f 
	};

	var validateName = function(){
		var nameIsValid = false;
	 	var playerName = $('.firstName').val();

 		//if field is empty, display error msg
	 	if(!playerName) {
	 		nameIsValid = false;
			var nameError = $('.firstName').data('error-msg-name');
			$('.js-error-msg-name').text(nameError);
			console.log(nameError);
	 	} else {

	 		return true;
	 	}
		return nameIsValid;
	};

	var validateQ1 = function() {
		var q1IsValid = false;

		//get all the input objects
		var inputs1 = $('.js-q1-input');

		// check each one is filled out 
		for (var i=0; i<inputs1.length; i++) {
			// get the value of each input
			var currentAnswer = $(inputs1[i]).val();
			//get the id of each input
			var currentInputId = $(inputs1[i]).attr('id');

		 	// console.log(currentInputId);
			// check the input is filled out
			if(currentAnswer === '') {
				// get the error message
				var currentErrorMessage = $(inputs1[i]).data('error-msg1');
				// // remove any previous error msg
				// $('#' + currentInputId).next().text(''); 

				// add current error message
				$('#' + currentInputId).next().text(currentErrorMessage); // 
				console.log(currentInputId +' is missing');

				q1IsValid = false;// don't submit form

			} else {
				//test for bad characters
				if(cleanText(currentAnswer)) {
				// add current error message
				console.log(currentAnswer + ' has illegal chars');

				// $('#' + currentInputId).next().text('Letters only, please!');
			 	q1IsValid = true; // ok to submit form

				} else {
					//remove bad characters 
					currentAnswer = currentAnswer.replace(lettersRegExp, '');
					console.log(currentAnswer);
					q1IsValid = true; // ok to submit form
				}
        	}
		} //closes for loop --------------------//		
		return q1IsValid; //returns t/f
	}; //closes validateQ1 -------------------------//


	// choose random questionnaire
	var pickQuestions = function(){
		var q1 = $(".q1");
	 	var q2 = $(".q2");
	 	var q3 = $(".q3");
		var listings = [q1, q2, q3];
	 	var chosen = listings[Math.floor(Math.random() * listings.length)];

	 	$(".enter-name").hide();
	 	$(".firstName").empty().append($("input.firstName").val());
		
	 	//need code to check to see what previous selection was, so that it doesn't repeat in it's randomness.
		// var recentChoice; etc.   

		//	PICK A QUESTIONAIRE ------------//
		if (chosen == q1) {
	 		$(".q1").show(); 
	 		$(".q2").hide();
			$(".q3").hide();
			$('body').css({
				"background-image" : "url('img/tablebeast-hd.jpg')"
			});
	 	}
		 else if (chosen == q2) {
	 		$(".q2").show();
	 		$(".q1").hide();  
	 		$(".q3").hide();
	 		$('body').css({
				"background-image" : "url('img/couches-hd.jpg')"
			});
	 	}
		else { 
			$(".q3").show();
	 		$(".q1").hide(); 
	 		$(".q2").hide();
	 		$('body').css({
				"background-image" : "url('img/seam2-hd.jpg')"
			});
		};
	};


	// fill out forms 
	var createListing1= function(){
	    // if input starts with a vowel, add an n to make an before it.
	    var inputStartsWithVowel = $("input.adj2").val();
		var addN = $(".adj2").prev();
	    if(inputStartsWithVowel.match(vowelRegExp)) {
	    	// getprevious sibling
	    	addN.empty().text('an ');
	    	$(".adj2").empty().append(inputStartsWithVowel).val();
		 } else {
		 	addN.empty().text('a ');
		 	$(".adj2").empty().append(inputStartsWithVowel).val();
		 };

		 //check for and remove "the" before name of body of water
		 var waterInput = $("input.water").val(); 
		 if(waterInput.match(theRegExp)) {
		 	waterInput = waterInput.replace(theRegExp, '');
	    	$(".water").empty().append(waterInput).val();
		 } else {
	    	$(".water").empty().append(waterInput).val();	
		 };

		// grab the values from the input boxes, then append them to the DOM
	    $(".adj1").empty().append($("input.adj1").val());
	    $(".favCountry").empty().append($("input.favCountry").val());
	    $(".bestie").empty().append($("input.bestie").val());
	    $(".noun1").empty().append($("input.noun1").val());
		$(".noun2").empty().append($("input.noun2").val());
	    $(".favCartoon").empty().append($("input.favCartoon").val());
	    $(".prez").empty().append($("input.prez").val());
	    $(".gem").empty().append($("input.gem").val());
	    $(".basement").empty().append($("input.basement").val());
	    $(".tree").empty().append($("input.tree").val());
	    $(".num1").empty().append($("input.num1").val());
	    $(".favAnimal").empty().append($("input.favAnimal").val());
	    $(".verb1").empty().append($("input.verb1").val());
	};

	//display the listing and hide other stuff
	var showListing1 = function() {
	    //	show the listing; 
	    $(".listings").show();
		$(".js-list1").show();
		$(".js-list2").hide();
		$(".js-list3").hide();

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
	};	


	/****  on-submit events  ******************************/

	// validates that name is entered, chooses questionnaire
	$('#name').on('submit', function(e){
		e.preventDefault();
		// if fails
		if (validateName()){
			// proceed to questionnaire
			console.log('name entered');
			pickQuestions();
		} else {
			return false;
		}
	});


	// create listings if form is valid------------//
	$("#questions1").on('submit', function(e) {
		e.preventDefault();
		// if validate returns true, do this stuff: 
		if(validateQ1()) {
			createListing1();
			showListing1();	
		} else {
			//if form is not valid, return false;
			console.log('form is not valid');
			return false;
		}	 
	});


	//--------------
	// $("#btn-submit2").on('submit', function(e) {
	// 	e.preventDefault()
	// 	//are all fields filled out?
	// 	if(validateQ2()) {
	// 		console.log('form is valid');
	// 	} else {
	// 		return false;
	// 	}

	// 	// var dir = $("#direction option:selected" ).text();
	// 	// var landmark = $("#landmark :selected").text();
		
	// 	// $(".num5").empty().append($("input.num5").val());
	// 	// $(".adj3").empty().append($("input.adj3").val());
	// 	// $(".num2").empty().append($("input.num2").val());
	// 	// $(".num3").empty().append($("input.num3").val());
	// 	// $(".num4").empty().append($("input.num4").val());
	// 	// $(".emotion").empty().append($("input.emotion").val());
	// 	// $(".direction").empty().append(dir);
	// 	// $(".room").empty().append($("input.room").val());
	// 	// $(".adj4").empty().append($("input.adj4").val());
	// 	// $(".pubInst").empty().append($("input.pubInst").val());
	// 	// $(".favCity").empty().append($("input.favCity").val());
	// 	// $(".landmark").empty().append(landmark);

	// 	// //	show the listing
	// 	// $(".listings").show();
	// 	// $("#list1").hide();
	// 	// $("#list2").show();
	// 	// $("#list3").hide();

	// 	// //	change button to replay button
	// 	// $("#btn-next").hide();
	// 	// $(".replay").show();

	// 	// // hide the questions
	// 	// $(".q2").hide();
	// 	// $("#btn-reset").show();	

	// 	// $(".share").show();
	// 	// $(".eliza").show(); 

	//  //    //change the h1 message
	//  //   	var message = document.querySelector(".message").innerHTML = "This one says YOU all over it!";
	// });

	// $("#btn-submit3").click(function(e) {
	// 	e.preventDefault()
	// 	// $('#questions3').parsley();

	// 	var time = $("#time option:selected" ).text();

	// 	$(".num6").empty().append($("input.num6").val());
	// 	$(".num7").empty().append($("input.num7").val());
	// 	$(".disaster").empty().append($("input.disaster").val());
	// 	$(".clothing").empty().append($("input.clothing").val());
	// 	$(".mood").empty().append($("input.mood").val());
	// 	$(".adj6").empty().append($("input.adj6").val());
	// 	$(".adj7").empty().append($("input.adj7").val());
	// 	$(".urban").empty().append($("input.urban").val());
	// 	$(".room2").empty().append($("input.room2").val());
	// 	$(".verb2").empty().append($("input.verb2").val());
	// 	$(".time").empty().append(time);
	// 	$(".pluAnimals").empty().append($("input.pluAnimals").val());
	// 	$(".verb3").empty().append($("input.verb3").val());
		
	// 	//	show the listing
	// 	$(".listings").show();
	// 	$("#list1").hide();
	// 	$("#list2").hide();
	// 	$("#list3").show();

	// 	//	change button to replay button
	// 	$("#btn-next").hide();
	// 	$(".replay").show();

	// 	// hide the questions
	// 	$(".q3").hide();
	// 	$("#btn-reset").show();

	// 	$(".share").show();
	// 	$(".eliza").show();

	// 	var message = document.querySelector(".message").innerHTML = "Bring your toolbox!";
	// });






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

}); //closes doc ready	
