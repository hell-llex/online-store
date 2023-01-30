import './filter.scss';
import { IFilterSelector, IProduct, ISliderSelector } from '../types';
import { productsData, CreateProductCard } from '../cards/cards';
import { SortProductCard } from '../sort/sort';
import { slider } from './slider/slider';
import { searchProductCard } from '../search/search';
import { searchParams } from '../routing/routing';

const filterCategory: IFilterSelector = { arrFilter: [], countFilter: [] }; // категории по всему списку товаров
const filterBrand: IFilterSelector = { arrFilter: [], countFilter: [] }; // брэнды по всему списку товаров
const filterStock: ISliderSelector<number> = { min: 0, max: 1 }; // минимальное и максимальное кол-во товара по всему списку товаров
const filterPrice: ISliderSelector<number> = { min: 0, max: 1 }; // минимальная и максимальная стоимость товара по всему списку товаров

function CreateFilter(
  setting: IFilterSelector | ISliderSelector<number>,
  location: string
): void {
  // значения строки category, brand, stock, price
  const dataDom: string[] = [];
  if (location === 'category' || location === 'brand') {
    (setting as IFilterSelector).arrFilter.forEach((elem, i) => {
      dataDom.push(`<div class="container-item">
        <label class="item-label"><input type="checkbox" name="${elem}" class="checkbox" data-${location}="${elem}"
        data-count="${
          (setting as IFilterSelector).countFilter[i]
        }">${elem}</label><p class="quantity">
        <span>${(setting as IFilterSelector).countFilter[i]}</span>/${
        (setting as IFilterSelector).countFilter[i]
      }</p></div>`);
    });
  } else if (location === 'stock' || location === 'price') {
    const value = setting as ISliderSelector<number>;
    dataDom.push(`<div class="value-container">
      <p class="${location}-from _from" data-from="${value.min}">${value.min}</p>
      <p class="${location}-to _to" data-to="${value.max}">${value.max}</p>
    </div>
    <div class="multi-range">
      <input type="range" min="${value.min}" max="${value.max}" value="${value.min}" class="${location}-lower _lower">
      <input type="range" min="${value.min}" max="${value.max}" value="${value.max}" class="${location}-upper _upper">
    </div>`);
  }

  (document.querySelector(`.${location}-container`) as HTMLElement).innerHTML =
    dataDom.join(''); // создание фильтров
}

export function loadFilter(arrProd: IProduct[]): void {
  const stock: number[] = [];
  const price: number[] = [];

  arrProd.forEach((el) => {
    if (!filterCategory.arrFilter.includes(el.category)) {
      filterCategory.arrFilter.push(el.category);
      filterCategory.countFilter.push(1);
    } else {
      filterCategory.countFilter[
        filterCategory.arrFilter.indexOf(el.category)
      ] += 1;
    }

    if (!filterBrand.arrFilter.includes(el.brand)) {
      filterBrand.arrFilter.push(el.brand);
      filterBrand.countFilter.push(1);
    } else {
      filterBrand.countFilter[filterBrand.arrFilter.indexOf(el.brand)] += 1;
    }

    stock.push(el.stock);
    price.push(el.price);
  });

  filterStock.min = Math.min(...stock); // получение минимального и максимального значения колличества
  filterStock.max = Math.max(...stock); // получение минимального и максимального значения колличества
  filterPrice.min = Math.min(...price); // получение минимального и максимального значения цены
  filterPrice.max = Math.max(...price); // получение минимального и максимального значения цены

  CreateFilter(filterCategory, 'category'); // вызов функции для заполнения фильтрации
  CreateFilter(filterBrand, 'brand'); // вызов функции для заполнения фильтрации
  CreateFilter(filterStock, 'stock'); // вызов функции для заполнения фильтрации
  CreateFilter(filterPrice, 'price'); // вызов функции для заполнения фильтрации
  slider(); // вызов функции для использования слайдера
  changeFilter(); // вызов функции для использования всей фильтрации
}

