const questions = [
    {
      "question": "What is the capital of France?",
      "options": [ "London","Paris", "Berlin"],
      "correctAnswer": "Paris"
    },
    {
      "question": "Which programming language is this?",
      "options": ["JavaScript", "Python", "C++"],
      "correctAnswer": "JavaScript"
    },
    {
        "question": "How do you create an empty array in JavaScript?",
      "options": ["let arr = new Array();", "let arr = [];", "let arr = {};","let arr = null;"],
      "correctAnswer": "let arr = [];"
    },
    {
        "question": " Which method do you use to add elements to the end of an array? ",
      "options": ["add()", "push()", "append() ","concat();"],
      "correctAnswer": "push()"
    },
    {
        "question": "How do you remove the last element from an array? ",
      "options": ["removeLast()", "deleteLast() ", "pop()","splice()"],
      "correctAnswer": "pop()"
    },
    {
        "question": `let fruits = ['apple', 'banana', 'orange'];<br> fruits.pop(); <br> console.log(fruits.length);`,
      "options": ["0", "1 ", "2","3"],
      "correctAnswer": "2"
    },
    {
        "question": "How do you remove elements from an array, starting from a specific index?",
      "options": ["removeFromIndex()", "splice()", "cut()","deleteFromIndex()"],
      "correctAnswer": "splice()"
    },
    {
        "question": "How do you find the index of a specific element in an array? ",
      "options": ["findIndex()", "indexOf()", "searchIndex()","getElementIndex()"],
      "correctAnswer": "indexOf()"
    },
 
 
  ]

let cool = document.querySelector(".dive")

questions.forEach((question,index)=>{
    let optionContainer = document.createElement("div")
    // optionContainer.classList.add("eachQuestion")
    cool.innerHTML+=`<div class="eachQuestion">${index+1}. ${question.question} </div>
    
    `
    question.options.forEach(option =>{
        const radio = document.createElement("input")
        radio.type = 'radio';
        radio.name = `${index}`;
        radio.value = option;
        radio.className= `${option}`
        const label = document.createElement('label');
        label.textContent=option;
        optionContainer.appendChild(radio);
        optionContainer.appendChild(label);
        optionContainer.appendChild(document.createElement("br"))
    })

    cool.appendChild(optionContainer)
})
    let currentScore = document.querySelector(".score1")
    let score = 0;
    
   let questionAnswered =0;

    cool.addEventListener('change', (event) => {
        if (event.target.type === 'radio') {
          const selectedAnswer = event.target.value;
          const questionIndex = event.target.name;
          const correctAnswer = questions[questionIndex].correctAnswer;
      
          const radioButtons = document.querySelectorAll(`input[name="${questionIndex}"]`);
          radioButtons.forEach(radio => {
            radio.disabled = true;
            const label = radio.nextElementSibling;
            if (radio.value === selectedAnswer) {
              if (radio.value === correctAnswer) {
                radio.style.color = 'green';
                label.style.color = 'green';
              } else {
                radio.style.color = 'red';
                label.style.color = 'red';
              }
            } else if (radio.value === correctAnswer) {
              label.style.color = 'green'; // Correct answer, not selected
              
            }
          });
      
          if (selectedAnswer === correctAnswer) {
            score++;
            questionAnswered++;
            
        } else{
            questionAnswered++;
        }
let questionsSet = questions.length;
    if(questionAnswered === questionsSet){
        currentScore.innerHTML=`${score}`
        // console.log(score)
          }

    }
    
    
    
    
});
      
    