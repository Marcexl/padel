<!-- src/views/Login.vue -->
<script setup>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Card from 'primevue/card';
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
  <div class="flex flex-column align-items-center justify-content-center min-h-screen p-5">
    <Card class="w-full relative">
      <template #title>
        <img src="../assets/images/logo.png" class="w-5rem mb-3 m-auto block" alt="logo" />
        <div class="text-center">Paddle App</div>
      </template>
      <template #content>
        <form @submit.prevent="login" class="flex flex-column p-2 m-auto">
          <InputText v-model="username" placeholder="Username" required class="mb-3" />
          <Password v-model="password" :feedback="false" placeholder="Password" class="mb-3" required toggleMask />
          <Button type="submit" severity="info" label="Login" />
          <Button severity="info" text label="O registrate" />
        </form>
      </template>
    </Card>
  </div>
</template>