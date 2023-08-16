import { itemInBasket } from '../..';
// import Data from '../../products-v1.json';
import { renderBasket } from '../basket/basket';
import { renderBuyForm } from '../basket/buyForm';
import { localStorageUrl } from '../basket/localStorage';
import { productsData } from '../cards/cards';
import { recoveryValue } from '../routing/routing';
// import { productsData } from '../cards/cards';
import { IProduct } from '../types';
const detailsContainer = document.querySelector(
  '.details-container',
) as HTMLElement;

export function renderDetails(identifier: number): void {
  function addDropCard(): string {
    for (const el of itemInBasket) {
      if (el.id === identifier) return 'Remove';
    }
    return 'Add';
  }

  detailsContainer.innerHTML = '';

  const detailsContainerHTML = `
            <div class="bread-crumbs-container">
              <div class="bread-crumbs">
                <a class="home-link">Store</a>
                <span>></span>
                <p>${productsData.products[identifier - 1].category}</p>
                <span>></span>
                <p>${productsData.products[identifier - 1].brand}</p>
                <span>></span>
                <p>${productsData.products[identifier - 1].title}</p>
              </div>
            </div>
            <div class="details__card-container">
              <div class="details__card" data-identifier="${identifier}">
                <div class="card__info">
                    <div class="cards__image">
                      <div class="small__images">
                        ${
                          productsData.products[identifier - 1].images[0]
                            ? `<div class="small__img active" style="background-image: url('${
                              productsData.products[identifier - 1].images[0]
                              }');"></div>`
                            : ''
                        }
                        ${
                          productsData.products[identifier - 1].images[1]
                            ? `<div class="small__img" style="background-image: url('${
                              productsData.products[identifier - 1].images[1]
                              }');"></div>`
                            : ''
                        }
                        ${
                          productsData.products[identifier - 1].images[2]
                            ? `<div class="small__img" style="background-image: url('${
                              productsData.products[identifier - 1].images[2]
                              }');"></div>`
                            : ''
                        }
                        ${
                          productsData.products[identifier - 1].images[3]
                            ? `<div class="small__img" style="background-image: url('${
                              productsData.products[identifier - 1].images[3]
                              }');"></div>`
                            : ''
                        }
                      </div>
                      <div class="focus__img">
                        ${
                          productsData.products[identifier - 1].thumbnail
                            ? `<div class="small__img" style="background-image: url('${
                              productsData.products[identifier - 1].thumbnail
                              }');"></div>`
                            : ''
                        }
                      </div>
                    </div>

                    <div class="card__description">
                      <h3>${productsData.products[identifier - 1].title}</h3>
                      <div class="item-card__description">${
                        productsData.products[identifier - 1].description
                      }
                      </div>
                      <p><b>Category: </b> ${productsData.products[identifier - 1].category}</p>
                      <p><b>Brand: </b> ${productsData.products[identifier - 1].brand}</p>
                      <p><b>Old price: </b><span> ${Math.round(
                        (productsData.products[identifier - 1].price / 100) *
                          (100 + productsData.products[identifier - 1].discountPercentage),
                      )}$</span></p>
                      <p><b>Discount: </b>${
                        productsData.products[identifier - 1].discountPercentage
                      }%</p>
                      <p><b>New price: </b><span> ${
                        productsData.products[identifier - 1].price
                      }$</span></p>
                      <p><b>Stock: </b>${productsData.products[identifier - 1].stock}</p>
                      <p><b>Rating: </b>${productsData.products[identifier - 1].rating}</p>
                    </div>

                    <div class="card__buy">
                    <div class="btn__addBasket" data-action="${addDropCard()}">${addDropCard()}</div>
                    <button class="details__buy-btn">Buy now!</button>
                    </div>
                  </div>
              </div>
            </div>
