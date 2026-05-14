<script setup lang="ts">
import router from '@/router';
</script>

<template>
  <main>
    <div class="profileColumns">
        <div class="content" style="grid-row: span 2;">
            <p>Je suis une étudiante actuellement en train de finir sa troisième année d'informatique à l'Université de Bordeaux</p>
            <h2>Études</h2>
            <ul>
                <li>2024 - aujourd'hui : Université de Bordeaux - seconde et troisième année de licence inforamtique.</li>
                <li>2023 - 2024 : Université de Pau (UPPA) - première année de licence informatique.</li>
                <li>2023 : Baccalauréat et Bachillerato (Bachibac).</li>
            </ul>
            <h2>Langues</h2>
            <ul>
                <li>Français - Langue maternelle/Bilingue</li>
                <li>Anglais - Certification Linguaskill, C1+</li>
                <li>Espagnol - Bon</li>
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
            <h2>Projets</h2>
            <p>Vous pouvez accéder aux différents projets que j'ai faits durant mes études, des Game Jam, ou encore un programme de mentorat, grâce au bouton ci-dessous.</p>
            <button v-on:click="router.push('/fr/projects')" style="margin-bottom: 1rem;">Voir mes projets</button>
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