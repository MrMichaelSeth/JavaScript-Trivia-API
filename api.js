/* 1. New Ajax Request to get one random card information
  2. In callback, parse out for relevant information and assigning the values to the html elements.
  3. Call showAnswer function.
  4. Have a showAnswer function that targets the template card button and adds an on-click event listener to the button.
  5. Have the on-click event listener take another callback that targets the testAnswer and assign it to a variable.
  6. Also have the callback make the testAnswer have a display style of block, which reverses the original CSS styling. See the CSS file.
*/
var xhr = new XMLHttpRequest ();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status == 200){
        let parsed  = JSON.parse(this.responseText)[0];
        // console.log(parsed)
        document.getElementById("testQuestion").innerHTML = parsed["question"];
        document.getElementById("testAnswer").innerHTML = parsed["answer"];
        document.getElementById("pointValue").innerHTML = `${parsed["value"]} pts.`;

        showAnswer();
      }
    }
    xhr.open("GET", "http://jservice.io/api/random");
    xhr.send();

    function showAnswer() {
        let showButton = document.getElementsByClassName("showAnswer")
        for(let i=0; i<showButton.length; i++) {
        showButton[i].addEventListener('click', showOnClick )
        }
    }

    function showOnClick(event) {
        console.log(event.target.previousSibling);
        event.target.previousSibling.style.display = "block";
    }


/* 1. New Ajax Request to get one category object information.
  2. In callback, parse out for relevant information and assign the values to the html elements.
    2a. Parse responseText to pull out the questions of the object as well as the title of the category.
  3. Call showCategory function.
    3a. Have a showCategory function that targets the HTML element that has id "category" and assigns it to the category title passed into it.
  4. Call showQuestions function.
    4a. Loop through clues array and build the card with object's properties (value, question, answer).
    4b. After each iteration, attach resultant card to element at the current loop index.
  5. Call showAnswer function.
    5a. Add event listener to each button by looping through showButton.
    5b. Have the on-click event listener take another callback that targets the event.target's previous sibiling element and have a display style of block, which reverses the original CSS styling. See the CSS file.
*/
    var category = new XMLHttpRequest ();
    category.onreadystatechange = function() {
      if (category.readyState === 4 && category.status == 200){
        // console.log(category.responseText)
        let parsed  = JSON.parse(this.responseText);
        // console.log(parsed);

        let clues = parsed.clues
        console.log(clues);
        let title = parsed["title"];

        showCategory(title)

        console.log(clues[0].question)
        showQuestions(clues);
      }
    }

    category.open("GET", "http://jservice.io/api/category?id=5412");
    category.send();

   function showCategory(title){
        document.getElementById("category").innerHTML = title;
   };

   function showQuestions(clues){

        for(let i = 0; i < 3; i++ ) {
          let card = '<img src="https://placeimg.com/640/480/any" class="card-img-top" alt="...">';
            card += '<div class="card-body">';
            card += '<h2 class="card-title" >';
            card += clues[i].value;
            card += '</h2>';
            card += '<h5 class="card-title" >';
            card += clues[i].question;
            card += '</h5>';
            card += '<p class="card-text" >';
            card += clues[i].answer;
            card += '</p>';
            card += '<a href="#" class="btn btn-primary showAnswer" >Show Answer</a>';
            card += '</div>';
          document.getElementById([i]).innerHTML = card;
        }

        showAnswer();
   }

    //next question button will probably have to refresh the page to get another question?

    // let mostUsedStatus = '<ul>';
    //   for(const property in textArray) {
    //       if(textArray[property] > highest){
    //       highest = property;
    //       }
    //     }
    //     //Finish building the HTML with opening and closing tags, then targeting the element to insert
    //       mostUsedStatus += '<li>';
    //       mostUsedStatus += highest;
    //       mostUsedStatus += '</li>';
    //       mostUsedStatus += '</ul>';
    //       document.getElementById("mostUsed").innerHTML = mostUsedStatus;
    //     }
