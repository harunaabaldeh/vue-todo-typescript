<template>
  <div>
    <h1>This is about page</h1>
  </div>
</template>

<script setup lang="ts"></script>

<style>
h1 {
  align-items: center;
  position: relative;
  left: 100px;
  top: 40px;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
