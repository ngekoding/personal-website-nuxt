import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
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
}
