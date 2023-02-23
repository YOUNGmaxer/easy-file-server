<script setup lang="ts">
import Button from './Button.vue'

const startServer = () => {
  window.electronAPI.startFileServer({ dist: '/Users/azeryang/Mine/Projects' })
}
</script>

<template>
  <div class="controls p-16px flex items-center justify-center">
    <Button class="switch-btn" @click="startServer">启动服务</Button>
  </div>
</template>

<style>
.controls {
  margin: 0 20px 20px;
  height: 100px;
  border: 1px solid aquamarine;
}
</style>
