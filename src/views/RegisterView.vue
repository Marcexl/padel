<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
const username = ref('');
const password = ref('');

const register = () => {
    // Register logic
};
</script>

<template>
    <div class="flex align-items-center justify-content-center">
        <Card>
            <template #title>Register</template>
            <template #content>
                <form @submit.prevent="register" class="w-full">
                    <input v-model="username" placeholder="Username" required class="w-full" />
                    <input v-model="password" type="password" placeholder="Password" required class="w-full" />
                    <button type="submit" class="w-full">Register</button>
                </form>
            </template>
        </Card>
    </div>
</template>