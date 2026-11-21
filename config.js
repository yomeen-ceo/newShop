module.exports = {
  orderBaseUrl: 'https://order.yomeen.com',
  paymentBaseUrl: 'https://payment.yomeen.com',
  kitchenBaseUrl: 'https://kitchen.yomeen.com',
  // 是否 idToken 有 過期時間
  hasIdTokenExpirationTime: false,
  defaultAvatar: '/statics/logo.png',
  defaultStoreLogoUrl: 'statics/logo.png',
  // 需要登入後，才能去的頁面 ( 設定 route name )
  needAuthRouteNames: [

  ],
  // 需要沒登入，才能去的頁面 ( 設定 route name )
  notNeedAuthRouteNames: [
    'login',
    'sign-up'
  ],
  // 多國語系
  i18n: {
    // 預設語系
    defaultLocale: 'zh-TW',
    // 當找不到語系資料，採用的語系
    fallbackLocale: 'zh-TW',
    languageMap: {
      'en-US': 'English',
      'zh-TW': '繁體中文'
    },
    // https://github.com/firebase/firebaseui-web/blob/master/LANGUAGES.md
    mapFirebaseI18n: {
      'en-US': 'en',
      'zh-TW': 'zh_tw'
    }
  }
}
