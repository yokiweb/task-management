<template>
  <div :class="['min-h-screen p-6 transition-colors duration-300', 
                theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800']">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl font-bold mb-8 text-center">
        <i class="fas fa-info-circle mr-2"></i>{{ t('about') }}
      </h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- App Info -->
        <div :class="['rounded-lg shadow-lg p-6 transition-colors duration-300', 
                      theme === 'dark' ? 'bg-gray-800' : 'bg-white']">
          <h2 class="text-2xl font-semibold mb-4 flex items-center">
            <i class="fas fa-tasks text-blue-500 mr-2"></i>{{ t('taskScheduler') }}
          </h2>
          <p class="mb-4">{{ t('taskSchedulerDescription') }}</p>
          <div class="flex items-center mb-2">
            <i class="fas fa-code text-green-500 mr-2"></i>
            <span>{{ t('version') }}: 1.0.0</span>
          </div>
          <div class="flex items-center">
            <i class="fas fa-calendar-alt text-purple-500 mr-2"></i>
            <span>{{ t('releaseDate') }}: 2023-06-01</span>
          </div>
        </div>
        
        <!-- Features -->
        <div :class="['rounded-lg shadow-lg p-6 transition-colors duration-300', 
                      theme === 'dark' ? 'bg-gray-800' : 'bg-white']">
          <h2 class="text-2xl font-semibold mb-4 flex items-center">
            <i class="fas fa-star text-yellow-500 mr-2"></i>{{ t('features') }}
          </h2>
          <ul class="space-y-2">
            <li class="flex items-center">
              <i class="fas fa-check-circle text-green-500 mr-2"></i>{{ t('feature1') }}
            </li>
            <li class="flex items-center">
              <i class="fas fa-check-circle text-green-500 mr-2"></i>{{ t('feature2') }}
            </li>
            <li class="flex items-center">
              <i class="fas fa-check-circle text-green-500 mr-2"></i>{{ t('feature3') }}
            </li>
            <li class="flex items-center">
              <i class="fas fa-check-circle text-green-500 mr-2"></i>{{ t('feature4') }}
            </li>
          </ul>
        </div>
        
        <!-- Tech Stack -->
        <div :class="['rounded-lg shadow-lg p-6 transition-colors duration-300', 
                      theme === 'dark' ? 'bg-gray-800' : 'bg-white']">
          <h2 class="text-2xl font-semibold mb-4 flex items-center">
            <i class="fas fa-layer-group text-indigo-500 mr-2"></i>{{ t('techStack') }}
          </h2>
          <ul class="space-y-2">
            <li class="flex items-center">
              <i class="fab fa-vuejs text-green-500 mr-2"></i>Vue 3
            </li>
            <li class="flex items-center">
              <i class="fas fa-bolt text-yellow-500 mr-2"></i>Vite
            </li>
            <li class="flex items-center">
              <i class="fab fa-css3-alt text-blue-500 mr-2"></i>Tailwind CSS
            </li>
            <li class="flex items-center">
              <i class="fab fa-js-square text-yellow-400 mr-2"></i>JavaScript
            </li>
          </ul>
        </div>
        
        <!-- Author Info -->
        <div :class="['rounded-lg shadow-lg p-6 transition-colors duration-300', 
                      theme === 'dark' ? 'bg-gray-800' : 'bg-white']">
          <h2 class="text-2xl font-semibold mb-4 flex items-center">
            <i class="fas fa-user text-red-500 mr-2"></i>{{ t('author') }}
          </h2>
          <p class="mb-4">{{ t('authorName') }}</p>
          <div class="flex space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
               :class="['flex items-center transition-colors duration-300', 
                        theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700']">
              <i class="fab fa-github mr-1"></i>GitHub
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"
               :class="['flex items-center transition-colors duration-300', 
                        theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700']">
              <i class="fab fa-twitter mr-1"></i>Twitter
            </a>
          </div>
        </div>
      </div>
      
      <!-- Futuristic Element -->
      <div :class="['mt-8 rounded-lg shadow-lg p-6 text-center transition-colors duration-300', 
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white']">
        <h2 class="text-2xl font-semibold mb-4">{{ t('futureUpdates') }}</h2>
        <div class="relative w-full h-16 bg-gray-200 rounded-full overflow-hidden">
          <div class="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse" style="width: 75%;"></div>
          <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <span class="font-bold" :class="theme === 'dark' ? 'text-white' : 'text-gray-800'">75%</span>
          </div>
        </div>
        <p class="mt-4">{{ t('stayTuned') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const theme = inject('theme');
</script>