import Yup from 'yup'

const EIGHTEEN_YEARS_IN_MILLISECOND = 567648000000

export const loginSchema = Yup.object({
  body: Yup.object({
    email: Yup.string()
      .label('Email')
      .trim()
      .email('Enter a valid email!')
      .max(128)
      .required(),
    password: Yup.string().label('Password').trim().min(6).max(128).required(),
  }),
})

export const signUpSchema = Yup.object({
  body: Yup.object({
    username: Yup.string()
      .label('Username')
      .trim()
      .min(3)
      .max(64)
      .matches(/^[a-zA-Z0-9_$]*$/, {
        message:
          'Username must contains only uppercase, lowercase, numbers, _ ,and $',
      })
      .required(),
    first_name: Yup.string()
      .label('First name')
      .trim()
      .min(3)
      .max(64)
      .matches(/^[a-zA-Z]*$/, {
        message:
          'First name must contains only uppercase and lowercase letters!',
      })
      .required(),
    last_name: Yup.string()
      .label('Last name')
      .trim()
      .min(3)
      .max(64)
      .matches(/^[a-zA-Z]*$/, {
        message:
          'Last name must contains only uppercase and lowercase letters!',
      })
      .required(),
    email: Yup.string()
      .label('Email')
      .trim()
      .email('Enter a valid email!')
      .max(128)
      .required(),
    password: Yup.string().label('Password').trim().min(6).max(128).required(),
    date_of_birth: Yup.date()
      // .isValid('Enter a valid date!')
      .label('Date of birth')
      .min(new Date(0), 'Date of birth field must be later than 1970')
      .max(
        new Date(new Date().getTime() - EIGHTEEN_YEARS_IN_MILLISECOND),
        'Your are less than 18 years old!'
      )
      .required(),
  }),
})
