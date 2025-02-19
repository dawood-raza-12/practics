var newVar = document.getElementById('simple')
var oldVar = document.getElementById('addingText')
var work = []

function addText() {
    var text = newVar.value
    var addingTextFor = oldVar

    if (text !== "") {
        work.push(text)

        console.log(work)
        oldVar.innerHTML = work;
        newVar.value = "";

    }
}