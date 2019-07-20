// COLLECTION SLIDER
function productSelection(products) {
    document.querySelector('#products').classList.remove('hide');
    document.querySelector('#products').classList.add('flexCenter');
    let currentProduct = 0;
    fetch('../products.json')
        .then(res => res.json())
        .then(data => {
            const productArr = data.filter(d => d.type === products);

            function showProduct() {
                document.querySelector('#productType').innerText =
                    productArr[currentProduct].type;
                document.querySelector('.slide').innerHTML =
                    productArr[currentProduct].photo;
                document.querySelector('#productName').innerText =
                    productArr[currentProduct].name;
                document.querySelector('#productDescription').innerText =
                    `DESCRIPTION: ${productArr[currentProduct].description}`;
                document.querySelector('#productSize').innerText =
                    `SIZES: ${productArr[currentProduct].size}`;
            }
            showProduct()
            // next product
            document.querySelector('#btnNext').addEventListener('click',
                function () {
                    currentProduct++
                    if (currentProduct >= productArr.length)
                        currentProduct = 0
                    showProduct()
                });
            // previous product
            document.querySelector('#btnPrevious').addEventListener('click',
                function () {
                    currentProduct--
                    if (currentProduct < 0)
                        currentProduct = productArr.length - 1
                    showProduct()
                });
        }).catch(err => {
            console.log(err.message)
            document.querySelector('.product').innerHTML =
                `<h2 class = "errorMessage">Request failed, please try again later!</h2>`;
        });
}
// listeners
document.querySelector('#dresses').addEventListener('click', () => {
    productSelection('dresses')
});
document.querySelector('#tops').addEventListener('click', () => {
    productSelection('tops')
});
document.querySelector('#skirts').addEventListener('click', () => {
    productSelection('skirts')
});
document.querySelector('#overalls').addEventListener('click', () => {
    productSelection('overalls')
});
document.querySelector('#accessories').addEventListener('click', () => {
    productSelection('accessories')
});
document.querySelector('#other').addEventListener('click', () => {
    productSelection('other')
});
