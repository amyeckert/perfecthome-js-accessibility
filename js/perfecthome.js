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
	var errRequired = 'Pssst! You missed this one!';

	// REGEXP -------------------------------//
	var vowelRegExp = /^[aeiou]/;
	// var lettersRegExp = /^[A-Za-z]+$/;


	// VALIDATIONS ---------------------------//
	//https://formden.com/blog/validate-contact-form-jquery

	//for all inputs:
	// var isBlank = function(input){
	// 	var textInputs = $('.js-q1-input');
	// 	console.log(isBlank);
	// };

	// for all text fields:
	var lettersOnly = function(input) {
		//get all the text inputs
		var lettersValid = false;
		var lettersRegExp = /^[A-Za-z]+$/;
		if(input.value.match(lettersRegExp)) {
			lettersValid = true;
			console.log('text is letters only');
		} else { 
			console.log('error');
			return false;
		}
		return lettersValid;
	};

	// var numbersOnly = function(input){
	// 	$(this).isNumeric();
	// };


	var validateName = function(){
		var nameIsValid = false;
	 	var playerName = $('.firstName').val();

 		//if field is empty, display error msg
	 	if(!playerName) {
	 		nameIsValid = false;
			$('.js-error-msg-name').text(errRequired);
	 	} else {
	 		return true;
	 	}
		return nameIsValid;
	};

	var validateQ1 = function() {
		var q1IsValid = false;

		//get all the input objects
		var inputs1 = $('.js-q1-input');
		for (var i=0;i<inputs1.length;i++) {
			var ids = inputs1[i].id;
			// console.log(ids);
		};

		// get the values of each field associated with it's id
		var adj1 = $('.adj1').val();
		var favCountry = $('.favCountry').val();
		var bestie = $('.bestie').val();
		var adj2 = $('.adj2').val();
		var noun1 = $('.noun1').val();
		var noun2 = $('.noun2').val();
		var favCartoon = $('.favCartoon').val();
		var prez = $('.prez').val();
		var gem = $('.gem').val();
		var basement = $('.basement').val();
		var tree = $('.tree').val();
		var artist = $('.artist').val();      
		var water = $('.water').val();
		var num1 = $('.num1').val();
		var favAnimal = $('.favAnimal').val();
		var verb1 = $('.verb1').val();
		
		var answers = [adj1, favCountry, bestie, adj2, noun1, noun2, favCartoon, prez, gem, basement, tree, artist, water, num1, favAnimal, verb1];
		// not sure how to do this to simplify the above^^ or if it's necessary: 
		// var answers = [
		// 	{ name: id, text:adj1 },

		// ];
		console.log(inputs1, answers);

		for(var i = 0; i< answers.length; i++) {
			if(answers === '') {
				console.log('this one missing');

				q1IsValid = false;
			} else {
				//check individual fields for correct typoe, range, etc.
				if(!adj1){
					$('.js-error-msg').text(errRequired);
					q1IsValid = false;
				} else if(adj1) {
					adj1.trim();
					lettersOnly(adj1);
					console.log('adj1 letters ok');

					q1IsValid = true;

				}
				return true; 	
			}
			return q1IsValid;
		};
	
	 	
		// // collect all the answers and id's for each question
		// for (var i = 0; i < inputs.length; i++) {
		// 	var answers = [inputs[i].value]; 
		// 	console.log(answers, ids);
		
		// 	// for (var i = 0; i < answers.length; i++) {
		// 		//find which answers are empty
		// 		if(answers[0] === '') {
		// 			console.log('missing this one');
		// 			q1IsValid = false;
		// 		} else {
		// 			return true;
		// 		}
		// 	// };
		// };
		// return q1IsValid;

	// or individual fields as-you-go validation: 
	$('.adj1').on('input', function(){


	});



	}; //closes validateQ1

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
		
	    //	show the listing; make this section a function:

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


	};


	/**********************************/

	// validates name is entered, chooses questionnaire
	$('#name').on('submit', function(e){
		e.preventDefault();
		// if fails
		if (validateName()){
			// proceed to questionnaire
			console.log('form is valid');
			pickQuestions();
		} else {
			return false;
		}
	});


	// create listings if form is valid------------//
	$("#questions1").on('submit', function(e) {
		e.preventDefault();
		// if function returns true, form is valid, do this stuff: 
		if(validateQ1()) {
			console.log('form is valid');
			// createListing1();	
		} else {
		//if form is not valid, return false;
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
