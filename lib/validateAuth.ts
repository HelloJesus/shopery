import * as yup from "yup"

export const schema = yup
    .object({
        email: yup.string().required('Required'),
        password: yup.string().min(3, 'Too Short').required('Required'),
        confirmPassword: yup.string().default('').required('Passwords must match').oneOf([yup.ref('password')], 'Passwords must match')
    }).required()