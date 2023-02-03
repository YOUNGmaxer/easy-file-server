<template>
  <div class="container">
    <div class="file-viewer">
      文件视图区域
    </div>
    <div class="server-controls">
      服务控制区域
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.file-viewer {
  flex: 1;
  margin: 20px;
  border: 1px solid aquamarine;
}
.server-controls {
  margin: 0 20px 20px;
  height: 100px;
  border: 1px solid aquamarine;
}
</style>
