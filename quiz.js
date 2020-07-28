var questions = [
    {
      id: 1,
      question: "  What can static analysis NOT find? ",
      answer: " Memory leaks.",
      options: [
        " The use of a variable before it has been defined.",
        "Unreachable (“dead”) code.",
        "Memory leaks.",
        "Array bound violations."

      ]
    },
    {
      id: 2,
      question: " A COCOMO model is ________ ",
      answer: "Yellow",
      options: [
        "Constructive Cost Estimation Model.",
        "Complete Cost Estimation Model",
        " Comprehensive Cost Estimation Model",
        "Common Cost Estimation Model."
      ]
    },
    {
      id: 3,
      question: " Software consists of ______",
      answer: "Programs + documentation + operating procedures",
      options: [
        "Set of programs",
        "Programs + hardware manuals",
        "Set of instructions + operating procedures",
        "Programs + documentation + operating procedures"
      ]
    },
    {
      id: 4,
      question: "   If P is risk probability, L is loss, then Risk Exposure (RE) is computed as_____.",
      answer: " RE = P*L",
      options: [
        "RE = P/L",
        "RE = P + L",
        "RE = P*L",
        "RE = 2* P *L"
      ]
    },
    {
      id: 5,
      question: " IEEE 830-1993 is a IEEE recommended standard for_____",
      answer: " Software Requirement Specification",
      options: [
        " Software Requirement Specification",
        "Software design",
        "Testing",
        "Both (A) and (B)"
      ]
    },
    {
      id: 6,
      question: " The tools that support different stages of software development life cycle are called as ______",
      answer: " CASE Tools",
      options: [
        "CAME tools",
        "CASE Tools",
        " CAQE tools",
        "CARE tools"
      ]
    },
    {
      id: 7,
      question: "Which condition defines the circumstances for a particular operation is valid?",
      answer: "Precondition",
      options: [
        "Postcondition",
        " Precondition",
        " Invariant",
        "None of the above"
      ]
    },
    {
      id: 8,
      question: " Find out which phase is not available in SDLC?",
      answer: "Abstraction",
      options: [
        "coding",
        "Testing",
        "Maintenance",
        "Abstraction"
      ]
    },
    {
      id: 9,
      question: "  RAD Software process model stands for _____ ?",
      answer: " Rapid Application Development.",
      options: [
        " Rapid Application Development.",
        "Relative Application Development.",
        " Rapid Application Design.",
        "Recent Application Development."
      ]
    },
    {
      id: 10,
      question: " COCOMO stands for ______",
      answer: "COnstructive COst MOdel",
      options: [
        " COnsumed COst MOdel",
        "COnstructive COst MOdel",
        " COmmon COntrol MOdel",
        "COmposition COst MOdel"
      ]
    }
  ];

 var question_count = 0;

  
  window.onload = function() {
    show(question_count);
  
  };
  function submitForm(e){
    e.preventDefault()
    var nameInput = document.getElementById("input").value
    var userName = document.getElementById("user-name")
    
    if(nameInput == ""){
      alert("Enter your name!")
    }else {
      userName.innerHTML = nameInput
    
   
    var main1 = document.getElementById("main1")
    main1.setAttribute("class" , "hide")
    var main2 = document.getElementById("main2")
    main2.classList.remove("hide")
    var name = document.getElementById("name")
    var set = name.innerHTML = nameInput;
    interval = setInterval(timer, 10)
    var name = document.getElementById("user-name2")
    name.innerHTML = nameInput;
}
}

var points = 0
  function next() {
  
    // if the question is last then redirect to final page
    if (question_count == questions.length - 0) {
      clearInterval(interval);
    
      if (points <= 30){
        var main2 = document.getElementById("main2")
        main2.setAttribute("class" , "hide")
        var main4 = document.getElementById("main4")
        main4.classList.remove("hide")
        var userPoint = document.getElementById("point2")
        userPoint.innerHTML = points
        var time = document.getElementById("time-taken2")
        time.innerHTML = min +" minutes " + sec + " seconds "
        
      }else {
    
      var main2 = document.getElementById("main2")
      main2.setAttribute("class" , "hide")
      var main3 = document.getElementById("main3")
      main3.classList.remove("hide")
        // user marks
        var userPoint = document.getElementById("point")
       userPoint.innerHTML = points
       var time = document.getElementById("time-taken")
       time.innerHTML = min +" minutes " + sec + " seconds "

      }
      console.log(points)

    }
    var user_answer = document.querySelector("li.options.active")
    // console.log(user_answer)
    user_answer = user_answer.innerHTML
    // check if the answer is right or wrong
    if (user_answer == questions[question_count].answer) {
        points += 10
    }
    
  
    question_count++;
    console.log(points)
    show(question_count);
  }
 

  // Quiz
  function show(count) {
    var question = document.getElementById("quiz-question");
    var [first, second, third, fourth] = questions[count].options;
  
    question.innerHTML = `
    <h2>Q${count + 1}. ${questions[count].question}</h2>
     <ul class="option_group">
    <li class="options">${first}</li>
    <li class="options">${second}</li>
    <li class="options">${third}</li>
    <li class="options">${fourth}</li>
  </ul> 
    `;
    toggleActive();
  }
  
  function toggleActive() {
    let option = document.querySelectorAll("li.options");
    for (let i = 0; i < option.length; i++) {
      option[i].onclick = function() {
        for (let i = 0; i < option.length; i++) {
          if (option[i].classList.contains("active")) {
            option[i].classList.remove("active");
          }
        }
        option[i].classList.add("active");
      };
    }
  }


// //   TIMER
var sec = 0;
var min = 0;  
var msec = 0;
var minspan = document.getElementById("min")
var secspan = document.getElementById("sec")
var interval;
var formatSec = sec <10 ? `0${sec}`: `${sec}` 
var formatMin = min < 10 ? `0${min}`: `${min}`

function timer(){
    msec++
    if (msec >= 100){
        sec++
        msec = 0 
    }else if (sec >=60){
        min++
        sec = 0 
    }
    var formatSec = sec <10 ? `0${sec}`: `${sec}` 
    var formatMin = min < 10 ? `0${min}`: `${min}`
    document.querySelector("span#min").innerHTML = `${formatMin}`;
    document.querySelector("span#sec").innerHTML = ` ${formatSec}`}