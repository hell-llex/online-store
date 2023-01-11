import { itemInBasket } from '../../index';
import { productsArrayI } from '../types';
import { renderBuyForm } from './buyForm';
const summary = document.querySelector('.summary') as HTMLElement;

export function renderTotalPrice(): number {
  summary.innerHTML = '';
  let priceTotal = 0;
  let totalCountEl = 0;

  // iterate array and get count and price for the total price
  itemInBasket.forEach((el: productsArrayI) => {
    priceTotal += el.count * el.price;
    totalCountEl += el.count;
  });

  const summaryHTML = `
    <h2 class="summary__title">Summary</h2>
    <div class="summary__products">Products: ${totalCountEl}
    </div>
    <div class="summary__total">Total: ${priceTotal} €
    </div>
    <div class="summary__discount hide">Total: ${Math.floor(priceTotal)} €</div>

    <div class="apply-code-container">

    <div class="apply-code__title hide">Applied codes</div>

    <div class="drop-code-1 hide">RSS - 10%
    <button class="drop-code1-btn">Drop</button>
    </div>

    <div class="drop-code-2 hide">EPAM - 10%
    <button class="drop-code2-btn">Drop</button>
    </div>
    </div>

    <div class="summary__promo">
    <form class="summary__form">
    <input type="text" placeholder="Enter promo code" class="summary__input" tabindex="1" value="" required>
    </form>
    </div>

    <div class="add-code-1 hide">code RSS - 10%
    <button class="add-code1-btn" data-discount>Add</button>
    </div>
    <div class="add-code-2 hide">code EPAM - 10%
    <button class="add-code2-btn" data-discount'>Add</button>
    </div>

    <div class="summary__input-text">Промокод 'rs', 'epm'</div>
    </div>
    <button class="summary__buy-btn">BUY NOW!</button>
          `;

  summary.insertAdjacentHTML('afterbegin', summaryHTML);
  const summaryInput = document.querySelector(
    'input[type="text"]'
  ) as HTMLInputElement;
  const summaryForm = document.querySelector('.summary__form') as HTMLElement;
  const summaryTotal = document.querySelector('.summary__total') as HTMLElement;
  const summaryDiscount = document.querySelector(
    '.summary__discount'
  ) as HTMLElement;

  summaryForm.addEventListener('input', () => {
    addDiscount();
  });

  summaryForm.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  function addDiscount(): void {
    const discount1 = document.querySelector('.add-code1-btn') as HTMLElement;
    const discount2 = document.querySelector('.add-code2-btn') as HTMLElement;

    if (summaryInput.value.match(/^rs$/) || summaryInput.value.match(/^rs\s/)) {
      if (discount1.dataset.discount === 'on') {
        document.querySelector('.add-code-1')?.classList.remove('hide');
        document.querySelector('.add-code1-btn')?.classList.add('hide');
      } else {
        document.querySelector('.add-code-1')?.classList.remove('hide');
        document.querySelector('.add-code1-btn')?.classList.remove('hide');
      }

      document
        .querySelector('.summary')
        ?.addEventListener('click', (e: Event) => {
          if (
            //если клик по RSS коду - Add код
            e !== null &&
            e.target instanceof HTMLElement &&
            e.target.classList.contains('add-code1-btn')
          ) {
            discount1.dataset.discount = 'on';
            summaryTotal.style.textDecoration = 'line-through solid red';
            document
              .querySelector('.apply-code__title')
              ?.classList.remove('hide');
            document.querySelector('.drop-code-1')?.classList.remove('hide');
            summaryDiscount.classList.remove('hide');
            document.querySelector('.add-code1-btn')?.classList.add('hide');

            document.querySelector('.add-code-1')?.classList.remove('hide');
            (
              document.querySelector('.summary__input') as HTMLInputElement
            ).value = '';
          }
          if (
            //клик по RSS - Drop code
            e !== null &&
            e.target instanceof HTMLElement &&
            e.target.classList.contains('drop-code1-btn')
          ) {
            discount1.dataset.discount = 'off';
            if (
              discount1.dataset.discount === 'off' &&
              discount2.dataset.discount === 'off'
            ) {
              summaryTotal.style.textDecoration = 'none';
              document
                .querySelector('.apply-code__title')
                ?.classList.add('hide');
              summaryDiscount.classList.add('hide');

              (
                document.querySelector('.summary__input') as HTMLInputElement
              ).value = '';
            }
            document.querySelector('.drop-code-1')?.classList.add('hide');
            document.querySelector('.add-code-1')?.classList.add('hide');
            document.querySelector('.add-code1-btn')?.classList.add('hide');
          }
          counDiscount();
        });
    } else {
      if (discount1.dataset.discount === 'on') {
        document.querySelector('.add-code-1')?.classList.remove('hide');
        document.querySelector('.add-code1-btn')?.classList.add('hide');
      }
      counDiscount();
    }
    //discount 2
    if (
      summaryInput.value.match(/^epm$/) ||
      summaryInput.value.match(/^epm\s/)
    ) {
      if (discount2.dataset.discount === 'on') {
        document.querySelector('.add-code-2')?.classList.remove('hide');
        document.querySelector('.add-code2-btn')?.classList.add('hide');
      } else {
        document.querySelector('.add-code-2')?.classList.remove('hide');
        document.querySelector('.add-code2-btn')?.classList.remove('hide');
      }

      document
        .querySelector('.summary')
        ?.addEventListener('click', (e: Event) => {
          if (
            //если клик по EPM коду - Add код
            e !== null &&
            e.target instanceof HTMLElement &&
            e.target.classList.contains('add-code2-btn')
          ) {
            discount2.dataset.discount = 'on';
            document.querySelector('.add-code2-btn')?.classList.add('hide');
            summaryTotal.style.textDecoration = 'line-through solid red';
            document
              .querySelector('.apply-code__title')
              ?.classList.remove('hide');
            document.querySelector('.drop-code-2')?.classList.remove('hide');
            summaryDiscount.classList.remove('hide');
            (
              document.querySelector('.summary__input') as HTMLInputElement
            ).value = '';
          }
          if (
            //клик по EPM - Drop code
            e !== null &&
            e.target instanceof HTMLElement &&
            e.target.classList.contains('drop-code2-btn')
          ) {
            discount2.dataset.discount = 'off';
            if (
              discount1.dataset.discount === 'off' &&
              discount2.dataset.discount === 'off'
            ) {
              summaryTotal.style.textDecoration = 'none';
              document
                .querySelector('.apply-code__title')
                ?.classList.add('hide');
              summaryDiscount.classList.add('hide');
              (
                document.querySelector('.summary__input') as HTMLInputElement
              ).value = '';
            }
            document.querySelector('.drop-code-2')?.classList.add('hide');
            document.querySelector('.add-code-2')?.classList.add('hide');
            document.querySelector('.add-code2-btn')?.classList.add('hide');
          }
          counDiscount();
        });
    } else {
      document.querySelector('.add-code-2')?.classList.add('hide');
      discount2.dataset.discount = 'off';
      counDiscount();
    }

    function counDiscount() {
      let disc = 1;
      if (discount1.dataset.discount === 'on') disc = 0.9;
      if (discount2.dataset.discount === 'on') disc = 0.9;
      if (
        discount1.dataset.discount === 'on' &&
        discount2.dataset.discount === 'on'
      )
        disc = 0.8;
      summaryDiscount.innerText = `Total: ${Math.floor(priceTotal * disc)} €`;
    }
  }

  const buyButton = document.querySelector('.summary__buy-btn') as HTMLElement;
  buyButton.addEventListener('click', renderBuyForm);
  return priceTotal;
}
