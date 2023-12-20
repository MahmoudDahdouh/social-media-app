import CustomError from './CustomError.js'

const ErrorHandler = (error, req, res, next) => {
  console.log(error)
  // Custom error
  if (error instanceof CustomError) {
    return res.status(error.statusCode).json({
      success: false,
      message: error.message,
      status_code: error.statusCode,
    })
  }

  // Server error
  return res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    status_code: res.statusCode,
  })
}

export default ErrorHandler
