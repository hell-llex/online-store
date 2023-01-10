import { CreateProductCard, productsData } from './cards/cards';
import { loadFilter } from './filter/filter';
import { searchParams } from './routing/routing';
const saveCategory: string[] = [];
const saveBrand: string[] = [];
const saveStock: string[] = ['0', '0'];
const savePrice: string[] = ['0', '0'];
export function Button() {
  const btnView = document.querySelector('.btn-switch-view') as HTMLElement;

  const btnContainer = document.querySelector('.btn-container') as HTMLElement;
  const catalogProducts = document.querySelector(
    '.catalog-products'
  ) as HTMLElement;
  const search = document.querySelector('.search') as HTMLInputElement;

  btnView.addEventListener('click', () => {
    btnView.classList.toggle('active');
    catalogProducts.classList.toggle('active');
  });

  btnContainer.addEventListener('click', (e: Event) => {
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
    const stockUpperValues = document.querySelector(`.stock-to`) as HTMLElement;

    const priceLowerValues = document.querySelector(
      `.stock-from`
    ) as HTMLElement;
    const priceUpperValues = document.querySelector(`.stock-to`) as HTMLElement;

    if ((e.target! as HTMLElement).closest('.btn-reset')) {
      categoryCheck.forEach((elem) => {
        // if (elem.checked === true) {
        //   saveCategory.push(elem.dataset.category!);
        // }
        (elem as HTMLInputElement).checked = false;
      });

      brandCheck.forEach((elem) => {
        // if (elem.checked === true) {
        //   saveBrand.push(elem.dataset.brand!);
        // }
        (elem as HTMLInputElement).checked = false;
      });

      // saveStock[0] = stockLowerSlider.value;
      // saveStock[1] = stockUpperSlider.value;

      // savePrice[0] = priceLowerSlider.value;
      // savePrice[1] = priceUpperSlider.value;

      stockLowerValues.innerHTML = stockLowerSlider.value =
        stockLowerSlider.min;
      stockUpperValues.innerHTML = stockUpperSlider.value =
        stockUpperSlider.max;

      priceLowerValues.innerHTML = priceLowerSlider.value =
        priceLowerSlider.min;
      priceUpperValues.innerHTML = priceUpperSlider.value =
        priceUpperSlider.max;

      search.value = '';

      CreateProductCard(productsData.products);

      // console.log('inputCheck :>> ', saveBrand, saveCategory);
      // console.log('inputRange :>> ', saveStock, savePrice);
      console.log('reset');
    } else if ((e.target! as HTMLElement).closest('.btn-copy')) {
      void navigator.clipboard.writeText(window.location.href);
      console.log('copy');
    }
  });

  function saveParams(e: Event) {
    const checkCategory = document.querySelectorAll(
      '.category-container .checkbox'
    ) as NodeListOf<HTMLInputElement>;
    const checkBrand = document.querySelectorAll(
      '.brand-container .checkbox'
    ) as NodeListOf<HTMLInputElement>;

    // const stockLowerSlider = document.querySelector(
    //   `.stock-lower`
    // ) as HTMLInputElement;
    // const stockUpperSlider = document.querySelector(
    //   `.stock-upper`
    // ) as HTMLInputElement;

    // const priceLowerSlider = document.querySelector(
    //   `.price-lower`
    // ) as HTMLInputElement;
    // const priceUpperSlider = document.querySelector(
    //   `.price-upper`
    // ) as HTMLInputElement;
    // const stockLowerValues = document.querySelector(
    //   `.stock-from`
    // ) as HTMLElement;
    // const stockUpperValues = document.querySelector(`.stock-to`) as HTMLElement;

    // const priceLowerValues = document.querySelector(
    //   `.stock-from`
    // ) as HTMLElement;
    // const priceUpperValues = document.querySelector(`.stock-to`) as HTMLElement;

    if (
      (e.target! as HTMLInputElement).closest(
        '.category-container .checkbox'
      ) !== null
    ) {
      checkCategory.forEach((elem) => {
        if (
          !saveCategory.includes(elem.dataset.category!) &&
          elem.checked === true
        ) {
          saveCategory.push(elem.dataset.category!);
        } else if (
          saveCategory.includes(elem.dataset.category!) &&
          elem.checked === false
        ) {
          saveCategory.splice(saveCategory.indexOf(elem.dataset.category!), 1);
        }
      });
    }
    if (
      (e.target! as HTMLElement).closest('.brand-container .checkbox') !== null
    ) {
      checkBrand.forEach((elem) => {
        if (!saveBrand.includes(elem.dataset.brand!) && elem.checked === true) {
          saveBrand.push(elem.dataset.brand!);
        } else if (
          saveBrand.includes(elem.dataset.brand!) &&
          elem.checked === false
        ) {
          saveBrand.splice(saveBrand.indexOf(elem.dataset.brand!), 1);
        }
      });
    }

    // saveStock[0] = stockLowerSlider.value;
    // saveStock[1] = stockUpperSlider.value;

    // savePrice[0] = priceLowerSlider.value;
    // savePrice[1] = priceUpperSlider.value;

    if (
      (
        document.querySelectorAll(
          '.category-container .checkbox:checked'
        ) as NodeListOf<HTMLInputElement>
      ).length === 0
    ) {
      // saveCategory.splice(0, 1);
      searchParams('del', 'category');
    } else if (saveCategory.length !== 0) {
      searchParams('set', 'category', saveCategory);
    }
    if (
      (
        document.querySelectorAll(
          '.brand-container .checkbox:checked'
        ) as NodeListOf<HTMLInputElement>
      ).length === 0
    ) {
      searchParams('del', 'brand');
    } else if (saveBrand.length !== 0) {
      searchParams('set', 'brand', saveBrand);
    }
  }

  document.querySelector('.filters-list')?.addEventListener('click', (e) => {
    saveParams(e);
  });
}
