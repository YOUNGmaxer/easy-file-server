<script setup lang="ts">
import { useFileServerStore } from '../store/file-server'
import Button from './Button.vue'

const startServer = async () => {
  const { directory } = useFileServerStore()
  if (!directory) {
    // TODO 给出提示
    console.warn('directory is empty!')
    return
  }

  const { isRunning, error } = await window.electronAPI.fileServer.start({ dir: directory })
  console.log('isRunnig', isRunning, error)
}

const stopServer = async () => {
  const { isStopped, error } = await window.electronAPI.fileServer.stop();
  console.info('stop server', isStopped, error)
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
