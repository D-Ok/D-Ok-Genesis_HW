export default async ({
  request, parameters, callback, defaultReturn,
}) => {
  try {
    const result = await request(parameters)
    const { data } = result

    console.log(request, data)
    if (typeof data === 'string') return defaultReturn

    if (callback) {
      callback(data)
    } else {
      return data
    }
  } catch (error) {
    console.error(error)
    return defaultReturn
  }
}
