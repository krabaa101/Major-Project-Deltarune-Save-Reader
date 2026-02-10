const docIdGet = document.getElementById;

const input = document.getElementById('saveInput');

const inButton = document.getElementById("confirmButton");
inButton.addEventListener('click', readFile);

alert("Is this even working")

function readFile()
{
    docIdGet('saveConfirmer').innerHTML = "This is the element that i need to edit.";   
}

onload(document)
{
    alert('Is this even working')
}