export function countView(arrProd: IProduct[] | string): void {
  // console.log('arrProd :>> ', arrProd);
  const containerItem = document.querySelectorAll(
    '.filters .container-item'
  ) as NodeListOf<HTMLElement>;
  const containerItemValue = document.querySelectorAll(
    '.filters .quantity span'
  ) as NodeListOf<HTMLElement>;
  const containerCheckbox = document.querySelectorAll(
    '.filters .checkbox'
  ) as NodeListOf<HTMLInputElement>;

  const stockLowerValues = document.querySelector(`.stock-from`) as HTMLElement;
  const stockUpperValues = document.querySelector(`.stock-to`) as HTMLElement;

  const priceLowerValues = document.querySelector(`.price-from`) as HTMLElement;
  const priceUpperValues = document.querySelector(`.price-to`) as HTMLElement;

  const viewCategory: string[] = [];
  const viewBrand: string[] = [];
  const viewStock: number[] = [];
  const viewPrice: number[] = [];

  if (typeof arrProd !== 'string') {
    (arrProd as IProduct[]).forEach((elem) => {
      viewCategory.push(elem.category);
      viewBrand.push(elem.brand);
      viewStock.push(elem.stock);
      viewPrice.push(elem.price);
    });

    viewStock.sort((a, b) => a - b);
    viewPrice.sort((a, b) => a - b);

    containerCheckbox.forEach((elem, i) => {
      if ((elem as HTMLInputElement).dataset.category) {
        const countCategory = viewCategory.filter(
          (item) => item === (elem as HTMLInputElement).dataset.category
        );
        if (countCategory.length !== 0) {
          containerItem[i].classList.remove('inactive');
        } else {
          containerItem[i].classList.add('inactive');
        }
        if (containerItemValue[i])
          containerItemValue[i].innerText = `${countCategory.length}`;
      }
      if ((elem as HTMLInputElement).dataset.brand) {
        const countBrand = viewBrand.filter(
          (item) => item === (elem as HTMLInputElement).dataset.brand
        );
        if (countBrand.length !== 0) {
          containerItem[i].classList.remove('inactive');
        } else {
          containerItem[i].classList.add('inactive');
        }
        if (containerItemValue[i])
          containerItemValue[i].innerText = `${countBrand.length}`;
      }
    });

    if (
      stockLowerValues &&
      stockUpperValues &&
      priceLowerValues &&
      priceLowerValues
    ) {
      stockLowerValues.innerHTML =
        stockLowerValues.dataset.from = `${viewStock[0]}`;
      stockUpperValues.innerHTML = stockUpperValues.dataset.to = `${
        viewStock[viewStock.length - 1]
      }`;
      priceLowerValues.innerHTML =
        priceLowerValues.dataset.from = `${viewPrice[0]}`;
      priceUpperValues.innerHTML = priceLowerValues.dataset.to = `${
        viewPrice[viewStock.length - 1]
      }`;
    }
  } else {
    if (
      (document.querySelector('.found') as HTMLElement).dataset.found === '0'
    ) {
      containerItem.forEach((elem, i) => {
        elem.classList.add('inactive');
        if (containerItemValue[i]) containerItemValue[i].innerText = `0`;
      });
    }
  }
}

export let resultData: IProduct[] = []; // массив с данным для сортировки во время фильтрации

