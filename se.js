let search = document.getElementById("searchInput");

let products = document.querySelectorAll(".product");

search.addEventListener("input", function() {

    let searchValue = search.value.toLowerCase();

    products.forEach(function(product) {

        let name = product.textContent.toLowerCase();

        if (name.includes(searchValue)) {
            product.style.display = "list-item";
        } else {
            product.style.display = "none";
        }

    });

});