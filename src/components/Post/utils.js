import { POST } from './constants'

const { STYLES } = POST

export const UTILS = {
  calculateHeight: () => {
    const pageHeight = window.innerHeight - STYLES.MENU_BAR_HEIGHT
    return pageHeight * STYLES.MAX_HEIGHT_ON_PAGE
  },
  calculatePostWidth: (postHeight) => {
    return 2 * ((postHeight * STYLES.WIDTH) / STYLES.HEIGHT) + STYLES.SPACE_PX
  },
}

