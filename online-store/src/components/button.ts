import { CreateProductCard, productsData } from './cards/cards';
import { loadFilter } from './filter/filter';

export function Button() {
  const btnView = document.querySelector('.btn-switch-view') as HTMLElement;

  const btnContainer = document.querySelector('.btn-container') as HTMLElement;
  const catalogProducts = document.querySelector(
    '.catalog-products'
  ) as HTMLElement;

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

    const saveCategory: string[] = [];
    const saveBrand: string[] = [];
    const saveStock: string[] = ['0', '0'];
    const savePrice: string[] = ['0', '0'];

    if ((e.target! as HTMLElement).closest('.btn-reset')) {
      categoryCheck.forEach((elem) => {
        if (elem.checked === true) {
          saveCategory.push(elem.dataset.category!);
        }
        (elem as HTMLInputElement).checked = false;
      });

      brandCheck.forEach((elem) => {
        if (elem.checked === true) {
          saveBrand.push(elem.dataset.brand!);
        }
        (elem as HTMLInputElement).checked = false;
      });

      saveStock[0] = stockLowerSlider.value;
      saveStock[1] = stockUpperSlider.value;

      savePrice[0] = priceLowerSlider.value;
      savePrice[1] = priceUpperSlider.value;

      stockLowerValues.innerHTML = stockLowerSlider.value = stockLowerSlider.min;
      stockUpperValues.innerHTML = stockUpperSlider.value = stockUpperSlider.max;

      priceLowerValues.innerHTML = priceLowerSlider.value = priceLowerSlider.min;
      priceUpperValues.innerHTML = priceUpperSlider.value = priceUpperSlider.max;

      CreateProductCard(productsData.products);

      console.log('inputCheck :>> ', saveBrand, saveCategory);
      console.log('inputRange :>> ', saveStock, savePrice);
      console.log('reset');
    } else if ((e.target! as HTMLElement).closest('.btn-copy')) {
      console.log('copy');
    }
  });
}
