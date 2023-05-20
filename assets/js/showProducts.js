let page = 0

async function getProductsAPI() {
    page++
    const products = await fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`)
        .then(response => response.json())
        .then(showProducts)
        .catch(error)
    return products
}

function showProducts(data) {
    const listProducts = data.products
    const cardProduct = document.getElementById('list-cards')

    listProducts.forEach(data => {
        cardProduct.innerHTML += `
            <div class="card">
                <div class="card-photo">   
                    <img src="${data.image}" alt="${data.name}" width="100%" height="100%">
                </div>
                <div class="card-text">
                    <h5>${data.name}</h5>
                    <p>${data.description}</p>
                    <p>De: ${data.oldPrice}</p>
                    <h4>Por: ${data.price}</h4>
                    <p>ou ${data.installments.value}x de ${data.installments.value}</p>
                    <button class="card-button">Comprar</button>
                </div>
            </div>
        `
    })
}

function error() {
    alert("Erro na conexão com os produtos!")
}

getProductsAPI()

const buttonNextPage = document.getElementById('button-more')
buttonNextPage.addEventListener('click', getProductsAPI)