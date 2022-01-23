import { GLOBAL_CONSTANTS } from '../assets/constants'

const { STYLES: { MENU_BAR_HEIGHT, MAX_HEIGHT_ON_PAGE, POST } } = GLOBAL_CONSTANTS

export default () => {
  const pageHeight = window.innerHeight - MENU_BAR_HEIGHT

  const height = pageHeight * MAX_HEIGHT_ON_PAGE
  const width = 2 * ((height * POST.WIDTH) / POST.HEIGHT) + POST.SPACE_PX

  return { height, width }
}
