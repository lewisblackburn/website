import sharedConfig from '@zxffo/tailwind-config'
import { type Config } from 'tailwindcss'

const config: Pick<Config, 'presets' | 'content'> = {
  content: ['./src/**/*.tsx'],
  presets: [sharedConfig]
}

export default config
