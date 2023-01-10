import { itemInBasket } from '../..';
import Data from '../../products-v1.json';
import { renderBasket } from '../basket/basket';
import { renderBuyForm } from '../basket/buyForm';
import { productsData } from '../cards/cards';
import { productsArrayI } from '../types';
const detailsContainer = document.querySelector(
  '.details-container'
) as HTMLElement;

export function renderDetails(identifier: number): void {
  function addDropCard(): string {
    for (const el of itemInBasket) {
      if (el.id === identifier) return 'Drop item';
    }
    return 'Add';
  }

  detailsContainer.innerHTML = '';
  const detailsContainerHTML = `
            <div class="bread-crumbs">
              <a href="#">Store</a>
              <p>${Data[identifier - 1].category}</p>
              <p>${Data[identifier - 1].brand}</p>
              <p>${Data[identifier - 1].title}</p>
            </div>
            <div class="details__card" data-identifier="${identifier}">
              <div class="card__info">
                  <div class="cards__image">
                    <div class="small__images">
                    <img class="small__img" src="${
                      Data[identifier - 1].images[0]
                    }">
                    <img class="small__img" src="${
                      Data[identifier - 1].images[1]
                    }">
                    <img class="small__img" src="${
                      Data[identifier - 1].images[2]
                    }">
                    </div>
                  <img class="focus__img" src="${
                    Data[identifier - 1].images[0]
                  }">
                  </div>
                  <div class="card__description">
                    <div class="item-card__title">
                      <h3>${Data[identifier - 1].title}</h3>
                    </div>
                    <div class="item-card__description">${
                      Data[identifier - 1].description
                    }
                    </div>
                    <div>Stock: ${Data[identifier - 1].stock}</div>
                    <div>Rating: ${Data[identifier - 1].rating}</div>
                    <div>Discount: ${
                      Data[identifier - 1].discountPercentage
                    }%</div>
                    <div>Price: ${Data[identifier - 1].price} €</div>
                  </div>

                  <div class="card__buy">
                  <div class="card-price">${Data[identifier - 1].price} €</div>
                  <div class="btn__addBasket" data-action="${addDropCard()}">${addDropCard()}</div>
                  <button class = "details__buy-btn">Buy now!</button>
                  </div>
                </div>
            </div>
`;

  detailsContainer.insertAdjacentHTML('beforeend', detailsContainerHTML);
  const buyButton = document.querySelector('.details__buy-btn') as HTMLElement;
  buyButton.addEventListener('click', renderBuyForm);
}

detailsContainer.addEventListener('click', (e) => {
  if (
    e !== null &&
    e.target instanceof HTMLImageElement &&
    e.target.classList.contains('small__img')
  ) {
    const focusImg = document.querySelector('.focus__img') as HTMLImageElement;
    focusImg.setAttribute('src', e.target.src);
    console.log('e.target :>> ', e.target);
  }
});

detailsContainer.addEventListener('click', (e) => {
  const currentAddBtn = (e.target! as HTMLElement).closest(
    '.btn__addBasket'
  ) as HTMLElement;

  if (
    (e.target! as HTMLElement).classList.contains('btn__addBasket') &&
    e.target instanceof HTMLElement &&
    e.target.dataset.action === 'Add'
  ) {
    itemInBasket.push(productsData.products[+!e.target.dataset.identifier]);
    e.target.dataset.action = 'Drop item';
    currentAddBtn.innerText = 'Drop item';
    renderBasket();
  } else if (
    (e.target! as HTMLElement).classList.contains('btn__addBasket') &&
    e.target instanceof HTMLElement &&
    e.target.dataset.action === 'Drop item'
  ) {
    const currID = +!e.target.dataset.identifier;
    itemInBasket.forEach((el: productsArrayI, index: number) => {
      if (el.id === currID + 1) {
        itemInBasket.splice(index, 1);
      }
    });
    e.target.dataset.action = 'Add';
    currentAddBtn.innerText = 'Add';
    renderBasket();
  }
});
