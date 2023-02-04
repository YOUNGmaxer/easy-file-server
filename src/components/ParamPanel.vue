<script setup lang="ts">
import Button from './Button.vue'
</script>

<template>
  <div class="param-panel">
    <div class="port">
      <span>端口 </span>
      <input class="input w-90px" />
    </div>
    <div class="dict">
      <span>目录  </span>
      <input id="dict" type="file" webkitdirectory />
      <label for="dict"><Button>选择目录</Button></label>
    </div>
  </div>
</template>

<style>
.param-panel {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 20px 20px;
  padding: 16px;
  border: 1px solid aquamarine;
}
#dict {
  width: 0;
}
</style>
