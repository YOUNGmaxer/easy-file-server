<script setup lang="ts">
import Button from './Button.vue'

function handleInputChange(e: any) {
  const { files = [] } = e.target
  if (!files.length) {
    // TODO 给出弹窗提示
    console.warn('dict has no files!')
    return
  }

  // 如果有文件，则提取出目录路径
  const [file] = files
  const path = file.path.slice(0, file.path.length - file.name.length)

  // TODO 设置到全局状态中
}
</script>

<template>
  <div class="param-panel">
    <div class="port">
      <span>端口 </span>
      <input class="input w-90px" />
    </div>
    <div>
      <input id="dict" type="file" webkitdirectory @change="handleInputChange" />
      <Button><label for="dict">选择目录</label></Button>
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
