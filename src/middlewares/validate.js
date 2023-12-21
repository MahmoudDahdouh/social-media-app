import { asyncHandler } from '../utils/asyncHandler.js'
import CustomError from '../utils/error/CustomError.js'

export const validate = (schema) =>
  asyncHandler(async (req, res, next) => {
    try {
      const data = await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
      })

      // add the validated data
      req.body = { ...data.body }
      req.query = { ...data.query }
      req.params = { ...data.params }

      return next()
    } catch (error) {
      return next(new CustomError(400, error.errors[0]))
    }
  })
