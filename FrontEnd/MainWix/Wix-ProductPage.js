// const products=[
//     {   id:1,
//         price:1550,
//         image:"https://static.wixstatic.com/media/27af89_cad6213a03394f3c974df2d47583cdcd~mv2.jpg/v1/fill/w_590,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/27af89_cad6213a03394f3c974df2d47583cdcd~mv2.jpg",
//         show:"Быстрый просмотр",
//         title:"ВАШ ЦИФРОВОЙ ТОВАР"
//     },
//     {
//         id:2,
//         price:1450,
//         image:"https://static.wixstatic.com/media/27af89_c08316f2617c4ab2997e6615dfc7951a~mv2_d_3872_2592_s_4_2.jpg/v1/fill/w_590,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/27af89_c08316f2617c4ab2997e6615dfc7951a~mv2_d_3872_2592_s_4_2.jpg",
//         show:"Быстрый просмотр",
//         title:"ВАШ ЦИФРОВОЙ ТОВАР"
//     },
//     {
//         id:3,
//         price:1250,
//         image:"https://static.wixstatic.com/media/27af89_2f1eeea61a5b4522bbf1cd9ae9d9e928~mv2_d_3872_2592_s_4_2.jpg/v1/fill/w_590,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/27af89_2f1eeea61a5b4522bbf1cd9ae9d9e928~mv2_d_3872_2592_s_4_2.jpg",
//         show:"Быстрый просмотр",
//         title:"ВАШ ЦИФРОВОЙ ТОВАР"
//     },
//     {
//         id:4,
//         price:1500,
//         image:"https://static.wixstatic.com/media/27af89_23018aa424264084b489d5c4e2fbc9d5~mv2_d_3872_2592_s_4_2.jpg/v1/fill/w_590,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/27af89_23018aa424264084b489d5c4e2fbc9d5~mv2_d_3872_2592_s_4_2.jpg",
//         show:"Быстрый просмотр",
//         title:"ВАШ ЦИФРОВОЙ ТОВАР"
//     },
//     {
//         id:5,
//         price:1800,
//         image:"https://static.wixstatic.com/media/27af89_73de81d5264c4488a2c23ad7b8c48af4~mv2_d_3872_2592_s_4_2.jpg/v1/fill/w_590,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/27af89_73de81d5264c4488a2c23ad7b8c48af4~mv2_d_3872_2592_s_4_2.jpg",
//         show:"Быстрый просмотр",
//         title:"ВАШ ЦИФРОВОЙ ТОВАР"
//     },
//     {
//         id:6,
//         price:1400,
//         image:"https://static.wixstatic.com/media/27af89_63df77ee052646c5a28f6608ff466a20~mv2.jpg/v1/fill/w_590,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/27af89_63df77ee052646c5a28f6608ff466a20~mv2.jpg",
//         show:"Быстрый просмотр",
//         title:"ВАШ ЦИФРОВОЙ ТОВАР"
//     },
//     {
//         id:7,
//         price:800,
//         image:"https://static.wixstatic.com/media/27af89_137176b1aa65498e881c8db3cd1478a8~mv2.jpg/v1/fill/w_590,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/27af89_137176b1aa65498e881c8db3cd1478a8~mv2.jpg",
//         show:"Быстрый просмотр",
//         title:"ВАШ ЦИФРОВОЙ ТОВАР"
//     },
//     {
//         id:8,
//         price:2000,
//         image:"https://static.wixstatic.com/media/27af89_20dd5fef93074eb294459f01b4c83254~mv2_d_3872_2592_s_4_2.jpg/v1/fill/w_590,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/27af89_20dd5fef93074eb294459f01b4c83254~mv2_d_3872_2592_s_4_2.jpg",
//         show:"Быстрый просмотр",
//         title:"ВАШ ЦИФРОВОЙ ТОВАР"
//     },
//     {
//         id:9,
//         price:1300,
//         image:"https://static.wixstatic.com/media/27af89_d800288d7d434de6b6796181a3e70b09~mv2_d_3872_2592_s_4_2.jpg/v1/fill/w_590,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/27af89_d800288d7d434de6b6796181a3e70b09~mv2_d_3872_2592_s_4_2.jpg",
//         show:"Быстрый просмотр",
//         title:"ВАШ ЦИФРОВОЙ ТОВАР"
//     },
//     {
//         id:10,
//         price:1700,
//         image:"https://static.wixstatic.com/media/27af89_73de81d5264c4488a2c23ad7b8c48af4~mv2_d_3872_2592_s_4_2.jpg/v1/fill/w_590,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/27af89_73de81d5264c4488a2c23ad7b8c48af4~mv2_d_3872_2592_s_4_2.jpg",
//         show:"Быстрый просмотр",
//         title:"ВАШ ЦИФРОВОЙ ТОВАР"
//     },
// ]



const fetchFunction = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.error);
  }
  const data = await response.json();
  return data;
};


let paramsId = window.location.hash.split("#")[1];

const fetchPostFunction =  async(url) => {
  // console.log(url);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  if (response.ok) {
    const responseData = await response.text();
    if (responseData.trim() !== '') {
      const jsonData = JSON.parse(responseData);
      // Continue with your code to handle JSON data
      return jsonData
    } else {
      console.error('Empty response from the server.');
    }
  }
  
 
};





const section_product = document.getElementById("section_products");
const add_cart = document.getElementById("add_cart");
const cart = document.getElementById("cart");
let next1 = document.getElementById("next");
let count_cart = 0;
const icon_cartDiv = document.getElementById("icon_cartDiv");
let Array_localStrorage = [];
let agr = 1;
// const length=products.length
let count_cartGenerate = 1;
let array = [];


