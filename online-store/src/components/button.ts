import { localStorageUrl } from './basket/localStorage';
import { CreateProductCard, productsData } from './cards/cards';
import { searchParams } from './routing/routing';

export function Button() {
  const btnView = document.querySelector('.btn-switch-view') as HTMLElement;

  const logo = document.querySelector('.logo') as HTMLElement;

  const btnContainer = document.querySelector('.btn-container') as HTMLElement;
  const catalogProducts = document.querySelector(
    '.catalog-products'
  ) as HTMLElement;
  const search = document.querySelector('.search') as HTMLInputElement;

  const sort = document.querySelector('.sort-input') as HTMLInputElement;

  btnView.addEventListener('click', () => {
    btnView.classList.toggle('active');
    if (
      (
        document.querySelector('.btn-switch-view') as HTMLElement
      ).classList.contains('active')
    ) {
      searchParams('set', 'view', 'active');
    } else searchParams('del', 'view');

    catalogProducts.classList.toggle('active');
  });

  function btnFilter(e: Event) {
    if (
      (e.target! as HTMLElement).closest('.btn-reset') ||
      (e.target! as HTMLElement).closest('.logo')
    ) {
      const containerItem = document.querySelectorAll(
        '.filters .container-item'
      ) as NodeListOf<HTMLElement>;
      const containerItemValue = document.querySelectorAll(
        '.filters .quantity'
      ) as NodeListOf<HTMLElement>;

      const categoryCheck = document.querySelectorAll(
        '.category-container .checkbox'
      ) as NodeListOf<HTMLInputElement>;
      const brandCheck = document.querySelectorAll(
        '.brand-container .checkbox'
      ) as NodeListOf<HTMLInputElement>;

      const stockLowerSlider = document.querySelector(
        `.stock-lower`
      ) as HTMLInputElement;
      const stockUpperSlider = document.querySelector(
        `.stock-upper`
      ) as HTMLInputElement;

      const priceLowerSlider = document.querySelector(
        `.price-lower`
      ) as HTMLInputElement;
      const priceUpperSlider = document.querySelector(
        `.price-upper`
      ) as HTMLInputElement;

      const stockLowerValues = document.querySelector(
        `.stock-from`
      ) as HTMLElement;
      const stockUpperValues = document.querySelector(
        `.stock-to`
      ) as HTMLElement;

      const priceLowerValues = document.querySelector(
        `.price-from`
      ) as HTMLElement;
      const priceUpperValues = document.querySelector(
        `.price-to`
      ) as HTMLElement;

      categoryCheck.forEach((elem) => {
        (elem as HTMLInputElement).checked = false;
      });

      brandCheck.forEach((elem) => {
        (elem as HTMLInputElement).checked = false;
      });

      stockLowerValues.innerHTML =
        stockLowerValues.dataset.from =
        stockLowerSlider.value =
          stockLowerSlider.min;
      stockUpperValues.innerHTML =
        stockUpperValues.dataset.to =
        stockUpperSlider.value =
          stockUpperSlider.max;

      priceLowerValues.innerHTML =
        priceLowerValues.dataset.from =
        priceLowerSlider.value =
          priceLowerSlider.min;
      priceUpperValues.innerHTML =
        priceLowerValues.dataset.to =
        priceUpperSlider.value =
          priceUpperSlider.max;

      search.value = '';

      sort.value = 'select';

      window.location.hash = '#';
      localStorageUrl('set');

      containerItem.forEach((elem, i) => {
        elem.classList.remove('inactive');
        if (containerItemValue[i]) {
          const x = (
            containerItemValue[i].children[0].parentNode as HTMLElement
          )?.innerText[2];
          (
            document.querySelectorAll(
              '.filters .quantity span'
            ) as NodeListOf<HTMLElement>
          )[i].innerHTML = x;
        }
      });

      CreateProductCard(productsData.products);
    } else if ((e.target! as HTMLElement).closest('.btn-copy')) {
      void navigator.clipboard
        .writeText(window.location.href)
        .then(() => {
          setTimeout(() => {
            btnContainer.children[1].innerHTML = '<p>Copied</p>';
            (btnContainer.children[1] as HTMLElement).style.background =
              '#008000';
          }, 100);
        })
        .then(() => {
          setTimeout(() => {
            btnContainer.children[1].innerHTML = '<p>Copy</p>';
            (btnContainer.children[1] as HTMLElement).style.background =
              '#800080';
          }, 600);
        });
    }
  }

  btnContainer.addEventListener('click', (e: Event) => {
    btnFilter(e);
  });

  logo!.addEventListener('click', (e: Event) => {
    btnFilter(e);
    CreateProductCard(productsData.products); // добавил сюда перерендер карточек при возврате из корзины на главную
  });
}
