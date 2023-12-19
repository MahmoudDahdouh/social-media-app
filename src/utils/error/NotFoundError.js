import CustomError from './CustomError.js'

export const NotFound = (req, res) => {
  throw new CustomError(404, 'Page not found!')
}
