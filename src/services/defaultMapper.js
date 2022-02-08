const callbackAndReturn = (value, callback) => {
  if (callback) {
    callback(value)
  } else {
    return value
  }
}

export default async ({
  request, parameters, callback, defaultReturn,
}) => {
  try {
    const result = await request(parameters)
    // eslint-disable-next-line no-unused-vars
    const { data } = result

    // const resultValue = typeof data === 'string' ? defaultReturn : data
    const resultValue = defaultReturn
    return callbackAndReturn(resultValue, callback)
  } catch (error) {
    console.error(error)
    return callbackAndReturn(defaultReturn, callback)
  }
}
