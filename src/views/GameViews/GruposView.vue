<script setup>
import MenuNav from '../../components/MenuNav.vue';
import Card from 'primevue/card';
import { v4 as uuidv4 } from 'uuid';

const grupos = {
  id: uuidv4(),
  name: 'Los pibis',
  members: [
    { id: 1, name: 'Ariel Fassio', nickname: 'gordi1' },
    { id: 2, name: 'Diego Quieta', nickname: 'gordi2' },
    { id: 3, name: 'Pablo Fassio', nickname: 'Rey' },
    { id: 4, name: 'Manuel Shibuya', nickname: 'Manu' },
  ]
}
console.log(grupos);
</script>
<template>
  <MenuNav />
  <div class="flex flex-column align-items-center min-h-screen p-5">
    <Card class="w-full relative">
      <template #title>
        <div class="text-center">Grupos</div>
      </template>
      <template #content>
      </template>
    </Card>
  </div>
</template>
