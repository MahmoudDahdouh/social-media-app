import Yup from 'yup'

export const targetIdtSchema = Yup.object({
  body: Yup.object({
    target_id: Yup.number().label('Target id').integer().required(),
  }),
})
