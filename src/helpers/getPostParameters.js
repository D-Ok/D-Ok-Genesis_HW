import { GLOBAL_CONSTANTS } from '../assets/constants'

const { STYLES } = GLOBAL_CONSTANTS

export default () => {
  const { MENU_BAR_HEIGHT_PX, MAX_HEIGHT_ON_PAGE, POST } = STYLES
  const pageHeight = window.innerHeight - MENU_BAR_HEIGHT_PX

  const height = pageHeight * MAX_HEIGHT_ON_PAGE
  const width = 2 * ((height * POST.WIDTH) / POST.HEIGHT) + POST.SPACE_PX

  return { height, width }
}
