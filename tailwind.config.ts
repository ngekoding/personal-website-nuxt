import type { Config } from 'tailwindcss'
import lineClamp from '@tailwindcss/line-clamp'

export default <Partial<Config>>{
  content: [
    './data/**/*.ts'
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))',
        8: 'repeat(8, minmax(0, 1fr))',
      },
      screens: {
        tall: { raw: '(min-height: 500px)' },
      },
    },
  },
  plugins: [
    lineClamp,
  ],
}
