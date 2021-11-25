var inputBox = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputBox = document.querySelector("#txt-output");

var url = "https://api.funtranslations.com/translate/minion.json";

function addText(text) {

    return url + '?' + 'text=' + text;
}

function errorHandler(error) {
    console.log(error);
    alert("Something wrong with the server :(\nPlease try again after sometime")
}

function clickHandler() {

    var inputText = inputBox.value;
    var urlTxt = addText(inputText);
  
    fetch(urlTxt)
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated ; 
            outputBox.innerText = translatedText; })
        .catch(errorHandler)
}

btnTranslate.addEventListener('click', clickHandler);
