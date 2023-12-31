import Yup from 'yup'

export const pagination = Yup.object({
  query: Yup.object({
    page: Yup.number()
      .label('Page')
      .integer()
      .positive()
      .default(1)
      .transform((value) => {
        if (value < 1) return 1
        else return value
      }),

    page_size: Yup.number()
      .label('Page size')
      .integer()
      .positive()
      .default(20)
      .transform((v) => {
        if (v > 100) return 100
        else if (v < 1) return 20
        else return v
      }),
  }),
})
