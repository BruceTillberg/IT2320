window.onload = function Load() {
    var pics = document.getElementsByClassName("clickable");
    for (var i = 0; i < pics.length; i++)
    {
        pics[i].addEventListener("click", ClickedCell);

    }

    function ClickedCell() {
        self.className = "selected"
    }

    function ClickedCell(element) {
        element.target.className = (element.target.className == "clickable") ? "selected" : "clickable";
    }

}

//pics[i].className = "selected"

// JavaScript source code
