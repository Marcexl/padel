<!-- src/components/Navbar.vue -->

<script setup>
import { ref } from 'vue';
import Menubar from 'primevue/menubar';
import { useAuthStore } from '../stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();
const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home'
    },
    {
        label: 'Mi cuenta',
        icon: 'pi pi-user'
    },
    {
        label: 'Terminos y condiciones',
        icon: 'pi pi-file'
    },
    {
        label: 'Logout',
        icon: 'pi pi-power-off',
        command: () => logout()
    },
])

const logout = () => {
    authStore.logout();
    router.push('/login');
};

</script>

<template>
    <Menubar :model="items" class="">
        <template #start>
            <div class="pr-5"><img src="../assets/images/logo-horiz.png" class="h-3rem"></div>
        </template>
    </Menubar>
</template>
