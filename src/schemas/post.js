import Yup from 'yup'

export const createPostSchema = Yup.object({
  body: Yup.object({
    content: Yup.string().label('Content').trim().max(5000).required(),
  }),
})
