const dicountProductsRow = document.querySelector(".discount-products-row");
const newProductsRow = document.querySelector(".new-products-row");
const popularProductsRow = document.querySelector(".popular-products-row");

function getProductCard(product) {
  let check = cart.find((pr) => pr.id === product.id);

  const productCard = document.createElement("div");
  productCard.className = "product-card";

  const productCardBody = document.createElement("div");
  productCardBody.className = "product-card-body";

  const productImg = document.createElement("img");
  productImg.src = product.images[0];
  productImg.alt = product.name;

  productCardBody.appendChild(productImg);

  const productCardFooter = document.createElement("div");
  productCardFooter.className = "product-card-footer";

  const productTitle = document.createElement("h3");
  // const productTitleText = document.createTextNode(product.name);

  // productTitle.appendChild(productTitleText);
  productTitle.innerHTML = `<a href="product.html">${product.name}</a>`;

  const productPrice = document.createElement("p");
  // productPrice.textContent = "<i> Price </i>";
  productPrice.innerHTML = `<i> ${product.price} </i>`;

  const productBtn = document.createElement("button");
  productBtn.className = check ? "active-cart" : "";
  productBtn.innerHTML = "<b> Add to the cart </b>";

  productBtn.addEventListener("click", () => addToCart(product.id));

  productCardFooter.prepend(productBtn);
  productCardFooter.prepend(productPrice);
  productCardFooter.prepend(productTitle);

  productCard.append(productCardBody, productCardFooter);

  return productCard;
}

function addToCart(id) {
  let product = products.find((pr) => pr.id === id);
  let check = cart.find((pr) => pr.id === id);

  if (check) {
    cart = cart.map((pr) => {
      if (pr.id === id) {
        pr.quantity++;
      }
      return pr;
    });
  } else {
    product.quantity = 1;
    cart.push(product);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  getProducts();
  getCartTotal();
}

// products.map((product) => {
//   let card = getProductCard(product);
//   productsRow.append(card);
// });

function getProducts() {
  let discountProducts = products.filter((pr) => pr.discount).slice(-4);

  dicountProductsRow.innerHTML = "";
  discountProducts.map((product) => {
    let card = getProductCard(product);
    dicountProductsRow.append(card);
  });

  let newProducts = products.slice(-4);

  newProductsRow.innerHTML = "";
  newProducts.map((product) => {
    let card = getProductCard(product);
    newProductsRow.append(card);
  });

  let popularProducts = products
    .toSorted((a, b) => a.rating - b.rating)
    .slice(-4);

  popularProductsRow.innerHTML = "";
  popularProducts.map((product) => {
    let card = getProductCard(product);
    popularProductsRow.append(card);
  });
}

getProducts();

function getArticleCard() {}

let articles = [
  {
    title: "",
    description: "",
    image: "../assets/images/articles/1.png",
  },
  {
    title: "",
    description: "",
    image: "../assets/images/articles/1.png",
  },
  {
    title: "",
    description: "",
    image: "../assets/images/articles/1.png",
  },
];
