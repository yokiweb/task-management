<template>
  <div :class="['space-y-6 transition-colors duration-300', theme === 'dark' ? 'text-white' : 'text-gray-800']">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <TaskCard v-for="task in paginatedTasks" :key="task.id" :task="task" @delete-task="deleteTask" />
    </div>
    <div v-if="isLoading" class="flex justify-center items-center">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
    <div v-else-if="tasks.length === 0" class="text-center">
      <i class="fas fa-tasks text-4xl mb-2"></i>
      <p>{{ t('noTasks') }}</p>
    </div>
    <div v-if="tasks.length > itemsPerPage" class="flex justify-center mt-4">
      <button
        v-for="pageNum in totalPages"
        :key="pageNum"
        @click="currentPage = pageNum"
        :class="['mx-1 px-3 py-1 rounded transition-colors duration-300', 
                 currentPage === pageNum 
                   ? (theme === 'dark' ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white')
                   : (theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700')]"
      >
        {{ pageNum }}
      </button>
    </div>
    <button @click="showAddTaskModal = true" 
            :class="['w-full py-2 px-4 rounded-md transition-colors duration-300', 
                     theme === 'dark' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-500 text-white hover:bg-blue-600']">
      <i class="fas fa-plus mr-2"></i>{{ t('addTask') }}
    </button>
    <AddTaskModal v-if="showAddTaskModal" @close="showAddTaskModal = false" @add-task="addTask" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, inject } from 'vue';
import { useI18n } from 'vue-i18n';
import TaskCard from '../components/TaskCard.vue';
import AddTaskModal from '../components/AddTaskModal.vue';

const { t } = useI18n();
const theme = inject('theme');
const tasks = ref([]);
const showAddTaskModal = ref(false);
const isLoading = ref(true);
const currentPage = ref(1);
const itemsPerPage = 9;

const totalPages = computed(() => Math.ceil(tasks.value.length / itemsPerPage));

const paginatedTasks = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return tasks.value.slice(start, end);
});

const addTask = (newTask) => {
  tasks.value.push({ ...newTask, id: Date.now() });
  showAddTaskModal.value = false;
};

const deleteTask = (taskId) => {
  tasks.value = tasks.value.filter(task => task.id !== taskId);
};

onMounted(() => {
  const savedTasks = localStorage.getItem('tasks');
  if (savedTasks) {
    try {
      tasks.value = JSON.parse(savedTasks);
    } catch (error) {
      console.error('Error parsing saved tasks:', error);
    }
  }
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});

watch(tasks, (newTasks) => {
  localStorage.setItem('tasks', JSON.stringify(newTasks));
}, { deep: true });
</script>