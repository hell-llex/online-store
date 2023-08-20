// Import the styles for the slider component
// Импорт стилей для компонента слайдера
import './slider.scss';

// Function to create a dual-range slider
// Функция для создания двойного ползунка слайдера
export function slider() {
  function dualRange(location: string) {
    // Get the lower and upper slider elements
    // Получение элементов нижнего и верхнего ползунков
    const lowerSlider = document.querySelector(
      `.${location}-lower`,
    ) as HTMLInputElement;
    const upperSlider = document.querySelector(
      `.${location}-upper`,
    ) as HTMLInputElement;

    // Get the elements to display the slider values
    // Получение элементов для отображения значений ползунков
    const valuesLowerSlider = document.querySelector(
      `.${location}-from`,
    ) as HTMLElement;
    const valuesUpperSlider = document.querySelector(
      `.${location}-to`,
    ) as HTMLElement;

    let lowerVal: number;
    let upperVal: number;

    // Event listener for the upper slider input
    // Обработчик события для верхнего ползунка слайдера
    upperSlider.oninput = function () {
      lowerVal = parseInt(lowerSlider.value);
      upperVal = parseInt(upperSlider.value);

      // Adjust the values if they are out of range
      // Коррекция значений, если они выходят за диапазон
      if (upperVal < lowerVal) {
        lowerSlider.value = `${upperVal}`;

        if (`${lowerVal}` === lowerSlider.min) {
          upperSlider.value = '0';
        }
      }

      // Update the displayed values
      // Обновление отображаемых значений
      valuesLowerSlider.innerHTML = valuesLowerSlider.dataset.from =
        lowerSlider.value;
      valuesUpperSlider.innerHTML = valuesUpperSlider.dataset.to =
        upperSlider.value;
    };

    // Event listener for the lower slider input
    // Обработчик события для нижнего ползунка слайдера
    lowerSlider.oninput = function () {
      lowerVal = parseInt(lowerSlider.value);
      upperVal = parseInt(upperSlider.value);

      // Adjust the values if they are out of range
      // Коррекция значений, если они выходят за диапазон
      if (lowerVal > upperVal) {
        upperSlider.value = `${lowerVal}`;

        if (`${upperVal}` === upperSlider.max) {
          lowerSlider.value = `${parseInt(upperSlider.max)}`;
        }
      }

      // Update the displayed values
      // Обновление отображаемых значений
      valuesLowerSlider.innerHTML = valuesLowerSlider.dataset.from =
        lowerSlider.value;
      valuesUpperSlider.innerHTML = valuesUpperSlider.dataset.to =
        upperSlider.value;
    };
  }

  // Initialize dual-range sliders for 'price' and 'stock'
  // Инициализация двойных ползунков слайдера для 'price' и 'stock'
  dualRange('price');
  dualRange('stock');
}
