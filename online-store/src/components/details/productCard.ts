import Data from '../../products-v1.json'

const detailsContainer = document.querySelector('.details-container') as HTMLElement

export function renderDetails(identifier:number): void {
console.log('render this card:>> ', identifier); //identifier === номер из даты -1

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
                    <img  src="${Data[identifier-1].images[0]}">
                    <img  src="${Data[identifier-1].images[1]}">
                    <img  src="${Data[identifier-1].images[2]}">
                    </div>
                  <img class="focus__img" src="${Data[identifier-1].images[2]}">
                  </div>
                  <div class="card__description">
                    <div class="item-card__title">
                      <h3>${Data[identifier-1].title}</h3>
                    </div>
                    <div class="item-card__description">${Data[identifier-1].description}
                    </div>
                    <div class="item-card__other">
                      <div>Rating: ${Data[identifier-1].rating}</div>
                      <div>Discount: ${Data[identifier-1].discountPercentage}%</div>
                    </div>
                  </div>

                  <div class="card__buy">
                  <div class="card-price">${Data[identifier-1].price} €</div>
                  <button>Drop from cart</button>
                  <button>Bye now</button>
                  </div>
                </div>
            </div>
`

detailsContainer.insertAdjacentHTML('beforeend', detailsContainerHTML)
}

