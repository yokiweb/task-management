<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div v-for="task in tasks" :key="task.id" class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
      <h3 class="font-semibold text-lg mb-2">{{ task.name }}</h3>
      <p class="text-sm text-gray-600 mb-1">
        {{ t('frequency') }}: {{ task.cronExpression || t(task.frequency) }}
      </p>
      <p class="text-sm text-gray-600 mb-1">
        {{ t('nextExecution') }}: {{ formatDateTime(task.dateTime) }}
      </p>
      <p class="text-sm text-gray-600 mb-2">
        {{ t(task.executionType) }} - {{ t(task.notificationType) }}
      </p>
      <button
        @click="$emit('deleteTask', task.id)"
        class="text-red-600 hover:text-red-800 transition-colors duration-300 text-sm"
      >
        {{ t('delete') }}
      </button>
    </div>
    <p v-if="tasks.length === 0" class="text-white text-center col-span-full">{{ t('noTasks') }}</p>
  </div>
</template>

<script setup>
import {  defineEmits } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps(['tasks']);
const emit = defineEmits(['deleteTask']);
const { t } = useI18n();

const formatDateTime = (dateTimeString) => {
  const date = new Date(dateTimeString);
  return date.toLocaleString();
};
</script>