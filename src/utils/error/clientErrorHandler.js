import CustomError from './CustomError.js'

const clientErrorHandler = (req, res) => {
  throw new CustomError(404, 'Not found !')
}

export default clientErrorHandler
