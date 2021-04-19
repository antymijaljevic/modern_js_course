pronoun = document.getElementById('pronoun');
verb = document.getElementById('verb');
noun = document.getElementById('noun');

document.getElementById('subBtn').addEventListener('click', showResult);

function showResult(e){
    let result = pronoun.value + ' ' + verb.value + ' ' + noun.value;
    setSentance(result)
    e.preventDefault();
}

function setSentance(finalText){
   result = document.getElementById('result');
   result.className = 'becomeRed';
   result.innerText = finalText;

   console.log(result);
}