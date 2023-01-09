import Router from 'vanilla-router';
import './404.scss';

export function Routing() {
  const log = console.log;

  const basket = document.querySelector('.icon-basket');
  const logo = document.querySelector('.logo');
  const main = document.querySelector('.main')!.children as HTMLCollection;

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

  // const locationResolver = (location) => {
  //   if (location === '#/' || location === '#/home/' || location === '#/home') {
  //     // log(location)
  //     main[0].style.display = 'flex'
  //     main[1].style.display = 'none'
  //     main[2].style.display = 'none'
  //   } else if (location === '#/basket/' || location === '#/basket') {
  //     // log(location)
  //     main[0].style.display = 'none'
  //     main[1].style.display = 'flex'
  //     main[2].style.display = 'none'
  //   } else if (location === 404) {
  //     alert('Page not found')
  //   }
  // }

  // window.addEventListener('load', () => {
  //   const location = window.location.hash

  //   if (location) {
  //     locationResolver(location)
  //   }
  // })

  // basket?.addEventListener('click', () => {
  //   locationResolver(basket.dataset.href)
  // })
  // logo?.addEventListener('click', () => {
  //   // locationResolver(logo.dataset.href)
  //   log(router)
  // })

  // =========================================================

  // class Router {
  //   routes = []

  //   mode = null

  //   root = '/'

  //   constructor(options: { mode: any; root: any }) {
  //     this.mode = window.history.pushState ? 'history' : 'hash'
  //     if (options.mode) this.mode = options.mode
  //     if (options.root) this.root = options.root
  //     this.listen()
  //   }

  //   add = (path: string | RegExp, cb: { (): void; (): void }) => {
  //     this.routes.push({ path, cb })
  //     return this
  //   }

  //   remove = (path: any) => {
  //     for (let i = 0; i < this.routes.length; i += 1) {
  //       if (this.routes[i].path === path) {
  //         this.routes.slice(i, 1)
  //         return this
  //       }
  //     }
  //     return this
  //   }

  //   flush = () => {
  //     this.routes = []
  //     return this
  //   }

  //   clearSlashes = (path: string) =>
  //     path
  //       .toString()
  //       .replace(/\/$/, '')
  //       .replace(/^\//, '')

  //   getFragment = () => {
  //     let fragment = ''
  //     if (this.mode === 'history') {
  //       fragment = this.clearSlashes(decodeURI(window.location.pathname + window.location.search))
  //       fragment = fragment.replace(/\?(.*)$/, '')
  //       fragment = this.root !== '/' ? fragment.replace(this.root, '') : fragment
  //     } else {
  //       const match = window.location.href.match(/#(.*)$/)
  //       fragment = match ? match[1] : ''
  //     }
  //     return this.clearSlashes(fragment)
  //   }

  //   navigate = (path = '') => {
  //     if (this.mode === 'history') {
  //       window.history.pushState(null, null, this.root + this.clearSlashes(path))
  //     } else {
  //       window.location.href = `${window.location.href.replace(/#(.*)$/, '')}#${path}`
  //     }
  //     return this
  //   }

  //   listen = () => {
  //     clearInterval(this.interval)
  //     this.interval = setInterval(this.interval, 50)
  //   }

  //   interval = () => {
  //     if (this.current === this.getFragment()) return
  //     this.current = this.getFragment()

  //     this.routes.some(route => {
  //       const match = this.current.match(route.path)
  //       if (match) {
  //         match.shift()
  //         route.cb.apply({}, match)
  //         return match
  //       }
  //       return false
  //     })
  //   }
  // }

  // const router = new Router({
  //   mode: 'history',
  //   root: '/'
  // })

  // router
  //   .add(/basket/, () => {
  //     main[0].style.display = 'none'
  //     main[1].style.display = 'flex'
  //   })
  //   .add('', () => {
  //     main[0].style.display = 'flex'
  //     main[1].style.display = 'none'
  //   })
  //   .add(/404/, () => {
  //     main[0].style.display = 'none'
  //     main[1].style.display = 'none'
  //   })

  // =========================================================

  const router = new Router({
    mode: 'hash',
    page404: function (path) {
      log('"/' + path + '" Page not found');
      (main[0] as HTMLElement).style.display = 'none';
      (main[1] as HTMLElement).style.display = 'none';
      (main[3] as HTMLElement).style.display = 'flex';
    },
  });

  router.add('', function () {
    log('Home page');
    (main[0] as HTMLElement).style.display = 'flex';
    (main[1] as HTMLElement).style.display = 'none';
    (main[3] as HTMLElement).style.display = 'none';
  });

  router.add('basket', function () {
    log('Basket page');
    (main[0] as HTMLElement).style.display = 'none';
    (main[1] as HTMLElement).style.display = 'flex';
    (main[3] as HTMLElement).style.display = 'none';
  });

  // router.add(/^hello\/(\w+)/i, function (name) {
  //   log('xm, ' + name);
  // });

  router.add('products/(:any)', function (name) {
    log('Products, ' + name);
  });

  router.addUriListener();

  router.navigateTo('#');

  logo?.addEventListener('click', () => {
    window.location.href = new URL('#', window.location.origin).href;
  });

  basket?.addEventListener('click', () => {
    window.location.href = new URL('#basket', window.location.origin).href;
  });
}
