<script setup lang="ts">
import { computed } from 'vue'
import Button from './Button.vue'
import { useFileServerStore } from '../store/file-server'

const store = useFileServerStore()
const serverStatus = computed(() => store.isRunning ? '运行中' : '未启动')

function handleInputChange(e: any) {
  const { files = [] } = e.target
  if (!files.length) {
    // TODO 给出弹窗提示
    console.warn('dir has no files!')
    return
  }

  // 如果有文件，则提取出目录路径
  const [file] = files
  const path = file.path.slice(0, file.path.length - file.name.length)

  // 设置目录
  const store = useFileServerStore()
  store.setDirectory(path)
}
</script>

<template>
  <div class="param-panel flex flex-col">
    <div>
      <span>端口 - </span>
      <!-- TODO: 支持修改端口 -->
      <!-- <input class="input w-90px" /> -->
      <span>7777</span>
    </div>
    <div>
      <span>目录 - </span>
      <template v-if="!store.directory">
        <input id="dir" type="file" webkitdirectory @change="handleInputChange" />
        <Button><label for="dir" class="cursor-pointer">选择目录</label></Button>
      </template>
      <template v-else>
        <span>{{ store.directory }}</span>
      </template>
    </div>
    <div>
      <span>状态 - </span>
      <span>{{ serverStatus }}</span>
    </div>
  </div>
</template>

<style>
.param-panel {
  margin: 0 20px 20px;
  padding: 16px;
  border: 1px solid aquamarine;
}
#dir {
  width: 0;
}
</style>
