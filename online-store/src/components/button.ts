export function Button() {
  const btnReset = document.querySelector('.btn-reset') as HTMLElement;
  const btnView = document.querySelector('.btn-switch-view') as HTMLElement;
  const catalogProducts = document.querySelector('.catalog-products') as HTMLElement;
  const counterCart = document.querySelector('.basket p') as HTMLElement;

  btnReset.addEventListener('click', () => {
    btnReset.classList.toggle('active');
  });

  btnView.addEventListener('click', () => {
    btnView.classList.toggle('active');
    catalogProducts.classList.toggle('active');
  });

  catalogProducts.addEventListener('click', (event: MouseEvent) => {
    if ((event.target as HTMLElement).closest(".product-item")) {
      (event.target as HTMLElement).closest(".product-item")?.classList.toggle('active');
      const cardsDom = document.querySelectorAll('.product-item.active') as NodeListOf<HTMLElement>;
      console.log(cardsDom, cardsDom.length);
      counterCart.innerHTML = `${cardsDom.length}`;
    }
  });
}
