import { defineConfig } from 'vite'

export default defineConfig(({ command }) => {
    console.log(666, command);
    return {}
})