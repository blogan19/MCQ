var emDocs = ["em1"];
var mcqDocs = ["mcq1"];

var emTot = 0;
for(var i = 0; i < emDocs.length; i++){
	var x = localStorage.getItem(emDocs[i]);
	emTot++;
	console.log(x);
}

var mcqTot = 0;
for(var i = 0; i < mcqDocs.length; i++){
	var y = localStorage.getItem(mcqDocs[i]);
	mcqTot++;
	console.log(y);
}

//average scores
var aEM = (emTot/emDocs.length).toFixed();
var aMCQ = (mcqTot/mcqDocs.length).toFixed();