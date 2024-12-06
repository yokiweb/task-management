<template>
  <div class="absolute top-4 right-4">
    <select
      :value="currentLang"
      @change="$emit('changeLang', $event.target.value)"
      class="bg-white border border-gray-300 rounded-md text-gray-700 py-1 px-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      <option value="en">English</option>
      <option value="zh">中文</option>
    </select>
  </div>
</template>

<script setup>
import {  defineEmits } from 'vue';

defineProps(['currentLang']);
defineEmits(['changeLang']);
</script>