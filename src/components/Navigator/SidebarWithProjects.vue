<template>
  <div class="sidebar-with-project">
    <vs-sidebar-item id="market">
      <template #icon>
        <i class='bx bx-grid-alt'></i>
      </template>
      Market Overview
    </vs-sidebar-item>
    <vs-sidebar-item id="Music">
      <template #icon>
        <i class='bx bxs-music'></i>
      </template>
      Music
    </vs-sidebar-item>
    <vs-sidebar-group>
      <template #header>
        <vs-sidebar-item arrow>
          <template #icon>
            <i class='bx bx-group'></i>
          </template>
          Social media
        </vs-sidebar-item>
      </template>

      <vs-sidebar-item id="Instagram">
        <template #icon>
          <i class='bx bxl-instagram'></i>
        </template>
        Instagram
      </vs-sidebar-item>
      <vs-sidebar-item id="twitter">
        <template #icon>
          <i class='bx bxl-twitter' ></i>
        </template>
        Twitter
      </vs-sidebar-item>
      <vs-sidebar-item id="Facebook">
        <template #icon>
          <i class='bx bxl-facebook' ></i>
        </template>
        Facebook
      </vs-sidebar-item>
    </vs-sidebar-group>
    <vs-sidebar-group>
      <template #header>
        <vs-sidebar-item arrow>
          <template #icon>
            <i class='bx bx-code-alt' ></i>
          </template>
          Coding
        </vs-sidebar-item>
      </template>

      <vs-sidebar-item id="github">
        <template #icon>
          <i class='bx bxl-github' ></i>
        </template>
        Github
      </vs-sidebar-item>
      <vs-sidebar-item id="codepen">
        <template #icon>
          <i class='bx bxl-codepen'></i>
        </template>
        Codepen
      </vs-sidebar-item>
      <vs-sidebar-item id="discord">
        <template #icon>
          <i class='bx bxl-discord'></i>
        </template>
        Discord
      </vs-sidebar-item>
      <vs-sidebar-item id="Javascript">
        <template #icon>
          <i class='bx bxl-javascript' ></i>
        </template>
        Javascript
      </vs-sidebar-item>
      <vs-sidebar-item id="git">
        <template #icon>
          <i class='bx bxl-git' ></i>
        </template>
        Git
      </vs-sidebar-item>
    </vs-sidebar-group>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>