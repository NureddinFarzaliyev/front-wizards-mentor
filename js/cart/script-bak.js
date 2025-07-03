const url = "https://fakestoreapi.com/products";

const listContainer = document.querySelector("#list-container");
const cartContainer = document.querySelector("#cart-items");
const buyCartButton = document.querySelector("#buy-cart");

const addToCart = (product) => {
  const cartItem = document.createElement("div");
  cartItem.className = "product-card cart-item";

  const title = document.createElement("p");
  title.textContent = product.title;

  const price = document.createElement("b");
  price.textContent = `Price: $${product.price}`;

  const image = document.createElement("img");
  image.src = product.image;
  image.alt = product.title;
  image.style.width = "50px";

  cartItem.appendChild(image);
  cartItem.appendChild(title);
  cartItem.appendChild(price);

  cartContainer.appendChild(cartItem);

  Swal.fire({
    title: "Added to Cart",
    text: `${product.title} has been added to your cart.`,
    icon: "success",
    confirmButtonText: "OK",
  });
};

const createProductCard = (product) => {
  const card = document.createElement("div");
  card.className = "product-card";

  const title = document.createElement("h4");
  title.textContent = product.title;

  const price = document.createElement("p");
  price.textContent = `Price: $${product.price}`;

  const description = document.createElement("p");
  description.textContent = product.description;

  const image = document.createElement("img");
  image.src = product.image;
  image.alt = product.title;
  image.style.width = "100px";

  const button = document.createElement("button");
  button.textContent = "Add to Cart";
  button.addEventListener("click", () => addToCart(product));

  const left = document.createElement("div");
  const right = document.createElement("div");

  left.appendChild(image);
  right.appendChild(title);
  right.appendChild(price);
  right.appendChild(description);
  right.appendChild(button);

  card.appendChild(left);
  card.appendChild(right);

  return card;
};

const buyCart = () => {
  const cartItems = cartContainer.querySelectorAll(".cart-item");
  if (cartItems.length === 0) {
    Swal.fire({
      title: "Cart Empty",
      text: "Your cart is empty. Please add items to your cart before purchasing.",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  }

  let total = 0;
  cartItems.forEach((item) => {
    const priceText = item.querySelector("p").textContent;
    const price = parseFloat(priceText.replace("Price: $", ""));
    total += price;
  });

  Swal.fire({
    title: "Purchase Successful",
    text: `You have purchased items worth $${total.toFixed(2)}.`,
    icon: "success",
    confirmButtonText: "OK",
  });
  cartContainer.innerHTML = "";
};

buyCartButton.addEventListener("click", buyCart);

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((product) => {
      listContainer.appendChild(createProductCard(product));
    });
  });
