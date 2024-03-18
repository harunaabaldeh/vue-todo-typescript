<script setup lang="ts">
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue/dist/iconify.js";
</script>

<template>
  <header>
    <nav class="container">
      <div class="branding">
        <!-- <img src="../assets/Vue_Logo_Black.png" alt="" /> -->
        <Icon icon="vscode-icons:file-type-todo" width="50" />
        <!-- <Icon icon="vscode-icons:file-type-todo" /> -->
        <h1>Todos</h1>
      </div>
      <ul class="nav-routes">
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: #f1f1f1;
  nav {
    display: flex;
    align-items: center;
    padding: 25px 16px;

    .branding {
      display: flex;
      align-items: center;
      gap: 8px;
      img {
        max-width: 50px;
      }

      h1 {
        font-size: 24px;
        align-items: center;
      }
    }

    .nav-routes {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      gap: 12px;
      list-style: none;

      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
}
</style>
