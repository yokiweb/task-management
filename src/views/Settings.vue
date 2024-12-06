<template>
  <div :class="['min-h-screen p-6 transition-colors duration-300', 
                theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800']">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl font-bold mb-8 text-center">
        <i class="fas fa-cog mr-2"></i>{{ t('settings') }}
      </h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Notification Settings -->
        <div :class="['rounded-lg shadow-lg p-6 transition-colors duration-300', 
                      theme === 'dark' ? 'bg-gray-800' : 'bg-white']">
          <h2 class="text-2xl font-semibold mb-4 flex items-center">
            <i class="fas fa-bell text-yellow-500 mr-2"></i>{{ t('notificationSettings') }}
          </h2>
          <div class="space-y-4">
            <div>
              <label for="defaultNotification" class="block text-sm font-medium mb-1">{{ t('defaultNotification') }}</label>
              <select id="defaultNotification" v-model="settings.defaultNotification"
                      :class="['w-full rounded-md transition-colors duration-300', 
                               theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-800',
                               'border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50']">
                <option value="notify">{{ t('notify') }}</option>
                <option value="silent">{{ t('silent') }}</option>
              </select>
            </div>
            <div class="flex items-center">
              <input type="checkbox" id="enableSounds" v-model="settings.enableSounds"
                     :class="['mr-2 rounded transition-colors duration-300', 
                              theme === 'dark' ? 'bg-gray-700 text-blue-500' : 'bg-white text-blue-600']">
              <label for="enableSounds">{{ t('enableSounds') }}</label>
            </div>
          </div>
        </div>
        
        <!-- Task Management -->
        <div :class="['rounded-lg shadow-lg p-6 transition-colors duration-300', 
                      theme === 'dark' ? 'bg-gray-800' : 'bg-white']">
          <h2 class="text-2xl font-semibold mb-4 flex items-center">
            <i class="fas fa-tasks text-blue-500 mr-2"></i>{{ t('taskManagement') }}
          </h2>
          <div class="space-y-4">
            <div class="flex items-center">
              <input type="checkbox" id="autoDeleteCompleted" v-model="settings.autoDeleteCompleted"
                     :class="['mr-2 rounded transition-colors duration-300', 
                              theme === 'dark' ? 'bg-gray-700 text-blue-500' : 'bg-white text-blue-600']">
              <label for="autoDeleteCompleted">{{ t('autoDeleteCompleted') }}</label>
            </div>
            <div>
              <label for="defaultView" class="block text-sm font-medium mb-1">{{ t('defaultView') }}</label>
              <select id="defaultView" v-model="settings.defaultView"
                      :class="['w-full rounded-md transition-colors duration-300', 
                               theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-800',
                               'border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50']">
                <option value="list">{{ t('listView') }}</option>
                <option value="calendar">{{ t('calendarView') }}</option>
                <option value="kanban">{{ t('kanbanView') }}</option>
              </select>
            </div>
          </div>
        </div>
        
        <!-- Appearance -->
        <div :class="['rounded-lg shadow-lg p-6 transition-colors duration-300', 
                      theme === 'dark' ? 'bg-gray-800' : 'bg-white']">
          <h2 class="text-2xl font-semibold mb-4 flex items-center">
            <i class="fas fa-paint-brush text-green-500 mr-2"></i>{{ t('appearance') }}
          </h2>
          <div class="space-y-4">
            <div>
              <label for="theme" class="block text-sm font-medium mb-1">{{ t('theme') }}</label>
              <select id="theme" v-model="settings.theme"
                      :class="['w-full rounded-md transition-colors duration-300', 
                               theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-800',
                               'border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50']">
                <option value="light">{{ t('light') }}</option>
                <option value="dark">{{ t('dark') }}</option>
                <option value="system">{{ t('system') }}</option>
              </select>
            </div>
            <div>
              <label for="accentColor" class="block text-sm font-medium mb-1">{{ t('accentColor') }}</label>
              <select id="accentColor" v-model="settings.accentColor"
                      :class="['w-full rounded-md transition-colors duration-300', 
                               theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-800',
                               'border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50']">
                <option value="blue">{{ t('blue') }}</option>
                <option value="green">{{ t('green') }}</option>
                <option value="purple">{{ t('purple') }}</option>
                <option value="red">{{ t('red') }}</option>
              </select>
            </div>
          </div>
        </div>
        
        <!-- Advanced Settings -->
        <div :class="['rounded-lg shadow-lg p-6 transition-colors duration-300', 
                      theme === 'dark' ? 'bg-gray-800' : 'bg-white']">
          <h2 class="text-2xl font-semibold mb-4 flex items-center">
            <i class="fas fa-sliders-h text-purple-500 mr-2"></i>{{ t('advancedSettings') }}
          </h2>
          <div class="space-y-4">
            <div class="flex items-center">
              <input type="checkbox" id="enableSync" v-model="settings.enableSync"
                     :class="['mr-2 rounded transition-colors duration-300', 
                              theme === 'dark' ? 'bg-gray-700 text-blue-500' : 'bg-white text-blue-600']">
              <label for="enableSync">{{ t('enableSync') }}</label>
            </div>
            <div class="flex items-center">
              <input type="checkbox" id="enableAnalytics" v-model="settings.enableAnalytics"
                     :class="['mr-2 rounded transition-colors duration-300', 
                              theme === 'dark' ? 'bg-gray-700 text-blue-500' : 'bg-white text-blue-600']">
              <label for="enableAnalytics">{{ t('enableAnalytics') }}</label>
            </div>
            <div>
              <label for="language" class="block text-sm font-medium mb-1">{{ t('language') }}</label>
              <select id="language" v-model="settings.language"
                      :class="['w-full rounded-md transition-colors duration-300', 
                               theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-800',
                               'border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50']">
                <option value="en">English</option>
                <option value="zh">中文</option>
                <!-- Add more language options as needed -->
              </select>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Action Buttons -->
      <div class="mt-8 flex justify-center space-x-4">
        <button @click="saveSettings" 
                :class="['px-6 py-2 rounded-md shadow-md transition-colors duration-300',
                         theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white']">
          <i class="fas fa-save mr-2"></i>{{ t('saveSettings') }}
        </button>
        <button @click="exportTasks" 
                :class="['px-6 py-2 rounded-md shadow-md transition-colors duration-300',
                         theme === 'dark' ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-green-500 hover:bg-green-600 text-white']">
          <i class="fas fa-file-export mr-2"></i>{{ t('exportTasks') }}
        </button>
        <button @click="resetSettings" 
                :class="['px-6 py-2 rounded-md shadow-md transition-colors duration-300',
                         theme === 'dark' ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-red-500 hover:bg-red-600 text-white']">
          <i class="fas fa-undo mr-2"></i>{{ t('resetSettings') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, inject } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const theme = inject('theme');

const settings = ref({
  defaultNotification: 'notify',
  enableSounds: true,
  autoDeleteCompleted: false,
  defaultView: 'list',
  theme: 'system',
  accentColor: 'blue',
  enableSync: false,
  enableAnalytics: true,
  language: 'en'
});

onMounted(() => {
  const savedSettings = localStorage.getItem('settings');
  if (savedSettings) {
    try {
      settings.value = JSON.parse(savedSettings);
    } catch (error) {
      console.error('Error parsing saved settings:', error);
    }
  }
});

watch(settings, (newSettings) => {
  localStorage.setItem('settings', JSON.stringify(newSettings));
}, { deep: true });

const saveSettings = () => {
  localStorage.setItem('settings', JSON.stringify(settings.value));
  // You might want to add a notification or feedback here
  alert(t('settingsSaved'));
};

const exportTasks = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(tasks));
  const downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", "tasks.json");
  document.body.appendChild(downloadAnchorNode);
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
};

const resetSettings = () => {
  if (confirm(t('confirmReset'))) {
    settings.value = {
      defaultNotification: 'notify',
      enableSounds: true,
      autoDeleteCompleted: false,
      defaultView: 'list',
      theme: 'system',
      accentColor: 'blue',
      enableSync: false,
      enableAnalytics: true,
      language: 'en'
    };
    localStorage.setItem('settings', JSON.stringify(settings.value));
    alert(t('settingsReset'));
  }
};
</script>