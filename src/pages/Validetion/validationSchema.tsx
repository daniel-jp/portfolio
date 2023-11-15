import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório'),
  email: yup.string().email('O email deve ser válido').required('O email é obrigatório'),
  message: yup.string().required('A mensagem é obrigatória'),
});

export default validationSchema;
