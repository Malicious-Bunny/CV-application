import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      //externalize react tag input component
      external: ['react-icons/fa', 'react-icons/md', 'react-icons/ai', 'react-icons/bs', 'react-icons/go', 'react-icons/im', 'react-icons/io', 'react-icons/ti', 'react-icons/vsc', 'react-icons/fi', 'react-icons/gi', 'react-icons/gr', 'react-icons/hi', 'react-icons/io5', 'react-icons/ri', 'react-icons/si', 'react-icons/tw', 'react-icons/wi', 'react-icons', 'reactjs-tag-input'],
    },
  },
})
