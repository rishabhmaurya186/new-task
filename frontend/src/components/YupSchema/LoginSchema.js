import * as Yup from 'yup'

const LoginSchema = Yup.object().shape({
    email: Yup.string().matches(/^\w+([\.-]?\w+)*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.){1,2}[a-zA-Z]{2,3}))$/,'Please enter valid email.').required('Please enter email.'),
    password: Yup.string().min(6, 'Password must be at least 6 characters long.').required('Please enter password.'),
  });

  export default LoginSchema