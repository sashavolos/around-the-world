
// let button1 = document.createElement("button");
// button.innerHTML = "First Stop: North America"

// let body = document.getElementsByTagName("body").[0];
// body.appendChild(button);

// button1.addEventListener("click", function () {
//   alert("test")
// });
let score = 0;
let count = 0;
const questions = [
{
  question: "What is the most populated city in North America-Mexico City, Los Angeles, New York City, or San Antonio?",
  a1: "Mexico City",
  a2: "Los Angeles",
  a3: "NYC",
  a4: "San Antonio",
  correct: "Mexico City"
},
{
  question: "How many time zones does Canada have?",
  a1: "1",
  a2: "6",
  a3: "4",
  a4: "2",
  correct: "6"
},
{
  question: "What was America named after?",
  a1: "Italian explorer Amerigo Vespucci",
  a2: "Columbus thought of the name",
  a3: "Native American leader Amerano Kuto",
  a4: "An Americano coffee",
  correct: "Italian explorer Amerigo Vespucci"
},
{
  question: "How many countries are in South America?",
  a1: "5",
  a2: "10",
  a3: "25",
  a4: "12",
  correct: "12"
},
{
  question: "What is the smallest country in South America?",
  a1: "Suriname",
  a2: "Brazil",
  a3: "Ecuador",
  a4: "Portugal",
  correct: "Suriname"
},
{
  question: "How many square miles do the rainforests of South America cover?",
  a1: "2.7 million",
  a2: "300,000",
  a3: "100",
  a4: "1 billion",
  correct: "2.7 million"
},
{
  question: "Which of these is a lie?",
  a1: "Australia has the highest electricity prices in the world.",
  a2: "Australia's first police force was made up of the most well-behaved convicts.",
  a3: "Australia has select pet stores that sell baby kangaroos for farming purposes.",
  a4: "Australia is as wide as the distance between London to Moscow.",
  correct: "Australia has select pet stores that sell baby kangaroos for farming purposes."
},
{
  question: "How long is the world's largest golf course located in Australia?",
  a1: "50 miles",
  a2: "4 miles",
  a3: "850 miles",
  a4: "230 miles",
  correct: "850 miles"
},
{
  question: "What is the national animal of Australia?",
  a1: "Jellyfish",
  a2: "Spider",
  a3: "Kangaroo",
  a4: "Koala",
  correct: "Kangaroo"
},
{
  question: "How many people live in Asia?",
  a1: "3 million",
  a2: "4.1 billion",
  a3: "500,000",
  a4: "8 million",
  correct: "4.1 billion"
},
{
  question: "This country has the lowest amount of mobile phones per person in the world.",
  a1: "North Korea",
  a2: "South Korea",
  a3: "China",
  a4: "Japan",
  correct: "North Korea"
},
{
  question: "How many countries are there in Asia?",
  a1: "50",
  a2: "34",
  a3: "76",
  a4: "100",
  correct: "50"
},
{
  question: "What is the most visited place in Europe?",
  a1: "Disney Land, Paris",
  a2: "Buckingham Palace, London",
  a3: "Roman Forum, Rome",
  a4: "Anne Frank House, Amsterdam",
  correct: "Disney Land, Paris"
},
{
  question: "How many uninhabited villages does Russia have?",
  a1: "4,000",
  a2: "800",
  a3: "13,000",
  a4: "50",
  correct: "13,000"
},
{
  question: "Where were crossiants invented?",
  a1: "Austria",
  a2: "Slovenia",
  a3: "Spain",
  a4: "France",
  correct: "Austria"
},
{
  question: "In how many African nations is the giraffe extinct?",
  a1: "16",
  a2: "7",
  a3: "0",
  a4: "1",
  correct: "7"
},
{
  question: "What percentage of global GDP does Africa have",
  a1: "0.3%",
  a2: "20%",
  a3: "2.4%",
  a4: "5%",
  correct: "2.4%"
},
{
  question: "Of all the malaria cases in the world, ___ occur in Africa",
  a1: "90%",
  a2: "20%",
  a3: "3%",
  a4: "50%",
  correct: "90%"
}];

$(document).ready(function() {
  $('#questionBox').hide()

  let $play = $('#play')

  $play.on('click', function () {
    question()
    window.scrollTo(300, 70)
  });
  $("#play").click(function(){
    $("#questionBox").fadeIn(3000);
    $("#questionBox").animate({left: '500px'});
  });

  function incrementScore () {
    console.log('incrementScore');
    score += 10;
    // only in abstraction
    // make it on the DOM
    let $score = $('#score')
    $score.text(score);
    // debugger
  }


  function question () {
    let answer = null;
    $('#questionBox').show()
    $('#questionText').text(questions[count].question)
    $('#b1').val(questions[count].a1)
    $('label[for=a1]').html(questions[count].a1)
    $('#b2').val(questions[count].a2)
    $('label[for=a2]').html(questions[count].a2)
    $('#b3').val(questions[count].a3)
    $('label[for=a3]').html(questions[count].a3)
    $('#b4').val(questions[count].a4)
    $('label[for=a4]').html(questions[count].a4)

    $('input[type=radio]').click(function(event) {
      answer=event.target.value
      return;
    });

    $('button[type=submit]').click(function () {
      if (answer === questions[count].correct) {
        $('button[type=submit]').off("click");
        incrementScore()
      } else if (answer !== questions[count].correct) {
        alert('You suck!')
      }
    });
  }
    $('button[type=next]').click(function() {
      count++
      question();

    });
})
