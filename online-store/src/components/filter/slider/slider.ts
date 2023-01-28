import './slider.scss';

export function slider() {
  function dualRange(location: string) {
    // 2 values  stock or price
    const lowerSlider = document.querySelector(
      `.${location}-lower`
    ) as HTMLInputElement;
    const upperSlider = document.querySelector(
      `.${location}-upper`
    ) as HTMLInputElement;
    const valuesLowerSlider = document.querySelector(
      `.${location}-from`
    ) as HTMLElement;
    const valuesUpperSlider = document.querySelector(
      `.${location}-to`
    ) as HTMLElement;

    let lowerVal: number;
    let upperVal: number;

    upperSlider.oninput = function () {
      lowerVal = parseInt(lowerSlider.value);
      upperVal = parseInt(upperSlider.value);

      if (upperVal < lowerVal) {
        lowerSlider.value = `${upperVal}`;

        if (`${lowerVal}` === lowerSlider.min) {
          upperSlider.value = '0';
        }
      }

      valuesLowerSlider.innerHTML = valuesLowerSlider.dataset.from =
        lowerSlider.value;
      valuesUpperSlider.innerHTML = valuesUpperSlider.dataset.to =
        upperSlider.value;
    };

    lowerSlider.oninput = function () {
      lowerVal = parseInt(lowerSlider.value);
      upperVal = parseInt(upperSlider.value);

      if (lowerVal > upperVal) {
        upperSlider.value = `${lowerVal}`;

        if (`${upperVal}` === upperSlider.max) {
          lowerSlider.value = `${parseInt(upperSlider.max)}`;
        }
      }

      valuesLowerSlider.innerHTML = valuesLowerSlider.dataset.from =
        lowerSlider.value;
      valuesUpperSlider.innerHTML = valuesUpperSlider.dataset.to =
        upperSlider.value;
    };
  }

  dualRange('price');
  dualRange('stock');
}
