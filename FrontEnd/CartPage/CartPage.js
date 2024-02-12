// import ProductModel from "../../BackEnd/Model/ProductModel.js";

let array_localObj_cartPage = [];
const icon_cartDiv = document.getElementById("icon_cartDiv");
const cartIcon_productCount = document.getElementById("cartIcon_productCount");
const data_localObj_cartPage = JSON.parse(localStorage.getItem("user2"));
array_localObj_cartPage.push(data_localObj_cartPage);
const cart1_pageProducts = document.getElementById("cart1_pageProducts");

const fetchFunction = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.error);
  }
  const data = await response.json();
  return data;
};

const fetchPostFunction = async (url) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) throw new Error(response.error);

  const data = await response.json();
  return data;
};

const cartShowFunc = async () => {
  const cart_openProduct = await fetchFunction(
    "http://localhost:5005/api/cart/All"
  ).then((products) => {
    return products;
  });

  const allPriceSpan = cart_openProduct.reduce((aggr, val) => {
    const onePrice = val.count * val.productId.price;
    aggr = aggr + onePrice;
    return aggr;
  }, 0);

  const cart_bottom = document.createElement("div");
  cart_bottom.id = "cart_bottom";
  cart.appendChild(cart_bottom);
  const cartShow_cart = document.createElement("div");
  cartShow_cart.className = "cartShow_cart";
  const p_cart = document.createElement("span");
  p_cart.className = "p_cart";
  p_cart.innerHTML = "Сумма `";
  cartShow_cart.appendChild(p_cart);
  const result_allPrice = document.createElement("span");
  const cart_hr = document.createElement("hr");
  cart_hr.className = "cart_hr";
  cartShow_cart.appendChild(cart_hr);
  const cart_page = document.createElement("a");
  cart_page.className = "cart_page";
  cart_page.href = "../CartPage/CartPage.html";
  cart_page.innerHTML = "Смотреть корзину";
  cartShow_cart.appendChild(cart_page);
  cart.appendChild(cart_bottom);
  cart.appendChild(cartShow_cart);
  const allPriceCartPage = document.createElement("span");
  allPriceCartPage.className = "allPriceCartPage";
  allPriceCartPage.innerHTML = allPriceSpan;
  p_cart.appendChild(allPriceCartPage);
};
cartShowFunc();
const cartProducts = async () => {
  const products = await fetchFunction(
    "http://localhost:5005/api/cart/All"
  ).then((products) => {
    return products;
  });

  let priceArray = [];
  products.map(async (product) => {
    //cartshow

    const productDiv = document.createElement("div");
    productDiv.classList = "productDiv";
    cart_bottom.appendChild(productDiv);
    const imageDiv = document.createElement("div");
    imageDiv.classList = "imagecart";
    imageDiv.style.backgroundImage = `url(${product.productId.image})`;
    productDiv.appendChild(imageDiv);
    const titleDiv = document.createElement("div");
    titleDiv.classList = "titleDiv";
    productDiv.appendChild(titleDiv);
    const titleP = document.createElement("p");
    titleP.classList = "titleP";
    titleP.innerHTML = product.productId.title;
    titleDiv.appendChild(titleP);
    const countCartDiv = document.createElement("div");
    countCartDiv.classList = "countCartDiv";
    titleDiv.appendChild(countCartDiv);
    const minusCount = document.createElement("span");
    minusCount.classList = "minusCount";
    minusCount.innerHTML = "-";
    countCartDiv.appendChild(minusCount);
    const count = document.createElement("span");
    count.classList = "count";
    count.innerHTML = product.count;
    countCartDiv.appendChild(count);
    const plusCount = document.createElement("span");
    plusCount.classList = "plusCount";
    plusCount.innerHTML = "+";
    countCartDiv.appendChild(plusCount);
    const price = document.createElement("span");
    price.classList = "price";
    price.innerHTML = product.productId.price * product.count;
    titleDiv.appendChild(price);
    priceArray.push(product.productId.price * product.count);

    //cartshow

    cartIcon_productCount.innerHTML = `${products.length}`;
    const left_rightDiv = document.createElement("div");
    left_rightDiv.classList = "left_rightDiv";
    cart1_pageProducts.appendChild(left_rightDiv);
    // dzax komi divna
    const cartPage_leftDiv = document.createElement("div");
    const my_cart = document.createElement("span");
    my_cart.classList = "my_cart";
    my_cart.innerHTML = "Моя корзина";
    cartPage_leftDiv.appendChild(my_cart);
    const product_material = document.createElement("div");
    product_material.classList = "product_material";
    const product_materialImgDiv = document.createElement("div");
    product_materialImgDiv.classList = "product_materialImgDiv";
    const imgDiv = document.createElement("div");
    imgDiv.classList = "imgDiv";
    imgDiv.style.backgroundImage = `url(${product.productId.image})`;
    product_materialImgDiv.appendChild(imgDiv);
    const div_oneprice = document.createElement("div");
    div_oneprice.classList = "div_oneprice";
    const div_onepricePrice = document.createElement("span");
    div_onepricePrice.classList = "div_onepricePrice";
    div_onepricePrice.innerHTML = `${product.productId.price}.00 ₽`;
    const div_onepriceTitle = document.createElement("span");
    div_onepriceTitle.classList = "div_onepriceTitle";
    div_onepriceTitle.innerHTML = `${product.productId.title}`;
    div_oneprice.appendChild(div_onepriceTitle);
    div_oneprice.appendChild(div_onepricePrice);
    product_materialImgDiv.appendChild(div_oneprice);
    product_material.appendChild(product_materialImgDiv);
    const product_material_price = document.createElement("span");
    product_material_price.classList = "product_material_price";
    product_material_price.innerHTML = `${product.productId.price}.00 ₽`;
    product_material.appendChild(product_material_price);
    const product_materialCenterDiv = document.createElement("div");
    product_materialCenterDiv.classList = "product_materialCenterDiv";
    const product_materialCenterDivAdd = document.createElement("span");
    product_materialCenterDivAdd.classList = "product_materialCenterDivAdd";
    product_materialCenterDivAdd.innerHTML = "+";
    const product_materialCenterDivCount = document.createElement("span");
    product_materialCenterDivCount.classList = "product_materialCenterDivCount";
    product_materialCenterDivCount.innerHTML = product.count;
    const product_materialCenterDivSub = document.createElement("span");
    product_materialCenterDivSub.classList = "product_materialCenterDivSub";
    product_materialCenterDivSub.innerHTML = "-";
    product_materialCenterDiv.appendChild(product_materialCenterDivSub);
    product_materialCenterDiv.appendChild(product_materialCenterDivCount);
    product_materialCenterDiv.appendChild(product_materialCenterDivAdd);
    product_material.appendChild(product_materialCenterDiv);
    const product_material_cancel = document.createElement("div");
    product_material_cancel.classList = "product_material_cancel";
    product_material_cancel.innerHTML =
      '<i class="fa fa-times" aria-hidden="true"></i>';
    product_material.appendChild(product_material_cancel);
    cartPage_leftDiv.appendChild(product_material);
    const promo_codeDiv = document.createElement("div");
    promo_codeDiv.classList = "promo_codeDiv";
    const promo_logo = document.createElement("i");
    promo_logo.classList = "promo_logo";
    promo_logo.innerHTML = '<i class="fa fa-tag" aria-hidden="true"></i>';
    promo_codeDiv.appendChild(promo_logo);
    const promo_text = document.createElement("span");
    promo_text.innerHTML = "Добавить промокод";
    promo_text.classList = "promo_text";
    promo_codeDiv.appendChild(promo_text);
    cartPage_leftDiv.appendChild(promo_codeDiv);
    const left_bottomDiv = document.createElement("div");
    left_bottomDiv.classList = "left_bottomDiv";
    const cartPage_leftDivLogo = document.createElement("i");
    cartPage_leftDivLogo.classList = "cartPage_leftDivLogo";
    cartPage_leftDivLogo.innerHTML =
      '<i class="fa fa-tag" aria-hidden="true"></i>';
    left_bottomDiv.appendChild(cartPage_leftDivLogo);
    const left_bottomDiv_text = document.createElement("span");
    left_bottomDiv_text.classList = "left_bottomDiv_text";
    left_bottomDiv_text.innerHTML = "Добавить пожелание";
    left_bottomDiv.appendChild(left_bottomDiv_text);
    cartPage_leftDiv.appendChild(left_bottomDiv);
    cartPage_leftDiv.classList = "cartPage_leftDiv";
    left_rightDiv.appendChild(cartPage_leftDiv);
    // aj komi divna
    const cartPage_rightDiv = document.createElement("div");
    cartPage_rightDiv.classList = "cartPage_rightDiv";
    const detal = document.createElement("span");
    detal.classList = "detal";
    detal.innerHTML = "Детали заказа";
    cartPage_rightDiv.appendChild(detal);
    const rightDiv_innerDiv = document.createElement("div");
    rightDiv_innerDiv.classList = "rightDiv_innerDiv";
    const rightPriceDiv = document.createElement("div");
    rightPriceDiv.classList = "rightPriceDiv";
    const rightPriceDiv_text = document.createElement("span");
    rightPriceDiv_text.classList = "rightPriceDiv_text";
    rightPriceDiv_text.innerHTML = "Сумма";
    rightPriceDiv.appendChild(rightPriceDiv_text);
    const rightPriceDiv_price = document.createElement("span");
    rightPriceDiv_price.classList = "rightPriceDiv_price";
    rightPriceDiv_price.innerHTML = `${
      product.productId.price * product.count
    }.00 ₽`;
    rightPriceDiv.appendChild(rightPriceDiv_price);
    const rightDiv_innerDivParentDiv = document.createElement("div");
    rightDiv_innerDivParentDiv.classList = "rightDiv_innerDivParentDiv";
    rightDiv_innerDivParentDiv.appendChild(rightPriceDiv);
    const rightDiv_innerDivBottomDiv = document.createElement("div");
    rightDiv_innerDivBottomDiv.classList = "rightDiv_innerDivBottomDiv";
    rightDiv_innerDivBottomDiv.innerHTML = "Оформить заказ";
    rightDiv_innerDivParentDiv.appendChild(rightDiv_innerDivBottomDiv);
    rightDiv_innerDiv.appendChild(rightDiv_innerDivParentDiv);
    cartPage_rightDiv.appendChild(rightDiv_innerDiv);
    const block_bottom = document.createElement("div");
    block_bottom.classList = "block_bottom";
    const block_logo = document.createElement("div");
    block_logo.classList = "block_logo";
    block_logo.innerHTML = '<i class="fa fa-lock" aria-hidden="true"></i>';
    block_bottom.appendChild(block_logo);
    const block_text = document.createElement("span");
    block_text.classList = "block_text";
    block_text.innerHTML = "Безопасный заказ";
    block_bottom.appendChild(block_text);
    cartPage_rightDiv.appendChild(block_bottom);
    left_rightDiv.appendChild(cartPage_rightDiv);

    let counnt = 0;

    const add_cartFunc = async (id) => {
      const addToCart = await fetchPostFunction(
        `http://localhost:5005/api/cart/${id}`
      ).then((product) => {
        return product;
      });

      return addToCart;
    };
    const sub_cartFunc = async (id) => {
      const subToCart = await fetchPostFunction(
        `http://localhost:5005/api/cart/sub/${id}`
      ).then((product) => {
        return product;
      });
      return subToCart;
    };

    const add_count = async () => {
      const { productcart, count } = await add_cartFunc(product.productId._id);
      const cart_openCount = await fetchFunction(
        `http://localhost:5005/api/cart/${product.productId._id}`
      ).then((product) => {
        return product;
      });
      product_materialCenterDivCount.innerHTML = count;

      rightPriceDiv_price.innerHTML = `${
        product.productId.price *
        parseInt(product_materialCenterDivCount.innerHTML)
      }.00 ₽`;
    };

    const sub_count = async () => {
      const { productcart, count } = await sub_cartFunc(product.productId._id);
      const cart_openCount = await fetchFunction(
        `http://localhost:5005/api/cart/${product.productId._id}`
      ).then((product) => {
        return product;
      });
      product_materialCenterDivCount.innerHTML = count;

      rightPriceDiv_price.innerHTML = `${
        parseInt(product_materialCenterDivCount.innerHTML) *
        product.productId.price
      }.00 ₽`;
    };

    product_materialCenterDivAdd.addEventListener("click", () => {
      add_count();
    });
    product_materialCenterDivSub.addEventListener("click", () => {
      if (product_materialCenterDivCount.innerHTML > 1) {
        sub_count();
      }
    });
  });
};
cartProducts();

const hidden_arrow = document.getElementById("hidden_arrow");

const cart_hidden = () => {
  cart.style.animation = "cart_hidden 2s forwards";
};

if (hidden_arrow) {
  hidden_arrow.addEventListener("click", () => {
    cart_hidden();
  });
}

const cart_show = () => {
  cart.style.animation = "cart 2s forwards";
};

if (icon_cartDiv) {
  icon_cartDiv.addEventListener("click", () => {
    cart_show();
  });
}
