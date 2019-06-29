export default {
  install: function (Vue, options) {
    const defaultOptions = {
      delay: 0
    };

    const tidioOptions = Object.assign({}, defaultOptions, options);

    if (!tidioOptions.appKey) {
      throw new Error(
        'Please provide Tidio application public key (`appKey`)'
      );
    }

    setTimeout(() => {
      const tidioScript = document.createElement('script');

      tidioScript.src = `//code.tidio.co/${options.appKey}.js`;
      document.body.appendChild(tidioScript);
    }, tidioOptions.delay);

    (() => {
      const onTidioChatApiReady = (e) => {
        Vue.prototype.$tidioChatApi = window.tidioChatApi;
      };

      if (window.tidioChatApi) {
        window.tidioChatApi.on('ready', onTidioChatApiReady);
      } else {
        document.addEventListener('tidioChat-ready', onTidioChatApiReady);
      }
    })();
  }
};
