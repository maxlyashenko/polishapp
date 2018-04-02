function addVariant() {
    var li = document.createElement('li');

    li.className = 'variant';

    li.innerHTML =
        '<li><input type="text" class="keyboardInput" placeholder="Варіант 1"></li>\
        <p>\
        <input type="checkbox" class="filled-in" id="var1">\
        <label for="var1"></label>\
        </p>\
        <button class="delete-variant variant" removeVariant(this)>X</button>\
        ';

    document.getElementById('variant').appendChild(li);
}

function removeVariant(input) {
    document.getElementById('variant').removeChild(input.parentNode);
}