<script setup lang="ts">
import { useFileServerStore } from '../store/file-server'
import Button from './Button.vue'

const startServer = () => {
  const { directory } = useFileServerStore()
  if (!directory) {
    // TODO 给出提示
    console.warn('directory is empty!')
    return
  }

  window.electronAPI.startFileServer({ dir: directory })
}

const stopServer = () => {
  console.info('stop server')
  window.electronAPI.stopFileServer()
}
</script>

<template>
  <div class="controls p-16px flex items-center justify-center">
    <Button class="switch-btn" @click="startServer">启动服务</Button>
    <Button class="ml-32px" @click="stopServer">停止服务</Button>
  </div>
</template>

<style>
.controls {
  margin: 0 20px 20px;
  height: 100px;
  border: 1px solid aquamarine;
}
</style>
