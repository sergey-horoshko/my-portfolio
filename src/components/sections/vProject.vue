<script setup>
import {reactive} from "vue";

const hoverItems = reactive({
  hoverOne: false,
  hoverTwo: false,
})
</script>

<template>
  <section class="section section__project">
    <div class="container">
      <div class="project">
        <div class="project__title section__title">
          Portfolio
        </div>
        <div class="project__descr section__descr">
          Each project is a unique piece of development 🧩
        </div>
        <div class="project__list">
          <div class="project__list-item">
            <div
                class="project__item-img"
                :class="{ _active: hoverItems.hoverOne }"
                @mouseover="hoverItems.hoverOne = true"
                @mouseleave="hoverItems.hoverOne = false"
            >
              <img src="../../assets/project/bogacho.png" alt="bogacho">
            </div>
            <div class="project__item-info">
              <div class="project__item-title">
                eCommerce shop 🛒
              </div>
              <div class="project__item-text">
                On this site, a shopping cart, search, product listing, product card and much more have been implemented.
              </div>
              <ul class="project__item-stack">
                <li>Vue 2</li>
                <li>SCSS</li>
                <li>Webpack</li>
                <li>PHP</li>
                <li>Twig</li>
                <li>Docker</li>
              </ul>
              <div class="project__item-links">
                <a href="https://bogacho.ru/" target="_blank">
                  Live
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="project__list-item">
            <div
                class="project__item-img"
                :class="{ _active: hoverItems.hoverTwo }"
                @mouseover="hoverItems.hoverTwo = true"
                @mouseleave="hoverItems.hoverTwo = false"
            >
              <img src="../../assets/project/dance.png" alt="Dancing">
            </div>
            <div class="project__item-info">
              <div class="project__item-title">
                Dancing school 💃
              </div>
              <div class="project__item-text">
                This site was made for a dance school. I was in charge of design and development.
              </div>
              <ul class="project__item-stack">
                <li>JS</li>
                <li>SCSS</li>
                <li>Gulp</li>
                <li>PHP</li>
              </ul>
              <div class="project__item-links">
                <a href="https://www.junost-dance.ru/" target="_blank">
                  Live
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="project__list-item">
            <div class="project__item-img project__item-img-solo">
              <img src="../../assets/project/gallery.png" alt="Film Gallery">
            </div>
            <div class="project__item-info">
              <div class="project__item-title">
                Gallery films 🎬
              </div>
              <div class="project__item-text">
                This is my pet-project. Search, adding a movie and a director to your movies is implemented here.
              </div>
              <ul class="project__item-stack">
                <li>Vue 3</li>
                <li>Vuex</li>
                <li>Vue Router</li>
                <li>Vite</li>
              </ul>
              <div class="project__item-links">
                <a href="https://github.com/sergey-horoshko/galleryFilms" target="_blank">
                  Code
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </a>
                <a href="https://sergey-horoshko.github.io/galleryFilms/" target="_blank">
                  Live Demo
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="project__list-item">
            <div class="project__item-img project__item-img-solo">
              <img src="../../assets/project/weather.jpg" alt="Weather">
            </div>
            <div class="project__item-info">
              <div class="project__item-title">
                Weather App 🌡️
              </div>
              <div class="project__item-text">
                This is my pet-project. With this project, you can find out the temperature in any city.
              </div>
              <ul class="project__item-stack">
                <li>Vue 3</li>
                <li>Vite</li>
              </ul>
              <div class="project__item-links">
                <a href="https://github.com/sergey-horoshko/weatherApp" target="_blank">
                  Code
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </a>
                <a href="https://sergey-horoshko.github.io/weatherApp/" target="_blank">
                  Live Demo
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>