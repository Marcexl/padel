<!-- src/views/Login.vue -->
<script setup>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import { useAuthStore } from '../stores/auth';
import { useRouter } from 'vue-router';
import { ref } from 'vue';


const authStore = useAuthStore();
const router = useRouter();
const username = ref('');
const password = ref('');

const login = () => {
  authStore.login({ username: username.value });
  router.push('/');
};

</script>

<template>
  <div class="flex flex-column">
    <form @submit.prevent="login" class="flex flex-column p-2 w-30rem m-auto">
      <h2 class="text-center">Login</h2>
      <InputText v-model="username" placeholder="Username" required class="mb-3" />
      <Password v-model="password" :feedback="false" placeholder="Password" class="mb-3" required toggleMask />
      <Button type="submit" label="Login" />
    </form>
  </div>
</template>