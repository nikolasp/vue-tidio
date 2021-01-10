# Vue Tidio Chat Integration

Simple Vue 3 [Tidio Chat](https://www.tidio.com) integration

Use older version [v1.0.1](https://www.npmjs.com/package/vue-tidio/v/1.0.1) for Vue 2

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
import { createApp } from 'vue';
import VueTidio from 'vue-tidio';
import App from './App.vue';

// required `appKey` param (tidio public key)

// available additional `delay` param
// to delay tidio script load (default: 0 ms)

const app = createApp(App);

app.use(VueTidio, { appKey: 'XXX' });

app.mount('#app');
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
  window.tidioChatApi &&
    window.tidioChatApi.display(to.meta.showChat);
});
```

LICENCE MIT - Created by Nikola Spalevic (nikolaspalevic@gmail.com)
