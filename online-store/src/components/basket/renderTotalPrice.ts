import { itemInBasket, total } from '../../index';
import { IProduct } from '../types';
import { renderBuyForm } from './buyForm';

interface IpromoCode {
  text: string;
  discount: number;
}

const promoCodeArr: IpromoCode[] = [
  { text: 'hell', discount: 10 },
  { text: 'store', discount: 10 },
  { text: 'new', discount: 10 },
];

let activeCode: IpromoCode[] = [];

export function renderTotalPrice(): void {
  let priceTotal = 0;
  let priceDiscountTotal = 0;
  let totalCountEl = 0;

  const promoCodeBtn = (promoCode: IpromoCode, active: boolean) => `
  <div class="promo-code-item ${active ? 'active' : ''}" data-code="${
    promoCode.text
  }">
    <p><b>${promoCode.text}</b> = ${promoCode.discount}%</p>
    <div class="wrapper-btn">
      <div class="change-btn" data-action="${active ? 'drop' : 'add'}">${
        active ? 'Drop' : 'Add'
      }</div>
    </div>
  </div>
  `;

  const summaryInput = document.querySelector(
    '.summary__input',
  ) as HTMLInputElement;

  const summaryExampleText = document.querySelector(
    '.summary__example-text',
  ) as HTMLInputElement;

  const summaryTotal = document.querySelector('.summary__total') as HTMLElement;
  const summaryProducts = document.querySelector(
    '.summary__products',
  ) as HTMLElement;

  const applyCodesItems = document.querySelector(
    '.apply-code__items',
  ) as HTMLElement;
  // const applyCodesContainer = document.querySelector(
  //   '.apply-code-container',
  // ) as HTMLElement;

  const summaryDiscount = document.querySelector(
    '.summary__discount',
  ) as HTMLElement;

  summaryInput.setAttribute(
    'placeholder',
    'Code: ' + promoCodeArr.map((elem) => `${elem.text}`).join(', ') + '...',
  );
  summaryExampleText.innerHTML =
    '<b>Example code:</b><br>' +
    promoCodeArr.map((elem) => `${elem.text}`).join(', ') +
    '...';

  // (
  //   document.querySelector('.header-total') as HTMLElement
  // ).innerHTML = `${priceTotal}$`;

  itemInBasket.forEach((purchase: IProduct) => {
    priceTotal += purchase.count * purchase.price;
    totalCountEl += purchase.count;
    summaryProducts.innerHTML = `<b>Products:</b> ${totalCountEl}`;
    if (activeCode.length !== 0) {
      priceDiscountTotal = Math.round(
        (priceTotal / 100) *
          (100 - activeCode.reduce((a, b) => a + b.discount, 0)),
      );
      summaryTotal.innerHTML = `<b>Old total:</b> <span>${priceTotal}$</span>`;
      summaryDiscount.innerHTML = `<b>New total:</b> <span>${priceDiscountTotal}$</span>`;
    } else {
      summaryTotal.innerHTML = `<b>Total:</b> <span>${priceTotal}$</span>`;
      summaryTotal.classList.remove('active');
    }
  });

  summaryInput.addEventListener('input', (e: Event) => {
    findDiscount((e.target as HTMLInputElement).value);
  });

  applyCodesItems.addEventListener('click', (e: Event) => {
    addDiscount(e.target as HTMLInputElement);
  });

  function addDiscount(element: HTMLElement) {
    if (element.closest('.change-btn')) {
      if (
        (element.closest('.change-btn') as HTMLElement)!.dataset.action == 'add'
      ) {

        const code = promoCodeArr.find(
          (elem) =>
            elem.text ===
            (element.closest('.promo-code-item') as HTMLElement).dataset.code,
        );

        // if (code
        // && !activeCode.find((elem) => elem.text === code!.text)
        // ) {
        element.closest('.promo-code-item')?.classList.add('active');

        // element.closest('.change-btn')!.innerHTML = 'Drop';

        // element.closest('.change-btn')?.classList.replace('add', 'drop');

        if (!activeCode.find((elem) => elem.text === code!.text))
          activeCode.push(code!);
        summaryDiscount.classList.remove('hide');
        summaryTotal.classList.add('active');
        summaryTotal.innerHTML = `<b>Old total:</b> <span>${priceTotal}$</span>`;
        priceDiscountTotal = Math.round(
          (priceTotal / 100) *
            (100 - activeCode.reduce((a, b) => a + b.discount, 0)),
        );
        summaryDiscount.innerHTML = `<b>New total:</b> <span>${priceDiscountTotal}$</span>`;
        summaryInput.value = '';
        // (element.closest('.change-btn') as HTMLElement)!.dataset.action =
        //   (element.closest('.change-btn') as HTMLElement)!.dataset.action ===
        //   'add'
        //     ? 'drop'
        //     : 'add';
        // }

        applyCodesItems.innerHTML =
          activeCode.length !== 0
            ? activeCode.map((elem) => promoCodeBtn(elem, true)).join('')
            : '<p>Сodes not found<br>(ಥ﹏ಥ)</p>';
      } else if (
        (element.closest('.change-btn') as HTMLElement)!.dataset.action ==
        'drop'
      ) {
        element.closest('.promo-code-item')?.classList.remove('active');


        activeCode = activeCode.filter(
          (elem) =>
            elem.text !==
            (element.closest('.promo-code-item') as HTMLElement).dataset.code,
        );

        applyCodesItems.innerHTML =
          activeCode.length !== 0
            ? activeCode.map((elem) => promoCodeBtn(elem, true)).join('')
            : '<p>Сodes not found<br>(ಥ﹏ಥ)</p>';

        activeCode.length !== 0
          ? ((priceDiscountTotal = Math.round(
              (priceTotal / 100) *
                (100 -
                  activeCode.reduce((acc, item) => acc + item.discount, 0)),
            )),
            (summaryDiscount.innerHTML = `<b>New total:</b> <span>${priceDiscountTotal}$</span>`))
          : (summaryDiscount.classList.add('hide'),
            (summaryTotal.innerHTML = `<b>Total:</b> <span>${priceTotal}$</span>`),
            summaryTotal.classList.remove('active'));
      }
    }
  }

  function findDiscount(promoCode: string) {
    const code = promoCodeArr.find(
      (elem) =>
        elem.text === promoCode.trim().toLowerCase() &&
        !activeCode.find((item) => item.text === elem.text),
    );

    if (code) {
      applyCodesItems.innerHTML =
        promoCodeBtn(code, false) +
        activeCode.map((elem) => promoCodeBtn(elem, true)).join('');
    } else if (activeCode.length !== 0) {
      applyCodesItems.innerHTML = activeCode
        .map((elem) => promoCodeBtn(elem, true))
        .join('');
    } else {
      applyCodesItems.innerHTML = '<p>Сodes not found<br>(ಥ﹏ಥ)</p>';
    }
  }

  // function addDiscount1(): void {
  //   const discount1 = document.querySelector('.add-code1-btn') as HTMLElement;
  //   const discount2 = document.querySelector('.add-code2-btn') as HTMLElement;

  //   if (summaryInput.value.match(/^rs$/) || summaryInput.value.match(/^rs\s/)) {
  //     if (discount1.dataset.discount === 'on') {
  //       document.querySelector('.add-code-1')?.classList.remove('hide');
  //       document.querySelector('.add-code1-btn')?.classList.add('hide');
  //     } else {
  //       document.querySelector('.add-code-1')?.classList.remove('hide');
  //       document.querySelector('.add-code1-btn')?.classList.remove('hide');
  //     }

  //     document
  //       .querySelector('.summary')
  //       ?.addEventListener('click', (e: Event) => {
  //         if (
  //           //if click on 'RSS' code - add code
  //           e !== null &&
  //           e.target instanceof HTMLElement &&
  //           e.target.classList.contains('add-code1-btn')
  //         ) {
  //           discount1.dataset.discount = 'on';
  //           summaryTotal.style.textDecoration = 'line-through solid red';
  //           document
  //             .querySelector('.apply-code__title')
  //             ?.classList.remove('hide');
  //           document.querySelector('.drop-code-1')?.classList.remove('hide');
  //           summaryDiscount.classList.remove('hide');
  //           document.querySelector('.add-code1-btn')?.classList.add('hide');

  //           document.querySelector('.add-code-1')?.classList.remove('hide');
  //           (
  //             document.querySelector('.summary__input') as HTMLInputElement
  //           ).value = '';
  //         }
  //         if (
  //           //if click on 'RSS' code - drop code
  //           e !== null &&
  //           e.target instanceof HTMLElement &&
  //           e.target.classList.contains('drop-code1-btn')
  //         ) {
  //           discount1.dataset.discount = 'off';
  //           if (
  //             discount1.dataset.discount === 'off' &&
  //             discount2.dataset.discount === 'off'
  //           ) {
  //             summaryTotal.style.textDecoration = 'none';
  //             document
  //               .querySelector('.apply-code__title')
  //               ?.classList.add('hide');
  //             summaryDiscount.classList.add('hide');

  //             (
  //               document.querySelector('.summary__input') as HTMLInputElement
  //             ).value = '';
  //           }
  //           document.querySelector('.drop-code-1')?.classList.add('hide');
  //           document.querySelector('.add-code-1')?.classList.add('hide');
  //           document.querySelector('.add-code1-btn')?.classList.add('hide');
  //         }
  //         counDiscount();
  //       });
  //   } else {
  //     if (discount1.dataset.discount === 'on') {
  //       document.querySelector('.add-code-1')?.classList.remove('hide');
  //       document.querySelector('.add-code1-btn')?.classList.add('hide');
  //     }
  //     counDiscount();
  //   }
  //   //discount 2
  //   if (
  //     summaryInput.value.match(/^epm$/) ||
  //     summaryInput.value.match(/^epm\s/)
  //   ) {
  //     if (discount2.dataset.discount === 'on') {
  //       document.querySelector('.add-code-2')?.classList.remove('hide');
  //       document.querySelector('.add-code2-btn')?.classList.add('hide');
  //     } else {
  //       document.querySelector('.add-code-2')?.classList.remove('hide');
  //       document.querySelector('.add-code2-btn')?.classList.remove('hide');
  //     }

  //     document
  //       .querySelector('.summary')
  //       ?.addEventListener('click', (e: Event) => {
  //         if (
  //           //if click on 'EPM' code - add code
  //           e !== null &&
  //           e.target instanceof HTMLElement &&
  //           e.target.classList.contains('add-code2-btn')
  //         ) {
  //           discount2.dataset.discount = 'on';
  //           document.querySelector('.add-code2-btn')?.classList.add('hide');
  //           summaryTotal.style.textDecoration = 'line-through solid red';
  //           document
  //             .querySelector('.apply-code__title')
  //             ?.classList.remove('hide');
  //           document.querySelector('.drop-code-2')?.classList.remove('hide');
  //           summaryDiscount.classList.remove('hide');
  //           (
  //             document.querySelector('.summary__input') as HTMLInputElement
  //           ).value = '';
  //         }
  //         if (
  //           //if click on 'epm' - Drop code
  //           e !== null &&
  //           e.target instanceof HTMLElement &&
  //           e.target.classList.contains('drop-code2-btn')
  //         ) {
  //           discount2.dataset.discount = 'off';
  //           if (
  //             discount1.dataset.discount === 'off' &&
  //             discount2.dataset.discount === 'off'
  //           ) {
  //             summaryTotal.style.textDecoration = 'none';
  //             document
  //               .querySelector('.apply-code__title')
  //               ?.classList.add('hide');
  //             summaryDiscount.classList.add('hide');
  //             (
  //               document.querySelector('.summary__input') as HTMLInputElement
  //             ).value = '';
  //           }
  //           document.querySelector('.drop-code-2')?.classList.add('hide');
  //           document.querySelector('.add-code-2')?.classList.add('hide');
  //           document.querySelector('.add-code2-btn')?.classList.add('hide');
  //         }
  //         counDiscount();
  //       });
  //   } else {
  //     document.querySelector('.add-code-2')?.classList.add('hide');
  //     discount2.dataset.discount = 'off';
  //     counDiscount();
  //   }

  //   function counDiscount() {
  //     let disc = 1;
  //     if (discount1.dataset.discount === 'on') disc = 0.9;
  //     if (discount2.dataset.discount === 'on') disc = 0.9;
  //     if (
  //       discount1.dataset.discount === 'on' &&
  //       discount2.dataset.discount === 'on'
  //     )
  //       disc = 0.8;
  //     summaryDiscount.innerText = `Total: ${Math.floor(priceTotal * disc)}$`;
  //   }
  // }

  const buyButton = document.querySelector('.summary-btn') as HTMLElement;
  const summary = document.querySelector('.summary-container') as HTMLElement;
  buyButton.addEventListener('click', () => {
    if (window.innerWidth > 768) {
      renderBuyForm({
        price: activeCode.length !== 0 ? priceDiscountTotal : priceTotal,
        item: 'All Basket',
        countProducts: totalCountEl,
      });
    } else {
      const productList = document.querySelector(
        '.products__card-container',
      ) as HTMLElement;
      // productList.scrollHeight <=
      //   productList.scrollTop +
      //     productList.clientHeight +
      //     productList.children[productList.children.length - 1].clientHeight;
      // 
      if (!summary.classList.contains('active')) {
        // summary.classList.add('active');
        productList.scrollTop = productList.clientHeight
      } else {
        renderBuyForm({
          price: activeCode.length !== 0 ? priceDiscountTotal : priceTotal,
          item: 'All Basket',
          countProducts: totalCountEl,
        });
      }
    }
  });

  total.totalPrice = priceTotal;
  total.totalElements = totalCountEl;
}
