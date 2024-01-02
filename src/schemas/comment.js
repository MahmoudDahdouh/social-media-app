import Yup from 'yup'

export const addCommentSchema = Yup.object({
  body: Yup.object({
    comment: Yup.string().label('Comment').trim().max(255).required(),
    post_id: Yup.number().label('Post id').integer().positive().required(),
  }),
})
