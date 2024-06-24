<!-- src/views/Register.vue -->
<template>
    <div class="p-d-flex p-jc-center p-ai-center">
        <Card>
            <template #title>Register</template>
            <template #content>
                <form @submit.prevent="register">
                    <input v-model="username" placeholder="Username" required />
                    <input v-model="password" type="password" placeholder="Password" required />
                    <button type="submit">Register</button>
                </form>
            </template>
        </Card>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
const username = ref('');
const password = ref('');

const register = () => {
    // Register logic
};
</script>