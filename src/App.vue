<script setup lang="ts">
import router from '@/router';
import { useRoute } from 'vue-router'
import { ref, watch} from 'vue'

const route = useRoute();

var lang = ref<string>(location.pathname.slice(1,3));
if (lang.value == "") lang.value = localStorage.getItem('lang') || "en"


watch(lang,()=>{
  localStorage.setItem('lang',lang.value);
  router.push('/'+lang.value+location.pathname.slice(3));
})
</script>

<template>
  <header>
    <nav v-if="route.path.slice(3) != '/profile'">
      <button v-if="lang == 'en'" v-on:click="router.push('/en/profile')">Profile</button>
      <button v-if="lang == 'fr'" v-on:click="router.push('/fr/profile')">Profil</button>
    </nav>
    <h1>Pauline Ricaud</h1>
    <select v-model="lang">
      <option value="en" :selected="lang =='en'">en</option>
      <option value="fr" :selected="lang =='fr'">fr</option>
    </select>
  </header>

  <main>
    <suspense>
      <router-view/>
    </suspense>
  </main>
</template>

<style lang="css" scoped>
main {
  margin-top: 11rem;
}

header {
  top: 0;
  left: 0;
  width: 100%;
  background-color: #252525;
  position: fixed;
  padding-bottom: 2rem;
    margin-bottom: 2rem;
  border-bottom: 2px solid darkorchid;
}
header > h1 {
    margin-bottom: 0.5rem;
}
nav{
  display: flex;
  position: absolute;
  top: 2rem;
  left: 2rem;
  gap:1rem;
}
select {
  position: absolute;
  top: 2rem;
  right: 2rem;
  padding: 0.5rem 1rem;
  background-color: darkorchid;
  border: 3px solid cornflowerblue;
  border-radius: 1rem;
}
</style>