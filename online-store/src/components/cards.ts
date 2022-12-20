import Products from "../products.json";

function CreateProductCard(b: HTMLElement, n: number) {
  // a = какой тег создаем и вставляем, строка;
  // b = в какой элемент вставляем, заготовленная переменная;
  // n = кол-во элементов
  // пример createEl('div', body,'append', 'xyu', 5)as unknown as Node | string
  const cards: HTMLDivElement = document.createElement('div');
  cards.classList.add('product-item');

  for (let i = 0; i < n; i++) {
    const elem = [document.createElement('div'), document.createElement('div'), document.createElement('h3'), document.createElement('p')];
    elem[0].className = 'product-item';
    b.append(elem[0]);

    const cardsDom: NodeListOf<HTMLElement> = document.querySelectorAll('.product-item');

    elem[1].className = 'product-img';
    cardsDom[i].append(elem[1]);

    const imgDom: NodeListOf<HTMLElement> = document.querySelectorAll('.product-img');

    imgDom[i].classList.add(Products[i].image);

    cardsDom[i].append(elem[2]);
    const nameDom: NodeListOf<HTMLElement> = document.querySelectorAll('.product-item h3');
    nameDom[i].innerHTML = Products[i].name;

    const nameCard = ['Manufacturer', 'Year', 'Number of camera', 'Color', 'Quantity', 'Popular']
    const infoCard = [Products[i].manufacturer, Products[i].year, Products[i].numberCamera, Products[i].color, Products[i].quantity, Products[i].popular]


    for (let index = 0; index < 6; index++) {
      const _p = document.createElement('p');
      _p.innerHTML = `<b>${nameCard[index]}: </b> ${infoCard[index]}`;
      cardsDom[i].append(_p);
    }
    cardsDom[i].append(document.createElement('span'));
  }
}
export default CreateProductCard;
