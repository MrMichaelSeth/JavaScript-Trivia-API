var xhr = new XMLHttpRequest ();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status == 200){
        let parsed  = JSON.parse(this.responseText)[0];
        console.log(parsed)
        document.getElementById("testQuestion").innerHTML = parsed["question"];
        document.getElementById("testAnswer").innerHTML = parsed["answer"];

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

