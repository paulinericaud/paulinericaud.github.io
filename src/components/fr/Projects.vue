<script setup lang="ts">
import { ref, watch } from 'vue'
import '@/assets/projects.css'

const pdlImgArray : string[] = [new URL('@/assets/PDL/Home_disconnected.png', import.meta.url).href,
                              new URL('@/assets/PDL/Register.png', import.meta.url).href,
                              new URL('@/assets/PDL/Login.png', import.meta.url).href,
                              new URL('@/assets/PDL/Home_connected.png', import.meta.url).href,
                              new URL('@/assets/PDL/Community.png', import.meta.url).href,
                              new URL('@/assets/PDL/Friend.png', import.meta.url).href,
                              new URL('@/assets/PDL/Profile.png', import.meta.url).href,
                              new URL('@/assets/PDL/Img_details.png', import.meta.url).href,
                              new URL('@/assets/PDL/Img_similarities.png', import.meta.url).href,
                              new URL('@/assets/PDL/Settings.png', import.meta.url).href]
var pdlIndex = ref<number>(0);
var pdlImg : string = "";
var pdlImgCaption : string = "";
function changePdlImg(idx : number){
  if (idx == 1) pdlIndex.value = (pdlIndex.value+1)%pdlImgArray.length;
  else if (idx == -1) pdlIndex.value = (pdlIndex.value-1+pdlImgArray.length)%pdlImgArray.length;
  else pdlIndex.value = 0;

  pdlImg = pdlImgArray[pdlIndex.value] || "";
  var pathSplit = pdlImg.split('/');
  var captionSplit = pathSplit[pathSplit.length-1]?.split('-')[0];
  pdlImgCaption = captionSplit?.slice(0,-4) || pdlImg;
}
var sectionsVisible = ref<boolean[]>([false,false,false])
function toggleSection(id : number){
  if (id < sectionsVisible.value.length)
    sectionsVisible.value[id] = !sectionsVisible.value[id]
}
// Initialization
changePdlImg(0);

watch(pdlIndex,() => {});
</script>

<template>
  <main>

