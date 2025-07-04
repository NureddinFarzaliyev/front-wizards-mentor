const url = "https://fakestoreapi.com/products";

const productsContainer = document.querySelector("#list-container")

const parseData = (data) => {
    data.forEach(el => {
        console.log(el)

        // create card
        const card = document.createElement("div")
        card.classList.add("product-card")

        // append card element
        productsContainer.appendChild(card)

        // create image
        const image = document.createElement("img")
        image.setAttribute("src", el.image)
        // image.src = el.image
        card.appendChild(image)
        image.style.width = "100px"

        // create title
        const title = document.createElement("h4")
        title.textContent = el.title
        card.appendChild(title)

        // create price
        const price = document.createElement("span")
        price.textContent = el.price
        card.appendChild(price)

        // create description
        const description = document.createElement("p")
        description.textContent = el.description
        card.appendChild(description)

        // create button
        const buyBtn = document.createElement("button")
        buyBtn.textContent = "Add to Cart"

        buyBtn.addEventListener("click", () => {
            Swal.fire({
                title: "Added to cart",
                text: ` ${el.title} successfully added to cart.`,
                icon: "success",
                confirmButtonText: "OK",
            })
        })

        card.appendChild(buyBtn)
    })
}

fetch(url)
    .then((response) => response.json())
    .then((data) => parseData(data));
