import { localStorageUrl } from './basket/localStorage';
import { CreateProductCard, productsData } from './cards/cards';
import { searchParams } from './routing/routing';

export class Button {
  btnView = document.querySelectorAll(
    '.btn-switch-view',
  ) as NodeListOf<HTMLElement>;
  btnContainer = document.querySelector('.btn-container') as HTMLElement;
  catalogProducts = document.querySelector('.catalog-products') as HTMLElement;
  search = document.querySelector('.search') as HTMLInputElement;
  searchBtn = document.querySelector('.search-icon') as HTMLInputElement;
  searchContainer = document.querySelector(
    '.search-container',
  ) as HTMLInputElement;
  sort = document.querySelectorAll(
    '.sort-input',
  ) as NodeListOf<HTMLSelectElement>;
  filtersBtn = document.querySelector('.filters-btn') as HTMLInputElement;

  btnFilter(e: Event): void {
    if (
      (e.target! as HTMLElement).closest('.btn-reset') ||
      (e.target! as HTMLElement).closest('.logo')
    ) {
      const containerItem = document.querySelectorAll(
        '.filters .container-item',
      ) as NodeListOf<HTMLElement>;
      const containerItemValue = document.querySelectorAll(
        '.filters .quantity',
      ) as NodeListOf<HTMLElement>;

      const categoryCheck = document.querySelectorAll(
        '.category-container .checkbox',
      ) as NodeListOf<HTMLInputElement>;
      const brandCheck = document.querySelectorAll(
        '.brand-container .checkbox',
      ) as NodeListOf<HTMLInputElement>;

      const stockLowerSlider = document.querySelector(
        `.stock-lower`,
      ) as HTMLInputElement;
      const stockUpperSlider = document.querySelector(
        `.stock-upper`,
      ) as HTMLInputElement;

      const priceLowerSlider = document.querySelector(
        `.price-lower`,
      ) as HTMLInputElement;
      const priceUpperSlider = document.querySelector(
        `.price-upper`,
      ) as HTMLInputElement;

      const stockLowerValues = document.querySelector(
        `.stock-from`,
      ) as HTMLElement;
      const stockUpperValues = document.querySelector(
        `.stock-to`,
      ) as HTMLElement;

      const priceLowerValues = document.querySelector(
        `.price-from`,
      ) as HTMLElement;
      const priceUpperValues = document.querySelector(
        `.price-to`,
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

      this.search.value = '';

      this.sort[0].value = 'select';
      this.sort[1].value = 'select';

      window.location.hash = '#';
      localStorageUrl('set') as string;

      this.btnView[0].classList.remove('active');
      this.btnView[1].classList.remove('active');
      this.catalogProducts.classList.remove('active');

      containerItem.forEach((elem, i) => {
        elem.classList.remove('inactive');
        if (containerItemValue[i]) {
          const x = (
            containerItemValue[i].children[0].parentNode as HTMLElement
          )?.innerText[2];
          (
            document.querySelectorAll(
              '.filters .quantity span',
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
            this.btnContainer.children[1].innerHTML = `<p>Copying...</p>`;
            (this.btnContainer.children[1] as HTMLElement).style.background =
              '#000000';
            (this.btnContainer.children[1] as HTMLElement).style.color =
              '#ffffff';
          }, 100);
        })
        .then(() => {
          setTimeout(() => {
            this.btnContainer.children[1].innerHTML = `<p>Copy</p>`;
            (this.btnContainer.children[1] as HTMLElement).style.background =
              '';
            (this.btnContainer.children[1] as HTMLElement).style.color = '';
          }, 600);
        });
    }
  }

  listeners(): void {
    this.btnView.forEach((elem) => {
      elem.addEventListener('click', () => {
        this.btnView[0].classList.toggle('active');
        this.btnView[1].classList.toggle('active');
        if (
          this.btnView[0].classList.contains('active') &&
          this.btnView[1].classList.contains('active')
        ) {
          searchParams('set', 'view', 'active');
        } else searchParams('del', 'view');

        this.catalogProducts.classList.toggle('active');
      });
    });

    this.btnContainer.addEventListener('click', (e: Event) => {
      this.btnFilter(e);
    });
  }
}
