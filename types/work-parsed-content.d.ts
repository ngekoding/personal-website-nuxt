import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

interface Screenshot {
  url: string 
  alt: string
}

interface WorkParsedContent extends ParsedContent {
  title: string
  description: string
  url: string
  category: string
  technologis: string[]
  thumbnail: string
  screenshots: Screenshot[]
  content: string
}

export default WorkParsedContent