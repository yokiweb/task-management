<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl transform transition-all">
      <div class="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">
          <i class="fas fa-plus-circle text-blue-500 mr-2"></i>{{ t('addNewTask') }}
        </h2>
        <button @click="closeModal" class="text-gray-400 hover:text-gray-500 focus:outline-none">
          <i class="fas fa-times text-xl"></i>
        </button>
      </div>
      
      <div class="p-6 space-y-6">
        <div>
          <label for="taskName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ t('taskName') }}
          </label>
          <input type="text" id="taskName" v-model="taskName" 
                 class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                 :placeholder="t('enterTaskName')" required>
        </div>
        
        <div>
          <label for="taskDescription" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ t('taskDescription') }}
          </label>
          <textarea id="taskDescription" v-model="taskDescription" rows="3"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    :placeholder="t('enterTaskDescription')"></textarea>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="taskDate" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ t('taskDate') }}
            </label>
            <input type="date" id="taskDate" v-model="taskDate"
                   class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          </div>
          
          <div>
            <label for="taskTime" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ t('taskTime') }}
            </label>
            <input type="time" id="taskTime" v-model="taskTime"
                   class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          </div>
        </div>
        
        <div>
          <label for="taskFrequency" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ t('taskFrequency') }}
          </label>
          <select id="taskFrequency" v-model="taskFrequency"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <option value="once">{{ t('once') }}</option>
            <option value="daily">{{ t('daily') }}</option>
            <option value="weekly">{{ t('weekly') }}</option>
            <option value="monthly">{{ t('monthly') }}</option>
            <option value="custom">{{ t('custom') }}</option>
          </select>
        </div>
        
        <div v-if="taskFrequency === 'custom'">
          <label for="cronExpression" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ t('cronExpression') }}
          </label>
          <input type="text" id="cronExpression" v-model="cronExpression"
                 class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                 :placeholder="t('enterCronExpression')">
        </div>
        
        <div>
          <label for="taskPriority" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ t('taskPriority') }}
          </label>
          <select id="taskPriority" v-model="taskPriority"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <option value="low">{{ t('low') }}</option>
            <option value="medium">{{ t('medium') }}</option>
            <option value="high">{{ t('high') }}</option>
          </select>
        </div>
        
        <div>
          <label for="taskCategory" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ t('taskCategory') }}
          </label>
          <select id="taskCategory" v-model="taskCategory"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <option value="work">{{ t('work') }}</option>
            <option value="personal">{{ t('personal') }}</option>
            <option value="study">{{ t('study') }}</option>
            <option value="health">{{ t('health') }}</option>
            <option value="other">{{ t('other') }}</option>
          </select>
        </div>
        
        <div class="flex items-center">
          <input type="checkbox" id="taskReminder" v-model="taskReminder"
                 class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
          <label for="taskReminder" class="ml-2 block text-sm text-gray-900 dark:text-gray-300">
            {{ t('setReminder') }}
          </label>
        </div>
        
        <div v-if="taskReminder">
          <label for="reminderTime" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ t('reminderTime') }}
          </label>
          <input type="datetime-local" id="reminderTime" v-model="reminderTime"
                 class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        </div>
      </div>
      
      <div class="flex items-center justify-end p-6 border-t border-gray-200 dark:border-gray-700">
        <button @click="closeModal" class="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 mr-2">
          {{ t('cancel') }}
        </button>
        <button @click="addTask" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          {{ t('addTask') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const taskName = ref('');
const taskDescription = ref('');
const taskDate = ref('');
const taskTime = ref('');
const taskFrequency = ref('once');
const cronExpression = ref('');
const taskPriority = ref('medium');
const taskCategory = ref('work');
const taskReminder = ref(false);
const reminderTime = ref('');

const emit = defineEmits(['close', 'add-task']);

const closeModal = () => {
  emit('close');
};

const addTask = () => {
  if (!taskName.value) {
    alert(t('taskNameRequired'));
    return;
  }

  const newTask = {
    id: Date.now(),
    name: taskName.value,
    description: taskDescription.value,
    date: taskDate.value,
    time: taskTime.value,
    frequency: taskFrequency.value,
    cronExpression: cronExpression.value,
    priority: taskPriority.value,
    category: taskCategory.value,
    reminder: taskReminder.value ? reminderTime.value : null,
  };

  emit('add-task', newTask);
  closeModal();
};
</script>