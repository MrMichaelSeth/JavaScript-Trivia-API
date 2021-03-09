var xhr = new XMLHttpRequest ();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status == 200){
        let parsed  = JSON.parse(this.responseText)[0];
        console.log(parsed)
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
        console.log(category.responseText)
        let parsed  = JSON.parse(this.responseText);
        console.log(parsed);

        let clues = parsed.clues
        
        let title = parsed["title"];
        
        showCategory(title)
      }
    }

    category.open("GET", "http://jservice.io/api/category?id=5412");
    category.send();
    
   function showCategory(para){
        document.getElementById("category").innerHTML = para;
   };
    
    
    //next question button will probably have to refresh the page to get another question?
