<script setup>
import router from '@/router';
import MenuNav from '../components/MenuNav.vue';
import Card from 'primevue/card';

const gotoOption = (id) => {
  switch (id) {
    case 1:
      router.push('/game/grupos');
      break;
    case 2:
      router.push('/game/match');
      break;
    case 3:
      router.push('/game/agenda');
      break;
    case 4:
      router.push('/game/points');
      break;
    case 5:
      router.push('/game/tournament');
      break;
    case 6:
      router.push('/donate');
      break;
  }
}
</script>
<template>
  <MenuNav />
  <div class="flex flex-column align-items-center min-h-screen p-5">
    <Card class="w-full relative">
      <template #title>
        <div class="text-center">Home</div>
      </template>
      <template #content>
        <ul class="flex home-list">
          <li @click="gotoOption(1)"><a href="#">Grupos <br /> de amigos</a></li>
          <li @click="gotoOption(2)"><a href="#">Matchs</a></li>
          <li @click="gotoOption(3)"><a href="#">Agenda</a></li>
          <li @click="gotoOption(4)"><a href="#">Puntos</a></li>
          <li @click="gotoOption(5)"><a href="#">Torneo</a></li>
          <li @click="gotoOption(6)"><a href="#">Donate</a></li>
        </ul>
      </template>
    </Card>
  </div>
</template>
