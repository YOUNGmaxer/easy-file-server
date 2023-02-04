<script setup lang="ts">
import FileViewer from './components/FileViewer.vue'
import ParamPanel from './components/ParamPanel.vue'
import Controls from './components/Controls.vue'
</script>

<template>
  <div class="app-container">
    <FileViewer />
    <ParamPanel />
    <Controls />
  </div>
</template>

<style>
.app-container {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
