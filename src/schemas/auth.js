import Yup from 'yup'

export const loginSchema = Yup.object({
  body: Yup.object({
    email: Yup.string()
      .label('Email')
      .trim()
      .email('Enter a valid email!')
      .max(1000)
      .required(),
    password: Yup.string().label('Password').trim().min(6).max(1000).required(),
  }),
})
