import type { LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables';

interface LocaleObjectExtended extends LocaleObject {
  icon: string
}

export default LocaleObjectExtended