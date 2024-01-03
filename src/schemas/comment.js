import Yup from 'yup'

export const addCommentSchema = Yup.object({
  body: Yup.object({
    comment: Yup.string().label('Comment').trim().max(255).required(),
    post_id: Yup.number().label('Post id').integer().positive().required(),
  }),
})

export const deleteCommentSchema = Yup.object({
  body: Yup.object({
    comment_id: Yup.number()
      .label('Comment id')
      .integer()
      .positive()
      .required(),
  }),
})
export const updateCommentSchema = Yup.object({
  body: Yup.object({
    comment_id: Yup.number()
      .label('Comment id')
      .integer()
      .positive()
      .required(),
    new_comment: Yup.string().label('New comment').trim().max(255).required(),
  }),
})
