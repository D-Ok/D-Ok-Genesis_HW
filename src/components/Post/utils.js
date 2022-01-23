import { POST } from './constants'

const { STYLES } = POST

const {
  MENU_BAR_HEIGHT, MAX_HEIGHT_ON_PAGE, WIDTH, HEIGHT, SPACE_PX,
} = STYLES

export const UTILS = {
  calculateHeight: () => {
    const pageHeight = window.innerHeight - MENU_BAR_HEIGHT
    return pageHeight * MAX_HEIGHT_ON_PAGE
  },
  calculatePostWidth: (postHeight) => 2 * ((postHeight * WIDTH) / HEIGHT) + SPACE_PX,
}