export function changeFilter(trigger?: string): void {
  function filtering(e?: Event): void {
    let productFilter: IProduct[] = productsData.products.slice();
    if (
      ((document.querySelector('.search') as HTMLInputElement).value.length ===
        0 &&
        (document.querySelector('.category-container') as HTMLElement).dataset
          .active === 'false') ||
      (document.querySelector('.brand-container') as HTMLElement).dataset
        .active === 'false' ||
      (document.querySelector('.stock-container') as HTMLElement).dataset
        .active === 'false' ||
      (document.querySelector('.price-container') as HTMLElement).dataset
        .active === 'false'
    ) {
      productFilter = searchProductCard('now', productsData.products)!;
    }
    const checkboxCategory: string[] = []; // массив с выбранными фильтрами
    const checkboxBrand: string[] = []; // массив с выбранными фильтрами
    let result: IProduct[] = [];

    if (
      document.querySelectorAll('.category-container .checkbox:checked')
        .length !== 0
    ) {
      (
        document.querySelector('.category-container') as HTMLElement
      ).dataset.active = 'true';
    } else
      (
        document.querySelector('.category-container') as HTMLElement
      ).dataset.active = 'false';
    if (
      document.querySelectorAll('.brand-container .checkbox:checked').length !==
      0
    ) {
      (
        document.querySelector('.brand-container') as HTMLElement
      ).dataset.active = 'true';
    } else
      (
        document.querySelector('.brand-container') as HTMLElement
      ).dataset.active = 'false';

    if (
      trigger ||
      (e!.target! as HTMLElement).closest('.category-container .checkbox') !=
        null ||
      (e!.target! as HTMLElement).closest('.brand-container .checkbox') != null
    ) {
      document
        .querySelectorAll('.category-container .checkbox:checked')
        .forEach((elem) => {
          checkboxCategory.push((elem as HTMLInputElement).dataset.category!);
        });

      document
        .querySelectorAll('.brand-container .checkbox:checked')
        .forEach((elem) => {
          checkboxBrand.push((elem as HTMLInputElement).dataset.brand!);
        });

      const stockRange = document.querySelector(
        '.stock-container'
      ) as HTMLElement;
      const priceRange = document.querySelector(
        '.price-container'
      ) as HTMLElement;

      // =============================================блок проверок по массиву=============================================================

      result = productFilter.filter(
        (item) =>
          checkboxCategory.includes(item.category) ||
          checkboxBrand.includes(item.brand)
      );

      if (
        stockRange.dataset.active === 'true' ||
        priceRange.dataset.active === 'true'
      ) {
        result = productFilter.filter((item) => {
          return (
            (checkboxCategory.includes(item.category) ||
              checkboxBrand.includes(item.brand)) &&
            item.stock >= valuesFrom[0] &&
            item.stock <= valuesTo[0] &&
            item.price >= valuesFrom[1] &&
            item.price <= valuesTo[1]
          );
        });
      }
      if (
        checkboxBrand.length !== 0 &&
        checkboxCategory.length !== 0 &&
        (stockRange.dataset.active === 'false' ||
          priceRange.dataset.active === 'false')
      ) {
        result = productFilter.filter(
          (item) =>
            checkboxCategory.includes(item.category) &&
            checkboxBrand.includes(item.brand)
        );
      }

      if (
        checkboxBrand.length !== 0 &&
        checkboxCategory.length !== 0 &&
        (stockRange.dataset.active === 'true' ||
          priceRange.dataset.active === 'true')
      ) {
        result = productFilter.filter((item) => {
          return (
            checkboxCategory.includes(item.category) &&
            checkboxBrand.includes(item.brand) &&
            item.stock >= valuesFrom[0] &&
            item.stock <= valuesTo[0] &&
            item.price >= valuesFrom[1] &&
            item.price <= valuesTo[1]
          );
        });
      }

      if (
        checkboxBrand.length === 0 &&
        checkboxCategory.length === 0 &&
        stockRange.dataset.active === 'false' &&
        priceRange.dataset.active === 'false'
      ) {
        result = productFilter.slice();
      }

      if (
        checkboxBrand.length === 0 &&
        checkboxCategory.length === 0 &&
        (stockRange.dataset.active === 'true' ||
          priceRange.dataset.active === 'true')
      ) {
        result = productFilter.filter((item) => {
          return (
            item.stock >= valuesFrom[0] &&
            item.stock <= valuesTo[0] &&
            item.price >= valuesFrom[1] &&
            item.price <= valuesTo[1]
          );
        });
      }
      // =======================================================================================================================================
      checkboxCategory.length !== 0
        ? searchParams('set', 'category', checkboxCategory)
        : searchParams('del', 'category');
      checkboxBrand.length !== 0
        ? searchParams('set', 'brand', checkboxBrand)
        : searchParams('del', 'brand');
      // =======================================================================================================================================
      resultData = result.slice();

      result = SortProductCard('now', result)!;

      result.length === 0
        ? CreateProductCard('not-found')
        : CreateProductCard(result);
      countView(result);
    }
  }

  const lowerSliderAll: NodeListOf<HTMLInputElement> =
    document.querySelectorAll('._lower'); // нижние части слайдеров
  const upperSliderAll: NodeListOf<HTMLInputElement> =
    document.querySelectorAll('._upper'); // верхние части салйдеров
  const valuesLowerSliderAll: NodeListOf<HTMLElement> =
    document.querySelectorAll('._from'); // блок с данными слайдеров
  const valuesUpperSliderAll: NodeListOf<HTMLElement> =
    document.querySelectorAll('._to'); // блок с данными слайдеров

  let valuesTo: number[] = []; // [stock, price]
  let valuesFrom: number[] = []; // [stock, price]

  let saveStock: string[] = [
    `${valuesLowerSliderAll[0].dataset.from!}`,
    `${valuesUpperSliderAll[0].dataset.to!}`,
  ];
  let savePrice: string[] = [
    `${valuesLowerSliderAll[1].dataset.from!}`,
    `${valuesUpperSliderAll[1].dataset.to!}`,
  ];

  valuesTo = [
    +valuesUpperSliderAll[0].dataset.to!,
    +valuesUpperSliderAll[1].dataset.to!,
  ];
  valuesFrom = [
    +valuesLowerSliderAll[0].dataset.from!,
    +valuesLowerSliderAll[1].dataset.from!,
  ];

  function ISliderSelector(a: number, b: string): void {
    // функция которая передается в обработчик событий input (stock = 0 или price = 1, to = нижний или from = верхний)

    let productFilter: IProduct[] = productsData.products.slice();
    if (
      ((document.querySelector('.search') as HTMLInputElement).value.length ===
        0 &&
        (document.querySelector('.category-container') as HTMLElement).dataset
          .active === 'false') ||
      (document.querySelector('.brand-container') as HTMLElement).dataset
        .active === 'false' ||
      (document.querySelector('.stock-container') as HTMLElement).dataset
        .active === 'false' ||
      (document.querySelector('.price-container') as HTMLElement).dataset
        .active === 'false'
    ) {
      productFilter = searchProductCard('now', productsData.products)!;
    }
    let result: IProduct[] = [];

    const stockRange = document.querySelector(
      '.stock-container'
    ) as HTMLElement; // блок слайдера stock
    const priceRange = document.querySelector(
      '.price-container'
    ) as HTMLElement; // блок слайдера price

    const checkboxCategory: string[] = []; // массив с выбранными фильтрами
    const checkboxBrand: string[] = []; // массив с выбранными фильтрами

    document
      .querySelectorAll('.category-container .checkbox:checked')
      .forEach((elem) =>
        checkboxCategory.push((elem as HTMLInputElement).dataset.category!)
      );

    document
      .querySelectorAll('.brand-container .checkbox:checked')
      .forEach((elem) =>
        checkboxBrand.push((elem as HTMLInputElement).dataset.brand!)
      );

    if (a === 0 && b === 'to') {
      valuesTo[0] = +valuesUpperSliderAll[0].dataset.to!;
    } else if (a === 0 && b === 'from') {
      valuesFrom[0] = +valuesLowerSliderAll[0].dataset.from!;
    } else if (a === 1 && b === 'to') {
      valuesTo[1] = +valuesUpperSliderAll[1].dataset.to!;
    } else if (a === 1 && b === 'from') {
      valuesFrom[1] = +valuesLowerSliderAll[1].dataset.from!;
    }

    // =============================================блок проверки активности слайдеров======================================================

    if (
      lowerSliderAll[0].min !== lowerSliderAll[0].value ||
      upperSliderAll[0].max !== upperSliderAll[0].value
    ) {
      stockRange.dataset.active = 'true';
      saveStock = [`${lowerSliderAll[0].value}`, `${upperSliderAll[0].value}`];
      searchParams('set', 'stock', saveStock);
    } else if (
      lowerSliderAll[0].min === lowerSliderAll[0].value &&
      upperSliderAll[0].max === upperSliderAll[0].value
    ) {
      stockRange.dataset.active = 'false';
      saveStock = [`${lowerSliderAll[0].value}`, `${upperSliderAll[0].value}`];
      searchParams('del', 'stock');
    }

    if (
      lowerSliderAll[1].min !== lowerSliderAll[1].value ||
      upperSliderAll[1].max !== upperSliderAll[1].value
    ) {
      priceRange.dataset.active = 'true';
      savePrice = [`${lowerSliderAll[1].value}`, `${upperSliderAll[1].value}`];
      searchParams('set', 'price', savePrice);
    } else if (
      lowerSliderAll[1].min === lowerSliderAll[1].value &&
      upperSliderAll[1].max === upperSliderAll[1].value
    ) {
      priceRange.dataset.active = 'false';
      savePrice = [`${lowerSliderAll[1].value}`, `${upperSliderAll[1].value}`];
      searchParams('del', 'price');
    }

    // =============================================блок проверок по массиву=============================================================

    result = productFilter.filter((item) => {
      return (
        item.stock >= valuesFrom[0] &&
        item.stock <= valuesTo[0] &&
        item.price >= valuesFrom[1] &&
        item.price <= valuesTo[1]
      );
    });

    if (checkboxBrand.length !== 0 || checkboxCategory.length !== 0) {
      result = productFilter.filter((item) => {
        return (
          (checkboxCategory.includes(item.category) ||
            checkboxBrand.includes(item.brand)) &&
          item.stock >= valuesFrom[0] &&
          item.stock <= valuesTo[0] &&
          item.price >= valuesFrom[1] &&
          item.price <= valuesTo[1]
        );
      });
    }

    if (checkboxBrand.length !== 0 && checkboxCategory.length !== 0) {
      result = productFilter.filter((item) => {
        return (
          checkboxCategory.includes(item.category) &&
          checkboxBrand.includes(item.brand) &&
          item.stock >= valuesFrom[0] &&
          item.stock <= valuesTo[0] &&
          item.price >= valuesFrom[1] &&
          item.price <= valuesTo[1]
        );
      });
    }

    if (
      document.querySelectorAll('.filters .checkbox:checked').length === 0 &&
      stockRange.dataset.active === 'false' &&
      priceRange.dataset.active === 'false'
    ) {
      result = productFilter.slice();
    }

    // =======================================================================================================================================

    resultData = result.slice();

    result = SortProductCard('now', result)!;

    result.length === 0
      ? CreateProductCard('not-found')
      : CreateProductCard(result);
    countView(result);

    if (
      (document.querySelector(`.stock-from`) as HTMLElement).innerHTML ===
      'undefined'
    )
      (document.querySelector(`.stock-from`) as HTMLElement).innerHTML = 'none';
    if (
      (document.querySelector(`.stock-to`) as HTMLElement).innerHTML ===
      'undefined'
    )
      (document.querySelector(`.stock-to`) as HTMLElement).innerHTML = 'none';
    if (
      (document.querySelector(`.price-from`) as HTMLElement).innerHTML ===
      'undefined'
    )
      (document.querySelector(`.price-from`) as HTMLElement).innerHTML = 'none';
    if (
      (document.querySelector(`.price-to`) as HTMLElement).innerHTML ===
      'undefined'
    )
      (document.querySelector(`.price-to`) as HTMLElement).innerHTML = 'none';
  }

  // ======================category / brand==========================
  searchProductCard('notNow');

  document.querySelectorAll('.filters .checkbox')?.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      filtering(e);
    });
  });

  // ======================stock==========================

  upperSliderAll[0].addEventListener('input', () => {
    ISliderSelector(0, 'to');
  });
  lowerSliderAll[0].addEventListener('input', () => {
    ISliderSelector(0, 'from');
  });

  // ======================price==========================

  upperSliderAll[1].addEventListener('input', () => {
    ISliderSelector(1, 'to');
  });
  lowerSliderAll[1].addEventListener('input', () => {
    ISliderSelector(1, 'from');
  });

  if (trigger === 'now') {
    filtering();
    ISliderSelector(0, 'to');
    ISliderSelector(0, 'from');
    ISliderSelector(1, 'to');
    ISliderSelector(1, 'from');
  }
  // =====================================================
}
