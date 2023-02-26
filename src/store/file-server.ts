import { defineStore } from 'pinia'

export const useFileServerStore = defineStore('file-server', {
  state: () => ({
    directory: ''
  }),

  actions: {
    setDirectory(directory: string) {
      this.directory = directory
    }
  }
})
