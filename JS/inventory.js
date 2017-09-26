$().ready(function() {

// is this necessary?
var inventory = [ { Resentful: "", Selfish: "", Dishonest: "", Fearful: "", Apology: "", Kept: "", Kind: "", Better: "", Ourselves: "", Others: "", Gratitude: "" } ]
	
$("#add").click(function() { 
 	var resentful = $("#resentful").val();
 	var selfish = $("#selfish").val();
 	var dishonest = $("#dishonest").val();
 	var fearful = $("#fearful").val();
 	var apology = $("#apology").val();
 	var kept = $("#kept").val();
 	var kind = $("#kind").val();
 	var better = $("#better").val();
 	var ourselves = $("#ourselves").val();
 	var others = $("#others").val();
 	var gratitude = $("#gratitude").val();
 	var inv = { Resentful: resentful, Selfish: selfish, Dishonest: dishonest, Fearful: fearful, Apology: apology, Kept: kept, Kind: kind, Better: better, Ourselves: ourselves, Others: others, Gratitude: gratitude };
 	inventory.push(inv); // make Date the variable name for this instance for easy search / reference
 	console.log(inventory);
 	//$("button#refresh").click();
 	$("input").val(''); //clears input 
});
});

// $("#refresh").click(function() {
//  	var tBody = $("tbody");
//  	tBody.empty();
//  	for (var students of Students) {
// 	$("#students").append("<tr>" + "<td>" + students.FirstName + " " + students.LastName + "</td>" + "<td>" + students.SAT + "</td>" + "<td>" + students.GPA + "</td>" + "</tr>")
// 	};
//  });
// });