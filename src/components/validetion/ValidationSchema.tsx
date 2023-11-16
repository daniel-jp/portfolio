import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup.string().required('The name is mandatory.'),
  email: yup.string().email('The email must be valid').required('Email is mandatory.'),
  message: yup.string().required('The message is mandatory.'),
});

export default validationSchema;
