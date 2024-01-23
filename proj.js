var questions = [

    {
    question:"What year was the United Nations established ?",
    reponses:{
        a:1890,
        b:1945,
        c:1947
    },
    correct:1945
},

{
    question:"What country has won the most World Cups ?",
    reponses:{
        a:"brazil",
        b:"uruguay",
        c:"italy"
    },
    correct:"brazil"

},

{
    question:"How many minutes are in a full week ?",
    reponses:{
        a:10860,
        b:11240,
        c:10080
    },
    correct:10080
},

{
    question:"How many hearts does an octopus have ?",
    reponses:{
        a:3,
        b:2,
        c:1
    },
    correct:3
},
{
    question:"In what country was Elon Musk born ?",
    reponses:{
        a:"spain",
        b:"usa",
        c:"south africa"
    },
    correct:"south africa"
},
{
    question:"How many stars are on the Chinese flag ?",
    reponses:{
        a:3,
        b:5,
        c:7
    },
    correct:5
},
{
    question:"What colors is the flag of the United Nations ?",
    reponses:{
        a:"blue and white",
        b:"blue and red",
        c:"red and white"
    },
    correct:"blue and white"
}
]



var count = -1

function makecounter(){
    count = count+1
    return count
}


function getquest(questions){
    var x = makecounter()
 document.getElementById("Q").innerHTML = questions[x].question
 document.getElementById("btn1").innerHTML = questions[x].reponses.a
 document.getElementById("btn2").innerHTML = questions[x].reponses.b
 document.getElementById("btn3").innerHTML = questions[x].reponses.c
}

// function check(answer) {
//     if (answer === questions[count].correct) {
//  alert("Correct answer!")
//  if (count < questions.length) {
//     getquest(questions)
// } else {
//     alert("Quiz completed! You answered all questions.")
// } 
// } else {
//         alert("Wrong answer. Try again!") 
//         window.location.reload() 
//     }
// }

function tryagain(){
    window.location.reload() 
}

function check(answer) {
  
 if (count < questions.length) {
    if (answer === questions[count].correct) {
        alert("Correct answer!")
    getquest(questions)
}
 else {
        alert("Wrong answer. Try again!") 
        window.location.reload() 
    }
}
    else {
        alert("Quiz completed! You answered all questions.")
    } 
}



