//TODO слетает скидка если применить промокод а потом поменять содержание корзины но может и пофиг
import { itemInBasket } from '../../index'
import { renderBasket } from './basket'
export function renderBuyForm ():void {
  const buyForm = document.querySelector('.buy-form') as HTMLElement
  const shadowWrapper = document.querySelector('.shadow-wrapper') as HTMLElement
 const body = document.querySelector('.body') as HTMLElement
  buyForm.classList.remove('hide')
  shadowWrapper.classList.remove('hide')
  body.classList.add('overflow-hidden');
  buyForm.innerHTML = ''

  const buyFormHTML = `
        <form action="" class="js-form">
            <div class="row">
                <div class="col">
                    <h3 class="title">Personal details</h3>
                    <div class="inputBox">
                        <span>full name:</span>
                        <input class="input js-input js-input-name" name="name"
                        type="text" placeholder="John Jonson"
                        required
                        pattern="[a-zA-Zа-яА-я]{3,}(\\s[a-zA-Zа-яА-я]{3,})+"
                        title="Имя должно содержать 2 слова длинее 3 букв"
                        value="Jon Jonson">
                    </div>
                    <div class="inputBox">
                        <span>email:</span>
                        <input class="input js-input js-input-email" name="email"
                        type="email" placeholder="example@example.com"
                        required
                        value="gru6@tut.by">
                    </div>
                    <div class="inputBox">
                        <span>phone:</span>
                        <input class="input js-input js-input-phone" name="phone"
                        type="tel" placeholder="+123456789"
                        required
                        pattern="^\\+[0-9]{9,}"
                        title="начинаться с '+', содержать только цифры и быть не короче 9 символов"
                        value="+123456789">
                    </div>
                    <div class="inputBox">
                        <span>address:</span>
                        <input class="input js-input js-input-adress" name="adress"
                        type="text" placeholder=" "
                        required
                        pattern="[a-zA-Zа-яА-я]{5,}(\\s[a-zA-Zа-яА-я]{5,})(\\s[a-zA-Zа-яА-я]{5,})+"
                        title="начинаться с '+', содержать только цифры и быть не короче 9 символов"
                        value="rrrrr rrrrr rrrrr"
                        >
                    </div>
                </div>
                    <div class="col">
                    <h3 class="title">payment</h3>
                    <div class="inputBox">
                        <span>cards accepted:</span>
                        <div class="imageBox">
                        <span class="inputBox__imgVisa"></span>
                        <span class="inputBox__imgMaster"></span>
                        <span class="inputBox__imgUnion"></span>
                        </div>
                    </div>
                    <div class="inputBox">
                        <span>card number:</span>
                        <input class="input js-input js-input-card-number" name="card-number"
                        type="text" placeholder="1111222233334444"
                        required
                        pattern="[0-9]{16}"
                        title="16 цифр"
                        value="1111111111111111">
                    </div>
                    <div class="flex">
                        <div class="inputBox">
                            <span>valid thru:</span>
                            <input class="input js-input js-input-card-term" name="card-term"
                            type="text" placeholder="mm/yy"
                            required
                            pattern="^(0[1-9]|1[0-2])\\/(0[1-9]|1[0-9]|2[0-9]|3[0-1])$"
                            title="Срок действия в формате mm/yy"
                            >
                        </div>
                        <div class="inputBox">
                            <span>CVV:</span>
                            <input class="input js-input js-input-card-cvv" name="card-cvv"
                            type="text" placeholder="123"
                            required
                            pattern="[0-9]{3}"
                            title="3 цифры"
                            value="123">
                        </div>
                    </div>
                </div>
            </div>
            <input type="submit" value="buy" class="submit-btn">
        </form>
  `;
  buyForm.insertAdjacentHTML('afterbegin', buyFormHTML);

  // Outside buyForm-close
  shadowWrapper.addEventListener('click', shadowWrapperCloser)
  function shadowWrapperCloser ():void {
    shadowWrapper.classList.add('hide')
    buyForm.classList.add('hide')
    body.classList.remove('overflow-hidden');
  }

  // Form card-term validation
  const inputCardNumber = document.querySelector(
    '.js-input-card-number'
  ) as HTMLInputElement;
  const inputCardTerm = document.querySelector(
    '.js-input-card-term'
  ) as HTMLInputElement;

  inputCardTerm.addEventListener('input', () => { validCardTerm() })

  function validCardTerm ():void {
    inputCardTerm.value = inputCardTerm.value.replace(/^(\d{2})(\d)/, '$1/$2')
  }

  // card image hendler
  const imgVisa = document.querySelector('.inputBox__imgVisa') as HTMLElement;
  const imgMaster = document.querySelector(
    '.inputBox__imgMaster'
  ) as HTMLElement;
  const imgUnion = document.querySelector('.inputBox__imgUnion') as HTMLElement;

  inputCardNumber.addEventListener('input', () => { choseCard() })

  function choseCard ():void {
    if (inputCardNumber.value.match(/^4/)) {
      imgVisa.classList.add('activeBorder');
    } else if (inputCardNumber.value.match(/^5/)) {
      imgMaster.classList.add('activeBorder');
    } else if (inputCardNumber.value.match(/^6/)) {
      imgUnion.classList.add('activeBorder');
    } else {
      imgVisa.classList.remove('activeBorder');
      imgMaster.classList.remove('activeBorder');
      imgUnion.classList.remove('activeBorder');
    }
  }

  // close buy form - order accepted
  const buyBtn = document.querySelector('.submit-btn') as HTMLElement
  buyForm.addEventListener('submit', (e) => { e.preventDefault() })
  buyBtn.addEventListener('click', () => {
    const orderAccepted = document.querySelector('.order-accepted') as HTMLElement
    itemInBasket.length = 0
    renderBasket()
    buyForm.classList.add('hide')
   shadowWrapper.removeEventListener('click', shadowWrapperCloser)
    orderAccepted.classList.remove('hide')

    setTimeout(() => {
      alert('добавить линк на стартовую страницу')
      orderAccepted.classList.add('hide')
      shadowWrapperCloser()
    }, 3000)
  })
}
