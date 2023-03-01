<script lang="ts" setup>
defineEmits<{(e: 'click'): void}>()
const props = withDefaults(defineProps<{
  disabled?: boolean;
}>(), {
  disabled: false
})
</script>

<template>
  <button class="button" :disabled="props.disabled" @click="$emit('click')"><slot></slot></button>
</template>

<style>
.button {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: rgb(207, 169, 169);
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button:disabled {
  color: grey;
  cursor: default;
}

.button:not(:disabled):active {
  box-shadow: 0px 0px 0px 0px;
  top: 5px;
  left: 5px;
}
</style>
