import { itemInBasket } from '../../index';
// import { CreateProductCard, productsData } from '../cards/cards';
import { renderBasket } from './basket';
import { addLocalStorageBasket } from './localStorage';

type itemBuy = {
  item: string;
  price: number;
  countProducts: number;
};

export function renderBuyForm(itemBuy: itemBuy): void {
  const buyForm = document.querySelector('.buy-form') as HTMLFormElement;
  const shadowWrapper = document.querySelector(
    '.shadow-wrapper',
  ) as HTMLElement;
  const body = document.querySelector('.body') as HTMLElement;

  buyForm.classList.remove('hide');
  shadowWrapper.style.display = 'flex';
  body.classList.add('overflow-hidden');
  buyForm.innerHTML = '';

  const sngCountriesData = [
    {
      countryCode: '375',
      operatorCodes: ['33', '29', '25', '44'], // Беларусь
      flag: '🇧🇾',
      countryName: 'Belarus',
    },
    {
      countryCode: '7',
      operatorCodes: ['900', '901', '902', '903', '904', '905'], // Россия
      flag: '🇷🇺',
      countryName: 'Russia',
    },
    {
      countryCode: '380',
      operatorCodes: ['50', '66', '67', '68', '96', '97', '98'], // Украина
      flag: '🇺🇦',
      countryName: 'Ukraine',
    },
    {
      countryCode: '992',
      operatorCodes: ['93', '50', '55'], // Таджикистан
      flag: '🇹🇯',
      countryName: 'Tajikistan',
    },
    {
      countryCode: '993',
      operatorCodes: ['61', '62', '63', '64', '65'], // Туркменистан
      flag: '🇹🇲',
      countryName: 'Turkmenistan',
    },
    {
      countryCode: '996',
      operatorCodes: ['55', '77', '50', '70'], // Кыргызстан
      flag: '🇰🇬',
      countryName: 'Kyrgyzstan',
    },
    {
      countryCode: '998',
      operatorCodes: ['90', '91', '93', '94', '95'], // Узбекистан
      flag: '🇺🇿',
      countryName: 'Uzbekistan',
    },
    {
      countryCode: '374',
      operatorCodes: ['55', '77', '91', '93'], // Армения
      flag: '🇦🇲',
      countryName: 'Armenia',
    },
    {
      countryCode: '995',
      operatorCodes: ['32', '51', '55', '59', '77'], // Грузия
      flag: '🇬🇪',
      countryName: 'Georgia',
    },
    {
      countryCode: '7',
      operatorCodes: ['800'], // Казахстан
      flag: '🇰🇿',
      countryName: 'Kazakhstan',
    },
  ];

  const countryCodeSelect = `<select class="js-select-country-code">
    ${sngCountriesData
      .map(
        (elem) =>
          `<option value="${elem.countryCode}">${elem.flag}+${elem.countryCode}</option>`,
      )
      .join('')}
    </select>
    <select class="js-select-operator-code"></select>
    `;

  const countrySelect = `<select class="js-select-country">
    ${sngCountriesData
      .map(
        (elem) =>
          `<option value="${elem.countryName}">${elem.flag}${elem.countryName}</option>`,
      )
      .join('')}
    `;

  const buyFormHTML = `
        <div class="js-form">
            <div class="row">
                <div class="col">
                    <h3 class="title">Сommodity details</h3>
                    <div class="inputBox сommodity-container">
                      <p class="cost"><b>Cost:</b><span>${itemBuy.price}$</span></p>
                      <p class="commodity"><b>Products:</b> <span>${itemBuy.item} (${itemBuy.countProducts})</span></p>
                    </div>
                    <h3 class="title">Personal details</h3>
                    <div class="inputBox">
                        <p>Full name:</p>
                        <input class="input js-input js-input-name" name="name"
                        type="text" placeholder="John Jonson"
                        required
                        pattern="[a-zA-Zа-яА-я]{3,}(\\s[a-zA-Zа-яА-я]{3,})+"
                        title="Имя должно содержать 2 слова длинее 3 букв"
                        >
                    </div>
                    <div class="inputBox">
                        <p>Email:</p>
                        <input class="input js-input js-input-email" name="email"
                        type="email" placeholder="example@example.com"
                        required>
                    </div>
                    <div class="inputBox">
                        <p>Phone:</p>
                        <div class="js-input-phone-container">
                          ${countryCodeSelect}
                          <input class="input js-input js-input-phone" id="js-input-phone" name="phone"
                          type="tel" placeholder="375 19 03"
                          required
                          pattern="[0-9]{7}"
                          title="7 digits"
                          maxlength="7">
                        </div>
                    </div>
                    <div class="inputBox">
                        <p>Address:</p>
                        <div class="js-input-adress-container">
                        ${countrySelect}
                          <input class="input js-input js-input-adress-city adress-city" name="adress-city"
                          type="text" placeholder="Minsk"
                          required
                          pattern="[a-zA-Zа-яА-я]{2,}"
                          title="City"
                          >
                          <input class="input js-input js-input-adress adress-street" name="adress-street"
                          type="text" placeholder="Pinskay 33"
                          required
                          pattern="[a-zA-Zа-яА-я]{2,}(\\s[0-9]{1,})+"
                          title="Street home"
                          >
                        </div>

                    </div>
                </div>
                    <div class="col">
                    <h3 class="title">payment</h3>

                    <div class="preview-card">
                      <div class="card">
                        <div class="img-container">
                          <div class="chip"></div>
                          <div class="img-card"></div>
                        </div>
                        <div class="info">

                          <div class="number-container">
                            <p>Card Number</p>
                            <p class="number">0000 - 0000 - 0000 - 0000</p>
                          </div>

                          <div class="name-container">
                            <p>Name</p>
                            <p class="name">John Jonson</p>
                          </div>

                          <div class="date-container">
                            <p>Valid Thru</p>
                            <p class="date">00/00</p>
                          </div>

                        </div>
                      </div>
                      <div class="back-card">
                        <div class="cvv-container">
                          <p>CVV</p>
                          <p class="cvv">000</p>
                        </div>
                      </div>
                    </div>

                    <div class="inputBox">
                        <p>Card number:</p>
                        <input class="input js-input js-input-card-number" name="card-number"
                        type="text" placeholder="0000000000000000"
                        required
                        pattern="[0-9]{16}"
                        maxlength="16"
                        title="16 цифр">
                    </div>
                    <div class="flex">
                        <div class="inputBox">
                            <p>Valid thru:</p>
                            <input class="input js-input js-input-card-term" name="card-term"
                            type="text" placeholder="mm/yy"
                            required
                            maxlength="5"
                            title="Validity period in mm / yy format"
                            >
                        </div>
                        <div class="inputBox">
                            <p>CVV:</p>
                            <input class="input js-input js-input-card-cvv" name="card-cvv"
                            type="text" placeholder="123"
                            required
                            pattern="[0-9]{3}"
                            maxlength="3"
                            title="3 digits">
                        </div>
                    </div>
                </div>
            </div>
            <div class="buy-btn">BUY</div>
        </div>
  `;
  buyForm.insertAdjacentHTML('afterbegin', buyFormHTML);

  const selectCountryCode = document.querySelector(
    '.js-select-country-code',
  ) as HTMLSelectElement;
  const selectOperatorCode = document.querySelector(
    '.js-select-operator-code',
  ) as HTMLSelectElement;

  function changeOperatorCode() {
    selectOperatorCode.innerHTML = sngCountriesData
      .map((elem) => {
        if (elem.countryCode === selectCountryCode.value) {
          return elem.operatorCodes.map(
            (elem) => `<option value="${elem}">${elem}</option>`,
          );
        }
      })
      .join('');
  }

  selectCountryCode.addEventListener('change', changeOperatorCode);

  changeOperatorCode();

  // Outside buyForm-close
  shadowWrapper.addEventListener('click', (e: Event) => {
    if ((e.target! as HTMLElement).classList.contains('shadow-wrapper'))
      shadowWrapperCloser();
  });

  function shadowWrapperCloser(): void {
    // shadowWrapper.classList.add('hide');
    shadowWrapper.style.display = 'none';
    buyForm.classList.add('hide');
    body.classList.remove('overflow-hidden');
  }

  // Form card-term validation
  const inputCardNumber = document.querySelector(
    '.js-input-card-number',
  ) as HTMLInputElement;
  const inputCardName = document.querySelector(
    '.js-input-name',
  ) as HTMLInputElement;
  const inputCardTerm = document.querySelector(
    '.js-input-card-term',
  ) as HTMLInputElement;
  const inputCardCvv = document.querySelector(
    '.js-input-card-cvv',
  ) as HTMLInputElement;
  const inputPhone = document.querySelector(
    '.js-input-phone',
  ) as HTMLInputElement;
  const buyBtn = document.querySelector('.buy-btn') as HTMLInputElement;

  const imgCard = document.querySelector('.img-card') as HTMLElement;

  function validCardNumber(e: Event): void {
    inputCardNumber.value = inputCardNumber.value.replace(/[^\d]/g, '');
    let value = (e.target! as HTMLInputElement).value;

    const cardNumber = document.querySelector(
      '.number-container .number',
    ) as HTMLElement;

    if (!!Number(value) && (e.target! as HTMLInputElement).value.length !== 0) {
      if (+value[0] === 4) {
        imgCard.classList.add('img-visa');
      } else if (+value[0] === 5) {
        imgCard.classList.add('img-master');
      } else if (+value[0] === 6) {
        imgCard.classList.add('img-union');
      } else {
        imgCard.classList.remove('img-visa');
        imgCard.classList.remove('img-master');
        imgCard.classList.remove('img-union');
      }

      value = value
        .split('')
        .map((elem, i) => (i++ !== 0 && i++ % 4 === 0 ? `${elem} - ` : elem))
        .join('')
        .slice(0, 25);
      cardNumber.innerHTML = value;

      if (cardNumber.innerHTML.length === 25) {
        cardNumber.style.color = 'black';
      } else {
        cardNumber.style.color = '#C2C2C2';
      }
    }
    if (value.length === 0) {
      value = '';
      cardNumber.innerHTML = '0000 - 0000 - 0000 - 0000';
    }
  }

  function validCardName(e: Event): void {
    let value = (e.target! as HTMLInputElement).value;

    const cardCvv = document.querySelector(
      '.name-container .name',
    ) as HTMLElement;

    if ((e.target! as HTMLInputElement).value.length !== 0) {
      if (value.length >= 16) {
        cardCvv.innerHTML = `${value.split(' ')[0][0]} ${
          value.split(' ')[1]
        }`.slice(0, 16);
      } else {
        cardCvv.innerHTML = value;
      }

      if (cardCvv.innerHTML.split(' ').length === 2) {
        cardCvv.style.color = 'black';
      } else {
        cardCvv.style.color = '#C2C2C2';
      }
    }
    if (value.length === 0) {
      value = '';
      cardCvv.innerHTML = 'John Jonson';
    }
  }

  function validCardTerm(e: Event): void {
    inputCardTerm.value = inputCardTerm.value
      .replace(/[^\d]/g, '')
      .replace(/^(\d{2})(\d)/, '$1/$2');
    let value: string | string[] = (e.target! as HTMLInputElement).value;
    const cardDate = document.querySelector(
      '.date-container .date',
    ) as HTMLElement;

    value = value.split('/');

    if ((e.target! as HTMLInputElement).value.length !== 0) {
      if (value[0] && !!Number(value[0]) && Number(value[0]) <= 12) {
        cardDate.innerHTML = value[0].length === 2 ? value[0] + '/' : value[0];
        if (
          value[1] &&
          !!Number(value[1]) &&
          Number(value[1]) > Number(`${new Date().getFullYear()}`.slice(2))
        ) {
          cardDate.innerHTML = value.join('/');
        }
        if (cardDate.innerHTML.length === 5) {
          cardDate.style.color = 'black';
        } else {
          cardDate.style.color = '#C2C2C2';
        }
      }
    }

    if ((e.target! as HTMLInputElement).value.length === 0) {
      value = '';
      cardDate.innerHTML = '00/00';
    }
  }

  function validCardCvv(e: Event): void {
    inputCardCvv.value = inputCardCvv.value.replace(/[^\d]/g, '');
    let value = (e.target! as HTMLInputElement).value;

    const cardCvv = document.querySelector(
      '.cvv-container .cvv',
    ) as HTMLElement;

    if (!!Number(value) && (e.target! as HTMLInputElement).value.length !== 0) {
      cardCvv.innerHTML = value;

      if (cardCvv.innerHTML.length === 3) {
        cardCvv.style.color = 'white';
      } else {
        cardCvv.style.color = '#C2C2C2';
      }
    }
    if (value.length === 0) {
      value = '';
      cardCvv.innerHTML = '000';
    }
  }

  function validPhone(): void {
    inputPhone.value = inputPhone.value.replace(/[^\d]/g, '');
  }

  inputCardNumber.addEventListener('input', (e: Event) => {
    validCardNumber(e);
  });

  inputCardName.addEventListener('input', (e: Event) => {
    validCardName(e);
  });

  inputCardTerm.addEventListener('input', (e: Event) => {
    validCardTerm(e);
  });

  inputCardCvv.addEventListener('input', (e: Event) => {
    validCardCvv(e);
  });

  inputPhone.addEventListener('input', validPhone);

  buyBtn.addEventListener('click', (e: Event) => {
    if ((e.target! as HTMLElement).classList.contains('active')) {
      buyForm.innerHTML = `<div class='order-accepted-container'>
        <p class="order-accepted">Your order has been accepted!</p>
        <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
      </div>`;

      // const orderAccepted = document.querySelector(
      //   '.order-accepted',
      // ) as HTMLElement;

      shadowWrapper.removeEventListener('click', shadowWrapperCloser);
      if (itemBuy.item === 'All Basket') {
        // itemInBasket.length = 0;
        itemInBasket.splice(0, itemInBasket.length);
        renderBasket();
        addLocalStorageBasket();
      }

      setTimeout(() => {
        // window.location.replace('/#');
        window.location.hash = '#';
        shadowWrapper.style.display = 'none';
        body.classList.remove('overflow-hidden');
      }, 2000);
    }
  });

  const allInputForm = document.querySelectorAll(
    '.js-form input',
  ) as NodeListOf<HTMLInputElement>;
  const selectPhone = document.querySelectorAll(
    '.js-input-phone-container select',
  ) as NodeListOf<HTMLSelectElement>;
  const selectAddress = document.querySelector(
    '.js-input-adress-container select',
  ) as HTMLSelectElement;

  allInputForm.forEach((item) => {
    item.addEventListener('change', () => {
      let validForm = true;
      allInputForm.forEach((elem) => {
        if (elem.classList.contains('js-input-phone') && elem.validity.valid) {
          selectPhone.forEach(elem => elem.classList.add('active'));
          // selectPhone[0].classList.add('active');
          // selectPhone[1].classList.add('active');
        } else if (
          elem.classList.contains('js-input-phone') &&
          !elem.validity.valid
        ) {
          selectPhone.forEach(elem => elem.classList.remove('active'));
          // selectPhone[0].classList.remove('active');
          // selectPhone[1].classList.remove('active');
        }

        if (
          elem.classList.contains('adress-street') &&
          elem.validity.valid &&
          allInputForm[3].validity.valid
        ) {
          selectAddress.classList.add('active');
        } else if (
          elem.classList.contains('adress-street') &&
          (!elem.validity.valid || !allInputForm[3].validity.valid)
        ) {
          selectAddress.classList.remove('active');
        }

        (elem as HTMLInputElement).validity.valid ? true : (validForm = false);
      });
      if (validForm) buyBtn.classList.add('active');
      else buyBtn.classList.remove('active');
    });
  });
}
