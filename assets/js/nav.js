let burger = document.getElementById("burger")
        let hero = document.querySelector(".hero")
        let nav = document.getElementById("nav")
        burger.addEventListener("click", () => {

            nav.classList.toggle("show")
            hero.classList.toggle("fade")
            // nav.classList.add("show")
            console.log("clicked")
            // nav.style.display = "block"

        })

        const html = document.querySelector("html")
        html.addEventListener("click", (e) => {
            if (e.target != burger) {
                console.log("condition")
                nav.classList.remove("show")
                hero.classList.remove("fade")
                // nav.classList.add("normal")
            }
        })

        