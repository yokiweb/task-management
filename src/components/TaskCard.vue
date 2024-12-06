<template>
  <div :class="['rounded-lg shadow-md p-4 transition-colors duration-300', 
                theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800']">
    <h3 class="font-semibold text-lg mb-2">
      <i :class="['mr-2', getTaskIcon(task.executionType)]"></i>
      {{ task.name }}
    </h3>
    <p class="text-sm mb-1">
      <i class="fas fa-clock mr-2"></i>
      {{ t('frequency') }}: {{ task.cronExpression || t(task.frequency) }}
    </p>
    <p class="text-sm mb-1">
      <i class="fas fa-calendar-alt mr-2"></i>
      {{ t('nextExecution') }}: {{ formatDateTime(task.dateTime) }}
    </p>
    <p class="text-sm mb-2">
      <i :class="['mr-2', task.notificationType === 'notify' ? 'fas fa-bell' : 'fas fa-bell-slash']"></i>
      {{ t(task.notificationType) }}
    </p>
    <button
      @click="$emit('deleteTask', task.id)"
      :class="['text-sm transition-colors duration-300', 
               theme === 'dark' ? 'text-red-400 hover:text-red-300' : 'text-red-600 hover:text-red-700']"
    >
      <i class="fas fa-trash-alt mr-1"></i>{{ t('delete') }}
    </button>
  </div>
</template>

<script setup>
import { inject } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps(['task']);
const emit = defineEmits(['deleteTask']);
const { t } = useI18n();
const theme = inject('theme');

const formatDateTime = (dateTimeString) => {
  const date = new Date(dateTimeString);
  return date.toLocaleString();
};

const getTaskIcon = (executionType) => {
  switch (executionType) {
    case 'script': return 'fas fa-code';
    case 'shutdown': return 'fas fa-power-off';
    case 'sleep': return 'fas fa-moon';
    case 'screenOff': return 'fas fa-desktop';
    default: return 'fas fa-tasks';
  }
};
</script>