document.addEventListener("DOMContentLoaded", function () {

    let inputBox = document.querySelector('#inputBox');
    let list = document.querySelector('#list');

    inputBox.addEventListener("keyup", function(event) {
        if (event.key == "Enter") {
            addItem(this.value)
            this.value = ""
        }
    })

    let addItem = (inputBox) => {
        let listItem = document.createElement("li");
        listItem.innerHTML = `${inputBox}<i></i>`;
        listItem.addEventListener("click", function() {
            this.classList.toggle('done');
        })
        listItem.querySelector("i").addEventListener("click", function() {
            listItem.remove();
        })
        list.appendChild(listItem);
    }
});
