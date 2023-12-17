const serverErrorHandler = (err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    msg: err.message || 'Something went wrong!',
    status_code: res.statusCode,
  })
}

export default serverErrorHandler
