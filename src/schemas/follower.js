import Yup from 'yup'

export const followerIdSchema = Yup.object({
  body: Yup.object({
    follower_id: Yup.number()
      .label('Follower id')
      .integer()
      .positive()
      .required(),
  }),
})
