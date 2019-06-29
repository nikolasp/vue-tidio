# Vue Tidio Chat Integration

Simple Vue [Tidio Chat](https://www.tidio.com) integration

## Getting started

- Install `vue-tidio` library

```bash
# run
npm i vue-tidio
# or
yarn add vue-tidio
```

- Import package and install plugin

```js
import VueTidio from 'vue-tidio';

// required `appKey` param (tidio public key)

// available additional `delay` param
// to delay tidio script load (default: 0 ms)

Vue.use(VueTidio, { appKey: 'XXX' });
```

- Configure chat visibility per page
```js
const ROUTES: {
  {
    name: 'home',
    component: HomeComponent,
    meta: {
      showChat: true
    }
  }
  // etc.
};

router.afterEach((to) => {
  Vue.prototype.$tidioChatApi &&
    Vue.prototype.$tidioChatApi.display(to.meta.showChat);
});
```

LICENCE MIT - Created by Nikola Spalevic (nikolaspalevic@gmail.com)