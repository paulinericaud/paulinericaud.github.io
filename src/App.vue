<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, watch} from 'vue'

const route = useRoute();

</script>

<template>
  <header>
    <h1>Pauline Ricaud</h1>
  </header>

  <main>
    <suspense>
      <router-view/>
    </suspense>
  </main>
</template>