const cart_bottom = document.createElement("div");
cart_bottom.id = "cart_bottom";
cart.appendChild(cart_bottom);
const cartShow_cart = document.createElement("div");
cartShow_cart.className = "cartShow_cart";
const p_cart = document.createElement("span");
p_cart.className = "p_cart";
p_cart.innerHTML = "Сумма ` ";
cartShow_cart.appendChild(p_cart);
const cart_hr = document.createElement("hr");
cart_hr.className = "cart_hr";
cartShow_cart.appendChild(cart_hr);
const cart_page = document.createElement("a");
cart_page.className = "cart_page";
cart_page.href = "../CartPage/CartPage.html";
cart_page.innerHTML = "Смотреть корзину";
cartShow_cart.appendChild(cart_page);
cart.appendChild(cartShow_cart);




let priceArray = [];
const cartProducts = async () => {
  const products = await fetchFunction("http://localhost:5005/api/cart/All").then((products)=>{return products});

  products.map((product) => {
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

  });

  const priceArrayResult = priceArray.reduce((aggr, val) => {
    return (aggr = aggr + val);
  }, 0);

  const allPrice = document.createElement("span")
  allPrice.innerHTML = priceArrayResult
  p_cart.appendChild(allPrice)
  const showProductCount = document.getElementById("showProductCount")
  showProductCount.innerHTML = products.length
};
cartProducts();


const cartIcon_productCount = async () => {
  const products = await fetchFunction("http://localhost:5005/api/cart/All").then((products)=>{return products});

  const allprice_result = document.getElementById("allprice_result")
  allprice_result.innerHTML = products.length



}
cartIcon_productCount()


const displayProducts = async (page) => {
  const products = await fetchFunction(page);

  section_product.innerHTML=""
console.log("aaa");
  products.map((arg) => {
    const product_divs = document.createElement("a");
    const image = document.createElement("div");
    const p = document.createElement("p");
    const price = document.createElement("span");
    const hover_div = document.createElement("a");
    const download = document.createElement("a");
    const icon_download = document.createElement("i");
    const hr = document.createElement("hr");
    hr.classList = "hr";
    download.innerHTML ='<i class="fa fa-long-arrow-down" aria-hidden="true"></i>';
    icon_download.classList = "icon_download";
    download.classList = "download";
    hover_div.classList = "hover_div";
    product_divs.classList = "product_divs";
    image.classList = "product_image";
    p.classList = "title";
    price.classList = "price";
    image.style.backgroundImage = `url(${arg.image})`;
    product_divs.appendChild(image);
    section_product.appendChild(product_divs);
    p.innerHTML = arg.title;
    product_divs.appendChild(p);
    price.innerHTML = arg.price + " ₽";
    product_divs.appendChild(price);
    hover_div.innerHTML = arg.show;
    image.appendChild(hover_div);
    download.appendChild(icon_download);
    download.appendChild(hr);
    image.appendChild(download);
    product_divs.addEventListener(
      "click",
      () => (product_divs.href = `../ProductPage/ProductPage.html#${arg._id}`)
    );
  });
};





const displayProductById = async (id) => {

  const product = await fetchFunction(
    `http://localhost:5005/api/product/${id}`
  );
  // console.log(product);
  const image = document.getElementById("product_image2");
  const price1 = document.getElementById("price");
  const sendId = document.getElementById("send_id");
  sendId.innerHTML = product._id;
  const priceSplit = String(product.price).split("");
  if (priceSplit.length === 3) {
    priceSplit.push(" ");
  }
  const displayPrice = `${priceSplit[0]} ${priceSplit[1]}${priceSplit[2]}${priceSplit[3]}.00`;
  price1.innerHTML = product.price;
  image.style.backgroundImage = `url(${product.image})`;
};
const next = async () => {
  if (agr === 10) {
    next1.style.color = "grey";
    document.getElementById("right_icon").style.color = "grey";
  } else {
    document.getElementById("left_icon").style.color = "black";
    document.getElementById("left").style.color = "black";
    next1.style.color = "black";
    document.getElementById("right_icon").style.color = "black";
    const products = await fetchFunction("http://localhost:5005/api/product/");

    displayProductById(products[agr]._id);
    agr++;
    let arr = window.location.hash.split("");
    let hash1 = arr[0] + "" + agr;
    window.location.hash = products[agr]._id;
  }
};
const left = async () => {
  if (agr === 1) {
    document.getElementById("left_icon").style.color = "grey";
    document.getElementById("left").style.color = "grey";
  } else {
    next1.style.color = "black";
    document.getElementById("right_icon").style.color = "black";
    agr--;
    const products = await fetchFunction("http://localhost:5005/api/product/");
    window.location.hash = products[agr]._id;

    displayProductById(products[agr]._id);
  }
};
displayProducts("http://localhost:5005/api/product/pageone?page=1&size=5")
if (!paramsId) {
  const angleLeft=document.getElementById("angleLeft")
  angleLeft.addEventListener("click",()=>displayProducts("http://localhost:5005/api/product/pageone?page=1&size=5"));
}
if (!paramsId) {

  const angleRight=document.getElementById("angleRight")
  angleRight.addEventListener("click",() => displayProducts("http://localhost:5005/api/product/pageone?page=2&size=5"))

}

if (paramsId) {
  displayProductById(paramsId);
}

const add_cartFunc = async (id) => {
  const addToCart = await fetchPostFunction(
    `http://localhost:5005/api/cart/${id}`
  );
};
if (add_cart) {
  add_cart.addEventListener("click", () => {
    let paramsId = window.location.hash.split("#")[1];
   add_cartFunc(paramsId);
  });
}

const hidden_arrow = document.getElementById("hidden_arrow");

const cart_hidden = () => {
  cart.style.animation = "cart_hidden 2s forwards";
};

if (cart_top) {
  cart_top.addEventListener("click", () => {
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
