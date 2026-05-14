<script setup lang="ts">
import router from '@/router';
</script>

<template>
  <main>
    <div class="profileColumns">
        <div class="content" style="grid-row: span 2;">
            <p>I'm a 3rd year computer science student currently graduating from the University of Bordeaux.</p>
            <h2>Studies</h2>
            <ul>
                <li>2024 - today : University of Bordeaux - second and third year computer science</li>
                <li>2023 - 2024 : University of Pau (UPPA) - first year computer science</li>
                <li>2023 : Baccalauréat and Bachillerato (Bachibac)</li>
            </ul>
            <h2>Languages</h2>
            <ul>
                <li>French - Native/Bilingual</li>
                <li>English - Certification Linguaskill, C1+</li>
                <li>Spanish - Good</li>
            </ul>
        </div>
        <div class="div-border">
            <h2>Contact</h2>
            <dl>
                <dt>Mail : </dt> <dd><a href="mailto:pauline.ricaud.32@gmail.com">pauline.ricaud.32@gmail.com</a></dd>
                <dt>Discord : </dt> <dd>pauline._r</dd>
                <dt>Github : </dt><dd><a href="https://github.com/paulinericaud">paulinericaud</a></dd>
            </dl>
        </div>
        <div class="div-border">
            <h2>Projects</h2>
            <p>You can see the multiple projects I made during my studies, Game Jam or mentorship program, using the button below.</p>
            <button v-on:click="router.push('/en/projects')" style="margin-bottom: 1rem;">See my projects</button>
        </div>
    </div>
  </main>
</template>


<style lang="css" scoped>
.profileColumns {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: calc(100% - 27rem) 26rem;
    gap: 1rem;
    margin-inline: 2% 3%;
}
.profileColumns > .div-border {
    margin-top: 0;
    margin-bottom: 0;
}

dl{
    width: 100%;
    display: grid;
    grid-template-columns: auto auto;
}
dt{
    text-align: right;
}
dd {
    text-align: left;
    margin-left: 1rem;
}
</style>