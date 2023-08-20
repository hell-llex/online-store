import { itemInBasket, total } from '../../index';
import { IProduct } from '../types';
import { renderBuyForm } from './buyForm';

// Interface for a promotional code
// Интерфейс для промо-кода
interface IpromoCode {
  text: string;
  discount: number;
}

// Array of predefined promo codes
// Массив заранее определенных промо-кодов
const promoCodeArr: IpromoCode[] = [
  { text: 'hell', discount: 10 },
  { text: 'store', discount: 10 },
  { text: 'new', discount: 10 },
];

// Array to hold active promo codes
// Массив для активных промо-кодов
export let activeCode: IpromoCode[] = [];

// HTML markup for the summary container
// HTML-разметка для контейнера с суммарной информацией
export const summaryConatiner = `
  <div class="summary">
    <h2 class="summary__title">Summary</h2>
    <p class="summary__products">Products: 0
    </p>
    <p class="summary__total">Total: 0
    </p>
    <p class="summary__discount hide">Total: 0</p>
    <input type="text" placeholder="Code..." class="summary__input" tabindex="1" required maxlength="20">
    <div class="apply-code-container">
      <p class="apply-code__title"><b>Applied codes:</b></p>
      <div class="apply-code__items">
        <p>Сodes not found<br>(ಥ﹏ಥ)</p>
      </div>
    </div>
    <div class="summary__example-text"></div>
    <div class="summary-btn">
      <div class="summary__buy-btn">BUY NOW!</div>
    </div>
  </div>
`;

