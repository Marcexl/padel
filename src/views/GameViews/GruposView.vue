<script setup>
import MenuNav from '../../components/MenuNav.vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import { v4 as uuidv4 } from 'uuid';
import { ref } from 'vue';

const grupos = ref([
  {
    id: uuidv4(),
    name: 'Los pibis',
    members: [
      { id: 1, name: 'Ariel Fassio', nickname: 'gordi1' },
      { id: 2, name: 'Diego Quieta', nickname: 'gordi2' },
      { id: 3, name: 'Pablo Fassio', nickname: 'Rey' },
      { id: 4, name: 'Manuel Shibuya', nickname: 'Manu' },
    ]
  }])

console.log(grupos.value);

const showGrupo = (id) => {
  console.log('open' + id)
}
</script>
<template>
  <MenuNav />
  <div class="flex flex-column align-items-center min-h-screen p-5">
    <Card class="w-full relative">
      <template #title>
        <div class="text-center">Tus grupos</div>
        <div class="flex align-items-center justify-content-center" v-if="grupos.length > 0">
          <Button class="mt-3 w-15rem" v-for="grupo in grupos" :key="grupo.id" :label="grupo.name"
            @click="showGrupo(grupo.id)" />
        </div>
        <div class="mt-3" v-else>
          <p class="text-center text-sm">Nada por aqui</p>
        </div>
      </template>
      <template #content>
      </template>
    </Card>
    <Button icon="pi pi-plus" severity="info" rounded aria-label="User" class="float-button" />
  </div>
</template>