<div class="div-border">
    <div class="collapsible" v-on:click="toggleSection(0)">
        <h2>- Études</h2>
    </div>

    <div class="content" v-if="sectionsVisible[0]">
        <hr>
        <div>
            <div class="projectTitle">
                <h3>Projet NET</h3><span>(Travail d'équipe)</span>
            </div>
            <div class="flex-columns">
                <div>
                    <p>Ceci est un projet créé en deuxième année de licence informatique (L2) avec Nicolas Lespinasse et Arthur Chaminade pour notre UE de Projet Technologique.</p>

                    <p>
                        Le jeu consiste en une grille de 5x5 avec des carrés contenant des pièces, comparables à des cables ou des tuyaux, qui peuvent être penchées d'un quart de tour dans le sens des aiguilles d'une montre (ou dans le sens inverse). Ces pièces ont des formes différentes (Impasse, segment, coin, forme de T) et des orientation différentes (Nord, Est, Sud, Ouest). Chaque forme possède au moins un bras connectant le centre du carré avec un bord, appelé <i>demi-arête</i>.
                    </p>
                    <p>
                        <b>Règle originale :</b> D'après la collection de puzzle de Simon Tatham, la règle du jeu est la suivante : <i>Il faut tourner les pièces sur la grille jusqu'à ce qu'elles forment ensemble un seul et unique réseau, sans aucune boucle.</i><br/>

                        Vous pouvez essayez le jeux original <a href="https://www.chiark.greenend.org.uk/~sgtatham/puzzles/js/net.html">ici</a>.
                    </p>

                    <p>Vous pouvez essayer notre projet <a href="/static/projects/game.html">ici</a> aussi.</p>
                </div>

                <iframe src="/static/projects/game_embed.html" id="netGame">Page non trouvée.</iframe>
            </div>
        </div>
        <div>
            <div class="projectTitle">
                <h3>Projet de Programmation Orientée Objet</h3><span>(Travail d'équipe)</span>
            </div>
            <div class="flex-columns">
                <div>
                    <p>Ceci est un projet créé en deuxième année de licence informatique (L2) avec Nicolas Lespinasse pour notre UE de Programmation Orientée Objet, enseignée par Mr L. Réveillère.</p>
                    <p>
                        On a utilisé Gradle et programmé en Java.<br/>
                        <a href="https://github.com/paulinericaud/L2_POO" target="_blank">Ici</a> se trouve le github du projet. Vous trouverez différentes configurations de mondes à l'intérieur du dossier "world", si vous voulez essayez le jeu.
                    </p>
                    <p>
                        Le joueur, un jardinier, doit sauver un hérisson. Si le joueur n'a plus d'énergie, il perd. Les insectes nous font perdre de l'énergie, mais on peut se protéger en utilisant des insecticides. Manger un trognon de pomme nous rend malade et marcher nous coûte plus d'énergie, mais manger une pomme complète nous soigne (une seule pomme entière soigne l'effet d'un seul trognon).
                    </p>
                </div>

                <video width="55vh" controls autoplay muted>
                    <source src="@/assets/POO.mp4" type="video/mp4">
                    Vidéo non trouvée.
                </video>
            </div>
        </div>
        <div>
            <div class="projectTitle">
                <h3>Projet de Développement Logiciel</h3><span>(Travail d'équipe)</span>
            </div>
            <div class="flex-columns">
                <div>
                    <p>Ceci est un projet créé en troisième année de licence informatique (L3) avec Nicolas Lespinasse et Adam Naji pour notre UE de Projet de Développement Logiciel.</p>
                    <p>On a dû développer une application de recherche d'image par similarité avec une architecture basée client-serveur et une base de donnée pour indexer les images.</p>
                    <p>On a fini par ajouter une base de donnée pour les utilisateurs et leur a permis d'ajouter des amis, tout comme de décider qui peut voir leurs images : personne, tout le monde, ou uniquement leurs amis.</p>
                    <p>
                        On a aussi généré une documentation avec Doxygen.<br/>
                        Vous pouvez trouver le github de ce projet <a href="https://github.com/paulinericaud/L3_PDL">ici</a>.
                    </p>
                </div>

                <div class="slideShow">
                  <!-- Full-width images with number text -->
                  <div class="mySlides">
                      <img :src="pdlImg" class="demo" :alt="pdlImg.slice(0,-4)">
                      <div class="numbertext">{{ pdlIndex +1}} / {{ pdlImgArray.length }}</div>
                  </div>

                  <!-- Next and previous buttons -->
                  <!-- Image text -->
                  <div class="caption-container">
                      <a class="prev" v-on:click="changePdlImg(-1)">&#10094;</a>
                      <p id="caption">{{ pdlImgCaption }}</p>
                      <a class="next" v-on:click="changePdlImg(1)">&#10095;</a>
                  </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="div-border">
    <div class="collapsible" v-on:click="toggleSection(1)">
        <h2>- Game Jam</h2>
    </div>
    <div class="content" v-if="sectionsVisible[1]">
        <hr>
        <div>
            <div class="projectTitle">
                <h3>Global Game Jam 2026</h3><span>(Travail d'équipe)</span>
            </div>
            <div>
                <p>Thème de l'édition 2026 de la Global Game Jam : <b>Mask</b></p>
                <p>
                    On a décidé de créer un petit jeu où le joueur veut cambrioler un musée pour voler de bijoux, cachant son identité avec un masque. Il doit casser la vitre protégeant les bijoux à l'aide d'un mini jeu style point-and-click, puis désactiver les caméras dans la salle de sécurité avant de quitter le bâtiment.
                </p>

                <iframe frameborder="0" src="https://itch.io/embed/4256328?linkback=true&amp;border_width=3&amp;bg_color=1e1e1e&amp;fg_color=ffffff&amp;link_color=8b008b&amp;border_color=9932cc" width="554" height="169">Kasse au musée by DeFeoSimon, Pauline Ricaud, Lilian6447</iframe>
            </div>
        </div>
        <div>
            <div class="projectTitle">
                <h3>Code Game Jam 2026</h3><span>(Travail d'équipe)</span>
            </div>
            <div>
                <p>Thème de l'édition 2026 de la Code Game Jam : <b>Fête des clics !</b></p>

                <p>
                    Le thème nous laissant beaucoup de marge pour notre inspiration, nous avons décidé de faire un jeu qui prend place durant une fête, où un des jeux disponible, celui que nous avons codé, consiste à planter un clou dans une bûche. Le joueur doit cliquer uniquement quand le curseur est au niveau du clou dans un premier temps pour positionner le marteau, puis doit ensuite l'enfoncer, en cliquant assez de fois pour frapper avec assez de force et que le clou rentre dans la buche.
                </p>

                <iframe frameborder="0" src="https://itch.io/embed/4224134?linkback=true&amp;border_width=3&amp;bg_color=1e1e1e&amp;fg_color=ffffff&amp;link_color=8b008b&amp;border_color=9932cc" width="560" height="175">Faut Bûcher ! by Pauline Ricaud, Lilian6447, cplcoincoin, DeFeoSimon</iframe>
            </div>
        </div>
    </div>
</div>
<div class="div-border">
    <div class="collapsible" v-on:click="toggleSection(2)">
        <h2>- Mentorat</h2>
    </div>
    <div class="content" v-if="sectionsVisible[2]">
        <hr>
            <div class="projectTitle">
                <h3>Develop at Ubisoft</h3>
            </div>
        <p>
        Develop at Ubisoft est un programme de mentorat pour les étudiant.e.s et récemment diplomé.e.s (moins de deux ans d'expérience) cherchant à améliorer leurs compétences en Game Design, Audio, ou Programmation.<br>

        J'ai candidaté à ce programme en 2024-2025 et eu la chance d'être acceptée. Le jeu ci-dessous est mon premier petit jeu, fait avant ma première Game Jam, grâce à l'aide du mentor que j'ai eu à Ubisoft.
        </p>
        <p>
            J'ai priorisé le processus d'apprentissage, de comment bien programmer différentes choses, au produit fini, donc le game design manque de qualité et ce n'est pas jouable à ce stade. Cependant, je reprendrai la programmation de ce jeux pour l'améliorer plus tard, et mieux mettre en valeur toutes les techniques de programmation que j'ai apprises durant ce mentorat.
        </p>

        <iframe frameborder="0" src="https://itch.io/embed/3251520?linkback=true&amp;border_width=3&amp;bg_color=1e1e1e&amp;fg_color=ffffff&amp;link_color=8b008b&amp;border_color=9932cc" width="560" height="175">*Lethal Exposure by Pauline Ricaud</iframe>
    </div>
</div>
  </main>
</template>