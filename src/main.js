import './style.scss'

document.querySelector('.section__1').innerHTML = `
  <a href="#" class="section__1__burger-menu"></a>

  <h2 class="section__1__title">
    Дивіться ТБ та кіно без реклами в єдиній передплаті
  </h2>

  <p class="section__1__text">
    Популярні телеканали та величезна бібліотека фільмів, серіалів, мультфільмів, трансляцій у єдиній передплаті.
  </p>

  <a href="#" class="section__1__arrow-down"></a>
`

document.querySelector('.section__2').innerHTML = `
  <h3 class="section__2__title">
    Дивіться фільми <br> без інтернету
  </h3>

  <p class="section__2__text">
    Завантаження фільмів та серіалів <br> на ваш пристрій.
  </p>

  <div class="section__2__image">
    <img 
      src="/iPhone.png" 
      alt="Watch films on the go" 
    >
  </div>

  <div class="section__2__gradient"></div>
`

document.querySelector('.section__3').innerHTML = `
  <div class="section__3__title-block">
    <p class="section__3__title-block__text">Передплата</p>

    <h3 class="section__3__title-block__title">Оптимальна</h3>
  </div>

  <div class="section__3__text-block">
    <h1 class="section__3__text-block__title">
      10000 фільмів та 160+ каналів
    </h1>

    <p class="section__3__text-block__text">
      Голлівудська класика та свіжі <br> кіно-новинки за підпискою, <br> прямі футбольні трансляції та <br> понад 160 каналів
    </p>
  </div>

  <div class="section__3__price-block">
    <h3 class="section__3__price-block__title">від 1 ГРН</h3>

    <button class="section__3__price-block__button">Спробувати</button>

    <p class="section__3__price-block__text">
      Перші 14 днів за 1 грн, <br> далі – 97 грн/міс.
    </p>

    <a href="#" class="section__3__price-block__link">Детальніше</a>
  </div>

  <div class="section__3__gradient"></div>
`

document.querySelector('.section__4').innerHTML = `
  <h3 class="section__4__title">
    Подарунки від партнерів <br> при кожному <br> продовженні передплати
  </h3>

  <p class="section__4__text">
    Сертифікати на знижки від WOG, Сушія, Антошка, Єва та ін.
  </p>

  <div class="section__4__image">
    <img src="/partners.png" alt="list of partners">
  </div>

  <div class="section__4__gradient"></div>
`

document.querySelector('.section__5').innerHTML = `
  <h3 class="section__5__title">
    Підключіть передплату за 1 грн та отримуйте:
  </h3>

  <div class="section__5__flex-wrapper">
    <div class="section__5__flex-wrapper__box">
      <h4 class="section__5__flex-wrapper__box__title">
        ТВ-архів  
      </h4>

      <p class="section__5__flex-wrapper__box__text">
        телепередач до 14 днів
      </p>
    </div>

    <div class="section__5__flex-wrapper__box">
      <h4 class="section__5__flex-wrapper__box__title">
        Full HD 
      </h4>

      <p class="section__5__flex-wrapper__box__text">
        якість тільки за передплатою
      </p>
    </div>

    <div class="section__5__flex-wrapper__box">
      <h4 class="section__5__flex-wrapper__box__title">
        10% знижка 
      </h4>

      <p class="section__5__flex-wrapper__box__text">
        на прем'єри
      </p>
    </div>

    <div class="section__5__flex-wrapper__box">
      <h4 class="section__5__flex-wrapper__box__title">
        5 пристроїв 
      </h4>

      <p class="section__5__flex-wrapper__box__text">
        в одній передплаті
      </p>
    </div>

    <div class="section__5__flex-wrapper__box">
      <h4 class="section__5__flex-wrapper__box__title">
        Без реклами 
      </h4>

      <p class="section__5__flex-wrapper__box__text">
        на всіх фільмах та мультфільмах
      </p>
    </div>
  </div>

  <button class="section__5__button">Підключити</button>
`
