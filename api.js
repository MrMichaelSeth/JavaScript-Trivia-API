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
        let showButton = document.getElementById("showAnswer")
        showButton.addEventListener('click', showOnClick )
    };

    function showOnClick() {
        let answer = document.getElementById("testAnswer")
        answer.style.display = "block";
    }



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
    
   function showCategory(para){
        document.getElementById("category").innerHTML = para;
   };
    
   function showQuestions(clues){
        
        for(let i = 0; i < 3; i++ ) {
          let card = '<img src="https://placeimg.com/640/480/any" class="card-img-top" alt="...">';
            card += '<div class="card-body">';
            card += '<h2 class="card-title" id="pointValue">';
            card += clues[i].value;
            card += '</h2>';
            card += '<h5 class="card-title" id="testQuestion">';
            card += clues[i].question;
            card += '</h5>';
            card += '<p class="card-text" id="testAnswer">';
            card += clues[i].answer;
            card += '</p>';
            card += '<a href="#" class="btn btn-primary" id="showAnswer">Show Answer</a>';
            card += '</div>';
          document.getElementById([i]).innerHTML = card;
        }
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