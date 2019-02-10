var question = [{
"Drug":"Sodium valproate",
"IOI": "Inhibitor"},
{"Drug":"Isoniazid",
"IOI": "Inhibitor"},
{"Drug":"Cimetidine",
"IOI": "Inhibitor"},
{"Drug":"Ketoconazole",
"IOI": "Inhibitor"},
{"Drug":"Fluconazole",
"IOI": "Inhibitor"},
{"Drug":"Alcohol..binge drinking",
"IOI": "Inhibitor"},
{"Drug":"Chloramphenicol",
"IOI": "Inhibitor"},
{"Drug":"Erythromycin",
"IOI": "Inhibitor"},
{"Drug":"Sulfonamides",
"IOI": "Inhibitor"},
{"Drug":"Ciprofloxacin",
"IOI": "Inhibitor"},
{"Drug":"Omeprazole",
"IOI": "Inhibitor"},
{"Drug":"Metronidazole",
"IOI": "Inhibitor"},
{"Drug":"Sulphonylureas",
"IOI":"Inducer"},
{"Drug":"Carbamezapine",
"IOI":"Inducer"},
{"Drug":"Rifampicin",
"IOI":"Inducer"},
{"Drug":"Alcohol",
"IOI":"Inducer"},
{"Drug":"Phenytoin",
"IOI":"Inducer"},
{"Drug":"Griseofulvin",
"IOI":"Inducer"},
{"Drug":"Phenobarbital",
"IOI":"Inducer"}];

var random = [];
function generateRan(){
    var max = question.length;
    for(var i = 0;i<max ; i++){
        var rn = Math.floor(Math.random()*max);
        if(random.indexOf(rn) == -1){
            random.push(rn);
        }
        else
         i--;
    }
 
}
generateRan();

function startQuiz(){
	$('#startContainer').hide();
	$('#container1').show();
}

function createQuestion(){  
   var a = document.getElementById('container1');
   var textNode ="";

 
   for(var i = 0; i <question.length; i++){
   	var x = random[i];
   
   	textNode += '<h3 class="tWhite" id="q'+question[x].Drug+'">'+question[x].Drug+'</h3><div><input type="radio" id="r'+question[x].Drug+'" class="radio-half" name="'+question[x].Drug+'" onclick="checkAns('+x+','+0+')"><label for="r'+question[x].Drug+'">Inducer</label><input type="radio" id="r2'+question[x].Drug+'" class="radio-half" name="'+question[x].Drug+'" onclick="checkAns('+x+','+1+')"><label for="r2'+question[x].Drug+'">Inhibitor</label></div><hr>'
   }
      a.innerHTML = textNode;
      console.log(a);
  };
  createQuestion();

  var score = 0;
  var qCount = 0;
  function checkAns(drug, input){
  	 
  	 qCount++;
  	 var ans = question[drug].IOI;
  	 var selection;
     console.log(question[drug].Drug + " " + ans );
  	 if(input == 0){
  	 	selection = "Inducer"
  	 }else if(input == 1){
  	 	selection = "Inhibitor"
  	 }
  
  	 var questionTitle = document.getElementById("q"+question[drug].Drug);
  	 if(selection == ans){
  	 	console.log('correct');
  	 	questionTitle.style.color ="#7CFC00";
  	 	toastC();
  	 	score++;
  	 }else if(selection != ans){
  	 	document.getElementById("q"+question[drug].Drug).style.color ="#FF0000";
  	 	toastI();
  	 	console.log('incorrect');
  	 }
  	 if(qCount == question.length){
  	 	$('#container1').hide();
  	 	$('#scoreCont').show();
  	 	$('#scoreDisp').html("Your score: " + score+"/"+qCount);
  	 }
  	 questionTitle.innerHTML = questionTitle.innerHTML +  ": " + ans;
  	 document.getElementById("r"+question[drug].Drug).nextSibling.style.display = "none";
  	 document.getElementById("r2"+question[drug].Drug).nextSibling.style.display = "none";

  }








      
     