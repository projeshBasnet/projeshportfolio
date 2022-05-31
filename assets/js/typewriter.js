const Typewriter = function (txtElement, words, wait = 1000) {
    // console.log("this", this)
    // console.log(words)
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false
}

// defining a type function



Typewriter.prototype.type = function () {
    const current = this.wordIndex % this.words.length
    const fulltxt = this.words[current];

    if (this.isDeleting) {
        this.txt = fulltxt.substring(0, this.txt.length - 1);

    }
    else {
        this.txt = fulltxt.substring(0, this.txt.length + 1);
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`


    let typespeed = this.wait;

    if (this.isDeleting) {
        typespeed /= 2;
    }
    if (!this.isDeleting && this.txt == fulltxt) {
        this.isDeleting = true;
        typespeed = this.wait
    }
    else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.wordIndex++;
        typespeed = 1000
    }

    // console.log("typespeed", typespeed)
    setTimeout(() => this.type(), typespeed)
}


document.addEventListener("DOMContentLoaded", init)

function init() {
    const txtElement = document.getElementById("typewriter");
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = parseInt(txtElement.getAttribute('data-wait'));
    // console.log("wait", wait)


    // init typewriter
    new Typewriter(txtElement, words, wait);

}