`;

  detailsContainer.insertAdjacentHTML('beforeend', detailsContainerHTML);

  // const buyButton = document.querySelector('.details__buy-btn') as HTMLElement;
  // const buttonsDetails = document.querySelector('.card__buy') as HTMLElement;

  // buttonsDetails.addEventListener('click', (e: Event) => {
  //   buyFromDescriptions(e);
  // });
}
// cards__image
// (document.querySelector('.home-link') as HTMLElement).addEventListener(
//   'click',
//   () => {
//     // router.navigateTo('#');
//     window.location.href = new URL(
//       '#',
//       window.location.origin + window.location.pathname,
//     ).href;

//     const recoveryUrl =
//       localStorageUrl('get') ?? window.location.href.toString();
//     recoveryValue(recoveryUrl);
//   },
// );

detailsContainer.addEventListener('click', (e) => {
  if (
    e !== null &&
    e.target instanceof HTMLElement &&
    e.target.closest('.small__img')
  ) {
    document.querySelectorAll('.small__img').forEach((elem) => {
      elem.classList.remove('active');
    });
    e.target.closest('.small__img')?.classList.add('active');
    (document.querySelector('.focus__img') as HTMLElement).innerHTML =
      e.target.outerHTML;
    // focusImg.setAttribute('src', e.target.src);
  }
});

detailsContainer.addEventListener('click', (e: Event) => {
  if (
    (e.target! as HTMLElement).closest('.btn__addBasket') &&
    e.target instanceof HTMLElement &&
    e.target.dataset.action === 'Add'
  ) {
    const closestCard = e.target.closest('.details__card') as HTMLElement;
    const identifier = closestCard.dataset.identifier;
    itemInBasket.push(productsData.products[+identifier! - 1]);
    e.target.dataset.action = 'Remove';
    e.target.innerText = 'Remove';
    renderBasket();
  } else if (
    (e.target! as HTMLElement).closest('.btn__addBasket') &&
    e.target instanceof HTMLElement &&
    e.target.dataset.action === 'Remove'
  ) {
    const closestCard = e.target.closest('.details__card') as HTMLElement;
    const identifier = closestCard.dataset.identifier;
    itemInBasket.forEach((el: IProduct, index: number) => {
      if (el.id === +identifier!) {
        itemInBasket.splice(index, 1);
      }
    });
    e.target.dataset.action = 'Add';
    e.target.innerText = 'Add';
    renderBasket();
    renderDetails(+identifier!);
  } else if (
    (e.target! as HTMLElement).closest('.details__buy-btn') &&
    e.target instanceof HTMLElement
  ) {
    const closestCard = e.target.closest('.details__card') as HTMLElement;
    const identifier = closestCard.dataset.identifier;
    const itemProduct = productsData.products[+identifier! - 1];
    renderBuyForm({
      price: itemProduct.price,
      item: itemProduct.title,
      countProducts: 1,
    });
  } else if (
    (e.target! as HTMLElement).closest('.home-link') &&
    e.target instanceof HTMLElement
  ) {
    window.location.href = new URL(
      '#',
      window.location.origin + window.location.pathname,
    ).href;

    const recoveryUrl =
      localStorageUrl('get') ?? window.location.href.toString();
    recoveryValue(recoveryUrl);
  }
});

// function buyFromDescriptions(e: Event) {
//   // console.log('e :>> ', e.target);
//   // const
//   if ((e.target as HTMLElement).closest('.btn__addBasket')) {
//
//
//     // const itemCard = (e.target! as HTMLElement)
//     //   .previousElementSibling as HTMLElement;
//     // if product in basket render bye form
//     // if (itemCard!.dataset.action === 'Remove') {
//     //   const itemProduct = productsData.products[+!e.target.dataset.identifier];
//     //   console.log('object :>> ', productsData.products[+!e.target.dataset.identifier]);
//     //   renderBuyForm({
//     //     price: productsData.products[+!e.target.dataset.identifier].price,
//     //     item: productsData.products[+!e.target.dataset.identifier].title,
//     //     countProducts: 1,
//     //   });
//     // }
//     //if no one in basket push in array, change btn text and redirect
//     // else if (itemCard!.dataset.action === 'Add') {
//     //   const itemProduct = productsData.products[+!e.target.dataset.identifier];
//     //   itemInBasket.push(itemProduct);
//     //   e.target.dataset.action = 'Remove';
//     //   itemCard.innerText = 'Remove';
//     //   window.location.replace('#basket');
//     //   renderBasket();
//     //   console.log('object :>> ', productsData.products[+!e.target.dataset.identifier]);
//     //   // renderBuyForm({
//     //   //   price: productsData.products[+!e.target.dataset.identifier].price,
//     //   //   item: productsData.products[+!e.target.dataset.identifier].title,
//     //   //   countProducts: 1,
//     //   // });
//     // }
//   } else if ((e.target as HTMLElement).closest('.details__buy-btn')) {
//
//   }
// }
