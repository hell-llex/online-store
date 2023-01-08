//TODO п.19.4 кнопка добавления в корзину зависит от того был ли добавлен ранее
import Data from '../../products-v1.json'
import { renderBuyForm } from '../basket/buyForm'
const detailsContainer = document.querySelector('.details-container') as HTMLElement

export function renderDetails(identifier:number): void {
console.log('render this card:>> ', identifier);

const detailsContainerHTML = `
            <div class="bread-crumbs">
              <a href="">Store</a>
              <a href="">${Data[identifier-1].category}</a>
              <a href="">${Data[identifier-1].brand}</a>
              <a href="">${Data[identifier-1].title}</a>
            </div>
            <div class="details__card">
              <div class="card__info">
                  <div class="cards__image">
                    <div class="small__images">
                    <img class="small__img" src="${Data[identifier-1].images[0]}">
                    <img class="small__img" src="${Data[identifier-1].images[1]}">
                    <img class="small__img" src="${Data[identifier-1].images[2]}">
                    </div>
                  <img class="focus__img" src="${Data[identifier-1].images[0]}">
                  </div>
                  <div class="card__description">
                    <div class="item-card__title">
                      <h3>${Data[identifier-1].title}</h3>
                    </div>
                    <div class="item-card__description">${Data[identifier-1].description}
                    </div>
                    <div>Stock: ${Data[identifier-1].stock}</div>
                    <div>Rating: ${Data[identifier-1].rating}</div>
                    <div>Discount: ${Data[identifier-1].discountPercentage}%</div>
                    <div>Price: ${Data[identifier-1].price} €</div>
                  </div>

                  <div class="card__buy">
                  <div class="card-price">${Data[identifier-1].price} €</div>
                  <button>Drop from cart</button>
                  <button class = "details__buy-btn">Bye now!</button>
                  </div>
                </div>
            </div>
`

detailsContainer.insertAdjacentHTML('beforeend', detailsContainerHTML)
const buyButton = document.querySelector('.details__buy-btn') as HTMLElement
buyButton.addEventListener('click', renderBuyForm)
}


detailsContainer.addEventListener('click', (e) => {
  if ((e !== null && e.target instanceof HTMLImageElement) && (e.target.classList.contains('small__img'))) {
    const focusImg = document.querySelector('.focus__img') as HTMLImageElement
    focusImg.setAttribute('src', e.target.src);
}})


