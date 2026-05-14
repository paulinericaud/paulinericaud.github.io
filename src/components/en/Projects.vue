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
  else if (idx == -1) pdlIndex.value = (pdlIndex.value-1)%pdlImgArray.length;
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
        <h2>- Studies</h2>
    </div>

    <div class="content" v-if="sectionsVisible[0]">
        <hr>
        <div>
            <div class="projectTitle">
                <h3>NET Project</h3><span>(TeamWork)</span>
            </div>
            <div class="flex-columns">
                <div>
                    <p>Project created in 2nd year (L2) of computer science with Nicolas Lespinasse and Arthur Chaminade for our UE Projet Technologique.</p>

                    <p>
                        The game consists of a 5x5 grid with squares containing pieces, comparable to cables or pipes, which can be rotated by a quarter turn in the clockwise (or anti-clockwise) direction. These pieces have a certain shape (endpoint, segment, corner, or tee) and a certain orientation (N, E, S, W). Each shape consists of one or more arms, connected to the center of the square, called <i>half-edges</i>.
                    </p>
                    <p>
                        <b>Original Rule :</b> According to the Simon Tatham's Portable Puzzle Collection, the game rule is simply stated as follows: <i>Rotate the pieces in the grid squares so that they come together in a single connected network, without loops.</i><br/>

                        You can try the original game <a href="https://www.chiark.greenend.org.uk/~sgtatham/puzzles/js/net.html">here</a>.
                    </p>

                    <p>You can try our project <a href="/static/projects/game.html">here</a> too.</p>
                </div>

                <iframe src="/static/projects/game_embed.html" id="netGame">Page not found.</iframe>
            </div>
        </div>
        <div>
            <div class="projectTitle">
                <h3>Object-Oriented Programming Project</h3><span>(TeamWork)</span>
            </div>
            <div class="flex-columns">
                <div>
                    <p>Project created in 2nd year (L2) of computer science with Nicolas Lespinasse for our UE Object-Oriented Programming, teached by Mr L. Réveillère.</p>
                    <p>
                        We used Gradle and programmed in Java.<br/>
                        <a href="https://github.com/paulinericaud/L2_POO" target="_blank">Here</a> is the link to this project's github. You can find different world configurations inside the world folder, if you want to try it out.
                    </p>
                    <p>
                        The player, a gardener, has to recue a hedgehog. If they have no energy, they lose. Insects make us lose energy, but we can protect ourself from them using insecticides. Eating a rotten apple make us sick and walking cost us more energy, but eating a full apple make us healthy again (one good apple heals one bad one).
                    </p>
                </div>

                <video width="55vh" controls autoplay muted>
                    <source src="@/assets/POO.mp4" type="video/mp4">
                    Video Not Found.
                </video>
            </div>
        </div>
        <div>
            <div class="projectTitle">
                <h3>Software development project</h3><span>(TeamWork)</span>
            </div>
            <div class="flex-columns">
                <div>
                    <p>Project created in 3rd year of computer science with Nicolas Lespinasse and Adam Naji for our UE Software Development Project.</p>
                    <p>We needed to develop an image search application by similarity with a client-server architecture based on a database for the indexing of images.</p>
                    <p>We ended up adding a user database and allowed users to add friends, as well as decide whether everyone can see their pictures, noone, or only their friends.</p>
                    <p>
                        We also had a documentation generated with Doxygen.<br/>
                        You can find the github for this project <a href="https://github.com/paulinericaud/L3_PDL">here</a>.
                    </p>
                </div>

                <div class="slideShow">
                  <!-- Full-width images with number text -->
                  <div class="mySlides">
                      <img :src="pdlImg" class="demo" :alt="pdlImg.slice(0,-4)">
                      <div class="numbertext">{{ pdlIndex }} / {{ pdlImgArray.length }}</div>
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
                <h3>Global Game Jam 2026</h3><span>(TeamWork)</span>
            </div>
            <div>
                <p>The theme for the Global Game Jam's 2026 edition : <b>Mask</b></p>
                <p>
                    We decided to create a little game where the player want to break into a museum to steal jewels, concealing their identity with a mask. They have to break the glass containing the jewel thanks to a point-and-click mini-game, then desactivate the cameras in the security room before leaving the building.
                </p>

                <iframe frameborder="0" src="https://itch.io/embed/4256328?linkback=true&amp;border_width=3&amp;bg_color=1e1e1e&amp;fg_color=ffffff&amp;link_color=8b008b&amp;border_color=9932cc" width="560" height="169">Kasse au musée by DeFeoSimon, Pauline Ricaud, Lilian6447</iframe>
            </div>
        </div>
        <div>
            <div class="projectTitle">
                <h3>Code Game Jam 2026</h3><span>(TeamWork)</span>
            </div>
            <div>
                <p>The theme for the Code Game Jam's 2026 edition : <b>Fête des clics !</b></p>

                <p>The theme giving us a little space for inspiration, we decided to set our game in the context of a party, where one of the game available, the one we coded, was to put a nail in a log. First, the player has to click only when the cursor is at the right place to place the hammer, then they have to click enough times so the hammer has enough strength to drive the nail into the log.</p>

                <iframe frameborder="0" src="https://itch.io/embed/4224134?linkback=true&amp;border_width=3&amp;bg_color=1e1e1e&amp;fg_color=ffffff&amp;link_color=8b008b&amp;border_color=9932cc" width="560" height="175">Faut Bûcher ! by Pauline Ricaud, Lilian6447, cplcoincoin, DeFeoSimon</iframe>
            </div>
        </div>
    </div>
</div>
<div class="div-border">
    <div class="collapsible" v-on:click="toggleSection(2)">
        <h2>- Mentoring</h2>
    </div>
    <div class="content" v-if="sectionsVisible[2]">
        <hr>
            <div class="projectTitle">
                <h3>Develop at Ubisoft</h3>
            </div>
        <p>
        Develop at Ubisoft is a mentorship program for students and recent graduates (with less than two years of experience) looking to grow their skills in Game Design, Audio, or Programming.<br>

        I applied to this program for the 2024-2025 program and was accepted. The game below was my first little game, done before any Game Jam, thanks to the help of my Ubisoft's mentor.<br>
        <br>
        I prioritized the process of learning how to program things over the finished product, so the game design lacks and it's not playable in this state. However, I will resume the programming of this game and enhance it later, to show off the programming skills I learned thanks to this mentorship.
        </p>

        <iframe frameborder="0" src="https://itch.io/embed/3251520?linkback=true&amp;border_width=3&amp;bg_color=1e1e1e&amp;fg_color=ffffff&amp;link_color=8b008b&amp;border_color=9932cc" width="560" height="175">*Lethal Exposure by Pauline Ricaud</iframe>
    </div>
</div>
  </main>
</template>