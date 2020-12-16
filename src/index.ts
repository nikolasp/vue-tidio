import { Plugin } from 'vue';

declare global {
  interface Window {
    readonly tidioChatApi: {
      on: (eventName: string, callback: () => void) => void;
    };
  }
}

const VueTidio: Plugin = {
  install: function (app, options) {
    const defaultOptions = {
      delay: 0,
    };

    const tidioOptions: {
      readonly appKey: string;
      readonly delay: number;
    } = Object.assign({}, defaultOptions, options);

    if (!tidioOptions.appKey) {
      throw new Error('Please provide Tidio application public key (`appKey`)');
    }

    setTimeout(() => {
      const tidioScript = document.createElement('script');

      tidioScript.src = `//code.tidio.co/${options.appKey}.js`;
      document.body.appendChild(tidioScript);
    }, tidioOptions.delay);

    (() => {
      const onTidioChatApiReady = () => {
        app.config.globalProperties.$tidioChatApi = window.tidioChatApi;
      };

      if (window.tidioChatApi) {
        window.tidioChatApi.on('ready', onTidioChatApiReady);
      } else {
        document.addEventListener('tidioChat-ready', onTidioChatApiReady);
      }
    })();
  },
};

export default VueTidio;
