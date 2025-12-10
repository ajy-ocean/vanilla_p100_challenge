let productImg = document.getElementById("product-img");
let btn = document.getElementsByClassName("btn");

btn[0].onclick = function() {
    productImg.src = "https://raw.githubusercontent.com/ajy-ocean/vanilla_p100_challenge/master/26_product_design/images/image1.png";
    for(bt of btn) {
        bt.classList.remove("active");
    }
    this.classList.add("active");
}

btn[1].onclick = function() {
    productImg.src = "https://raw.githubusercontent.com/ajy-ocean/vanilla_p100_challenge/master/26_product_design/images/image2.png";
    for(bt of btn) {
        bt.classList.remove("active");
    }
    this.classList.add("active");
}

btn[2].onclick = function() {
    productImg.src = "https://raw.githubusercontent.com/ajy-ocean/vanilla_p100_challenge/master/26_product_design/images/image3.png";
    for(bt of btn) {
        bt.classList.remove("active");
    }
    this.classList.add("active");
}