import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import en from './locales/en.json';
import zh from './locales/zh.json';
import { createI18n } from 'vue-i18n';
import router from './router';

const i18n = createI18n({
  legacy: false,
  locale: 'zh',
  messages: {
    en,
    zh
  }
})


createApp(App).use(i18n).use(router)
    .mount('#app')
