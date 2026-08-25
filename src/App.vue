<script setup lang="ts">
import router from '@/router.ts';
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
      <option value="en" :selected="lang =='en'">&#127468;&#127463; en</option>
      <option value="fr" :selected="lang =='fr'">&#127467;&#127479; fr</option>
    </select>
  </header>

  <main>
    <suspense>
      <router-view/>
    </suspense>
  </main>
  <footer>
    <div></div>
    <div>
      <p v-if="lang == 'en'">Made by Pauline Ricaud</p>
      <p v-if="lang == 'fr'">Fait par Pauline Ricaud</p>
    </div>
    <p>Last update : 15/05/2026</p>
  </footer>
</template>

<style lang="css" scoped>
main {
  margin-top: 11rem;
  margin-bottom: 5rem;
}

header {
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 9rem;
  background-color: #252525;
  margin-bottom: 2rem;
  border-bottom: 2px solid darkorchid;
}
header > h1 {
    margin: auto 7rem auto 11rem;
    height: fit-content;
    transition-duration: 0.5s;
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
  width: max-content;
  padding: 0.5rem 1rem 0.5rem 0.8rem;
  background-color: darkorchid;
  border: 3px solid cornflowerblue;
  border-radius: 1rem;
}
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding-inline: 1rem;
  width: calc(100%-2rem);
  height: 3rem;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 12rem calc(100% - 28rem) 12rem;
  justify-content: center;
  column-gap: 1rem;
  background-color: #252525;
  border-top: 2px solid darkorchid;
  transition: 1s;
}
footer * {
  color: lightgray;
}


@media only screen and (max-width: 726px) {
  select {
    top: 1rem;
    left: 3.5rem;
    right: auto;
  }
  nav{
    top: 4rem;
  }
  header > h1 {
      margin-right: 0;
      margin-left: 11rem;
  }
  header {
    padding: 0;
    min-height: 9rem;
  }
  footer > :first-child { display: none; }
  footer {
    padding-inline: 0.5rem;
    width: calc(100%-1rem);
    column-gap: 0.5rem;
    grid-template-columns: calc(100% - 14rem) 12rem;
  }
}
@media only screen and (max-width: 400px) {
  header > h1 {
    font-size:xx-large ;
  }
}
</style>