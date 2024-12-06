<template>
  <div :class="['min-h-screen w-full transition-colors duration-300', theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100']">
    <div class="animated-background"></div>
    <nav :class="['shadow-md p-4 transition-colors duration-300', theme === 'dark' ? 'bg-gray-800' : 'bg-white']">
      <div class="container mx-auto flex justify-between items-center">
        <h1 :class="['text-2xl font-bold transition-colors duration-300', theme === 'dark' ? 'text-white' : 'text-gray-800']">
          {{ t('appTitle') }}
        </h1>
        <div class="flex items-center space-x-4">
          <router-link :to="{ name: 'Home' }" :class="['transition-colors duration-300', theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800']">
            <i class="fas fa-home mr-1"></i>{{ t('home') }}
          </router-link>
          <router-link :to="{ name: 'Settings' }" :class="['transition-colors duration-300', theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800']">
            <i class="fas fa-cog mr-1"></i>{{ t('settings') }}
          </router-link>
          <router-link :to="{ name: 'About' }" :class="['transition-colors duration-300', theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800']">
            <i class="fas fa-info-circle mr-1"></i>{{ t('about') }}
          </router-link>
          <LanguageSelector @change-lang="changeLang" :current-lang="currentLang" />
          <button @click="toggleTheme" :class="['p-2 rounded-full transition-colors duration-300', theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800']">
            <i :class="theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'"></i>
          </button>
        </div>
      </div>
    </nav>
    <main class="container mx-auto p-4 w-full">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { ref, provide, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import LanguageSelector from './components/LanguageSelector.vue';

const { t, locale } = useI18n();
const currentLang = ref(locale.value);
const theme = ref('light');

const changeLang = (lang) => {
  locale.value = lang;
  currentLang.value = lang;
};

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', theme.value);
};

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    theme.value = savedTheme;
  }
});

provide('changeLang', changeLang);
provide('theme', theme);
</script>

<style>
/* 添加 Font Awesome 图标 */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css');
.animated-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}


</style>