// Function to render the total price, discounts, and promo code functionality
// Функция для отображения общей стоимости, скидок и функциональности промо-кодов
export function renderTotalPrice(): void {
  let priceTotal = 0;
  let priceDiscountTotal = 0;
  let totalCountEl = 0;
  const summaryContainer = document.querySelector(
    '.summary-container',
  ) as HTMLInputElement;

  // Function to generate promo code button HTML
  // Функция для генерации HTML-кнопки с промо-кодом
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

  const summaryInput = document.querySelectorAll(
    '.summary__input',
  ) as NodeListOf<HTMLInputElement>;

  const summaryExampleText = document.querySelectorAll(
    '.summary__example-text',
  ) as NodeListOf<HTMLInputElement>;

  const summaryTotal = document.querySelectorAll(
    '.summary__total',
  ) as NodeListOf<HTMLElement>;
  const summaryProducts = document.querySelectorAll(
    '.summary__products',
  ) as NodeListOf<HTMLElement>;

  const applyCodesItems = document.querySelectorAll(
    '.apply-code__items',
  ) as NodeListOf<HTMLElement>;

  const summaryDiscount = document.querySelectorAll(
    '.summary__discount',
  ) as NodeListOf<HTMLElement>;

  const productList = document.querySelector(
    '.products__card-container',
  ) as HTMLElement;

  summaryInput.forEach((elem) =>
    elem.setAttribute(
      'placeholder',
      'Code: ' + promoCodeArr.map((elem) => `${elem.text}`).join(', ') + '...',
    ),
  );

  summaryExampleText.forEach(
    (elem) =>
      (elem.innerHTML =
        '<b>Example code:</b><br>' +
        promoCodeArr.map((elem) => `${elem.text}`).join(', ') +
        '...'),
  );

  itemInBasket.forEach((purchase: IProduct) => {
    priceTotal += purchase.count * purchase.price;
    totalCountEl += purchase.count;
    summaryProducts.forEach(
      (elem) => (elem.innerHTML = `<b>Products:</b> ${totalCountEl}`),
    );
    if (activeCode.length !== 0) {
      priceDiscountTotal = Math.round(
        (priceTotal / 100) *
          (100 - activeCode.reduce((a, b) => a + b.discount, 0)),
      );
      summaryTotal.forEach(
        (elem) =>
          (elem.innerHTML = `<b>Old total:</b> <span>${priceTotal}$</span>`),
      );
      summaryDiscount.forEach(
        (elem) =>
          (elem.innerHTML = `<b>New total:</b> <span>${priceDiscountTotal}$</span>`),
      );
    } else {
      summaryTotal.forEach(
        (elem) =>
          (elem.innerHTML = `<b>Total:</b> <span>${priceTotal}$</span>`),
      );
      summaryTotal.forEach((elem) => elem.classList.remove('active'));
    }
  });

  summaryInput.forEach((elem) => {
    elem.addEventListener('input', (e: Event) => {
      findDiscount((e.target as HTMLInputElement).value);
      if (window.innerWidth <= 768) {
        summaryContainer.classList.add('active');
      }
    });
    if (window.innerWidth <= 768) {
      elem.addEventListener('focusin', () => {
        productList.scrollTop = productList.scrollHeight;
        productList.scrollTop = productList.scrollTop - 150;
        summaryContainer.style.display = 'none';
        summaryContainer.classList.add('active');
      });
      elem.addEventListener('focusout', () => {
        productList.scrollTop = productList.scrollHeight;
        summaryContainer.style.display = '';
        summaryContainer.classList.add('active');
      });
    } else {
    }
  });

  // Event listeners for applying and managing promo codes
  // Обработчики событий для применения и управления промо-кодами
  applyCodesItems.forEach((elem) =>
    elem.addEventListener('click', (e: Event) => {
      addDiscount(e.target as HTMLInputElement);
    }),
  );

  // Function to add or drop a promo code
  // Функция для добавления или удаления промо-кода
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

        element.closest('.promo-code-item')?.classList.add('active');

        if (!activeCode.find((elem) => elem.text === code!.text))
          activeCode.push(code!);
        summaryDiscount.forEach((elem) => elem.classList.remove('hide'));
        summaryTotal.forEach((elem) => elem.classList.add('active'));
        summaryTotal.forEach(
          (elem) =>
            (elem.innerHTML = `<b>Old total:</b> <span>${priceTotal}$</span>`),
        );
        priceDiscountTotal = Math.round(
          (priceTotal / 100) *
            (100 - activeCode.reduce((a, b) => a + b.discount, 0)),
        );
        summaryDiscount.forEach(
          (elem) =>
            (elem.innerHTML = `<b>New total:</b> <span>${priceDiscountTotal}$</span>`),
        );
        summaryInput.forEach((elem) => (elem.value = ''));

        applyCodesItems.forEach(
          (elem) =>
            (elem.innerHTML =
              activeCode.length !== 0
                ? activeCode.map((elem) => promoCodeBtn(elem, true)).join('')
                : '<p>Сodes not found<br>(ಥ﹏ಥ)</p>'),
        );
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

        applyCodesItems.forEach(
          (elem) =>
            (elem.innerHTML =
              activeCode.length !== 0
                ? activeCode.map((elem) => promoCodeBtn(elem, true)).join('')
                : '<p>Сodes not found<br>(ಥ﹏ಥ)</p>'),
        );

        activeCode.length !== 0
          ? ((priceDiscountTotal = Math.round(
              (priceTotal / 100) *
                (100 -
                  activeCode.reduce((acc, item) => acc + item.discount, 0)),
            )),
            summaryDiscount.forEach(
              (elem) =>
                (elem.innerHTML = `<b>New total:</b> <span>${priceDiscountTotal}$</span>`),
            ))
          : (summaryDiscount.forEach((elem) => elem.classList.add('hide')),
            summaryTotal.forEach(
              (elem) =>
                (elem.innerHTML = `<b>Total:</b> <span>${priceTotal}$</span>`),
            ),
            summaryTotal.forEach((elem) => elem.classList.remove('active')));
      }
    }
  }

  // Function to find and display discounts based on input promo code
  // Функция для поиска и отображения скидок на основе введенного промо-кода
  function findDiscount(promoCode: string) {
    const code = promoCodeArr.find(
      (elem) =>
        elem.text === promoCode.trim().toLowerCase() &&
        !activeCode.find((item) => item.text === elem.text),
    );

    if (code) {
      applyCodesItems.forEach(
        (elem) =>
          (elem.innerHTML =
            promoCodeBtn(code, false) +
            activeCode.map((elem) => promoCodeBtn(elem, true)).join('')),
      );
    } else if (activeCode.length !== 0) {
      applyCodesItems.forEach(
        (elem) =>
          (elem.innerHTML = activeCode
            .map((elem) => promoCodeBtn(elem, true))
            .join('')),
      );
    } else {
      applyCodesItems.forEach(
        (elem) => (elem.innerHTML = '<p>Сodes not found<br>(ಥ﹏ಥ)</p>'),
      );
    }
  }

  const buyButtonComputers = document.querySelector(
    '.summary-btn',
  ) as HTMLElement;
  const buyButtonMobile = document.querySelector(
    '.products .summary-btn',
  ) as HTMLElement;

  // Event listener for the "BUY NOW!" button on computers
  // Обработчик событий для кнопки "BUY NOW!" на компьютерах
  buyButtonComputers.addEventListener('click', () => {
    if (window.innerWidth > 768) {
      renderBuyForm({
        price: activeCode.length !== 0 ? priceDiscountTotal : priceTotal,
        item: 'All Basket',
        countProducts: totalCountEl,
      });
    } else {
      productList.scrollTop = productList.scrollHeight;
    }
  });

  // Event listener for the "BUY NOW!" button on mobile devices
  // Обработчик событий для кнопки "BUY NOW!" на мобильных устройствах
  if (buyButtonMobile)
    buyButtonMobile.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        renderBuyForm({
          price: activeCode.length !== 0 ? priceDiscountTotal : priceTotal,
          item: 'All Basket',
          countProducts: totalCountEl,
        });
      }
    });

  // Update total values in the "total" object
  // Обновление значений общей стоимости и количества продуктов в объекте "total"
  total.totalPrice = priceTotal;
  total.totalElements = totalCountEl;
}
