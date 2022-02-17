import axios from 'axios'

import { GLOBAL_CONSTANTS } from '../assets/constants'

const {
  API: { HEADERS, PATHNAME },
} = GLOBAL_CONSTANTS

const options = ({ endpoint, method = 'GET', headers = {} }) => {
  const url = `${PATHNAME}${endpoint}`
  const allHeaders = { ...HEADERS, ...headers }

  return {
    method,
    url,
    headers: allHeaders,
  }
}

const getOptions = (endpoint) => options({ endpoint })

export const getData = (endpoint) => axios.request(getOptions(endpoint))
