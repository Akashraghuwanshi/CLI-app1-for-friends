

var readlineSync=require("readline-sync");
var username=readlineSync.question("May I know your name please?\n");
console.log("Hello " +username+ " do you remember our college days?");
console.log("Let's Have a Quiz to check ,do you remember our college days or not? ");
var score=0;
function play(question,answer){
    var useranswer=readlineSync.question(question);
    if(useranswer.toUpperCase()===answer.toUpperCase()){
        console.log("Right Answer");
        score++;
    }
    else{
        console.log("Wrong Answer");
    }
}
 
var question1={
    question:"\n1.Which is our favorite city?\n",
    answer:"Bhopal"
}
var question2={
    question:"\n2.Tama had crush on which girl in our college?\n",
    answer:"Anushka"
}
var question3={
    question:"\n3.Shivam had crush on which girl in our college?\n",
    answer:"Ina"
}
var question4={
    question:"\n4.Which bike do we have in our college?\n",
    answer:"Pulsar"
}
var question5={
    question:"\n5.Which is our favorite bar during our college days near habibganj?\n",
    answer:"Pukraj"
}

var question=[question1,question2,question3,question4,question5];

for(var i=0;i<question.length;i++){
play(question[i].question, question[i].answer)
{
console.log("Your score is "+score+"\n");
console.log("_____*****______");

 }
}
console.log("\nYou have succesfully attempted the Quiz\n");
console.log("Final Score is "+score);
console.log("\nThanks for attempting the Quiz");
