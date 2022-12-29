export function Routing () {
  // const log = (e) => console.log(`${e} ==>`, e)

  const basket = document.querySelector('.icon-basket')
  const logo = document.querySelector('.logo')
  const main = document.querySelector('.main').children

  // if (location === "/home/") {
  //   log(location);
  //   (main[0] as HTMLElement).style.display = 'flex';
  //   (main[1] as HTMLElement).style.display = 'none';
  //   (main[2] as HTMLElement).style.display = 'none';
  // } else if (location === "/basket/") {
  //   log(location);
  //   (main[0] as HTMLElement).style.display = 'none';
  //   (main[1] as HTMLElement).style.display = 'flex';
  //   (main[2] as HTMLElement).style.display = 'none';
  // } else if (location === "/product/") {
  //   log(location);
  //   (main[0] as HTMLElement).style.display = 'none';
  //   (main[1] as HTMLElement).style.display = 'none';
  //   (main[2] as HTMLElement).style.display = 'flex';
  // }

  // =========================================================
  // logo?.addEventListener('click', (e) => locations(e));
  // basket?.addEventListener('click', (e) => locations(e));
  // =========================================================

  // const locat = (path: string) => {
  //   if (path === '/' || path === "/home/" || path === "/home") {
  //     log('1111');
  //     (main[0] as HTMLElement).style.display = 'flex';
  //     (main[1] as HTMLElement).style.display = 'none';
  //     (main[2] as HTMLElement).style.display = 'none';
  //   } else if (path === "/basket/") {
  //     log('2222');
  //     (main[0] as HTMLElement).style.display = 'none';
  //     (main[1] as HTMLElement).style.display = 'flex';
  //     (main[2] as HTMLElement).style.display = 'none';
  //   }
  // }

  // const historyResolver = (title: string, location: string) => {
  //   // this.event.preventDefault();

  //   history.pushState({}, title, location)

  //   if (location === '/' || location === "/home/" || location === "/home") {
  //     log('----home');
  //     (main[0] as HTMLElement).style.display = 'flex';
  //     (main[1] as HTMLElement).style.display = 'none';
  //     (main[2] as HTMLElement).style.display = 'none';
  //   } else if (location === "/basket/") {
  //     log('----basket');
  //     (main[0] as HTMLElement).style.display = 'none';
  //     (main[1] as HTMLElement).style.display = 'flex';
  //     (main[2] as HTMLElement).style.display = 'none';
  //   }

  // }

  // logo?.addEventListener('click', () => historyResolver('Home', '/home/'));
  // basket?.addEventListener('click', () => historyResolver('Basket', '/basket/'));

  // window.addEventListener('popstate', () => {
  //   // render(new URL(window.location.href).pathname)
  //   log('--', window.location.href);
  //   log('----', window.location.pathname);
  // })

  // =========================================================

  // const route = (event) => {
  //   event = event || window.event
  //   event.preventDefault()
  //   window.history.pushState({}, '', event.target.href)
  //   handleLocation()
  // }

  // const routes = {
  //   404: '/404.html',
  //   '/': '/home.html',
  //   '/basket': '/basket.html'
  // }

  // const handleLocation = async () => {
  //   const path = window.location.pathname
  //   log(path)
  //   const route = routes[path] || routes[404]
  //   log(route)
  //   const html = await fetch(route).then((data) => data.text())
  //   log(html);
  //   (document.querySelector('.main')).innerHTML = html
  // }

  // window.onpopstate = handleLocation
  // window.route = route
  // handleLocation()

  // logo.addEventListener('click', route)
  // basket.addEventListener('click', route)

  // // =========================================================

  const locationResolver = (location) => {
    if (location === '#/' || location === '#/home/' || location === '#/home') {
      // log(location)
      main[0].style.display = 'flex'
      main[1].style.display = 'none'
      main[2].style.display = 'none'
    } else if (location === '#/basket/' || location === '#/basket') {
      // log(location)
      main[0].style.display = 'none'
      main[1].style.display = 'flex'
      main[2].style.display = 'none'
    } else if (location === 404) {
      alert('Page not found')
    }
  }

  window.addEventListener('load', () => {
    const location = window.location.hash

    if (location) {
      locationResolver(location)
    }
  })

  basket?.addEventListener('click', () => {
    locationResolver(basket.dataset.href)
  })
  logo?.addEventListener('click', () => {
    locationResolver(logo.dataset.href)
  })
}
