import { defineStore } from 'pinia'

export const useFileServerStore = defineStore('file-server', {
  state: () => ({
    isRunning: false,
    directory: ''
  }),

  actions: {
    setDirectory(directory: string) {
      this.directory = directory
    },
    setIsRunning(isRunning: boolean) {
      this.isRunning = isRunning
    }
  }
})
