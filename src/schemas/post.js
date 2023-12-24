import Yup from 'yup'

export const createPostSchema = Yup.object({
  body: Yup.object({
    content: Yup.string().label('Content').trim().max(5000).required(),
  }),
})
export const updatePostSchema = Yup.object({
  body: Yup.object({
    content: Yup.string().label('Content').trim().max(5000).required(),
  }),
  params: Yup.object({
    id: Yup.number()
      .label('Post id')
      .integer('Post id must be an integer number!')
      .required(),
  }),
})

export const deletePostSchema = Yup.object({
  body: Yup.object({
    id: Yup.number()
      .label('Post id')
      .integer('Post id must be an integer number!')
      .required(),
  }),
})
