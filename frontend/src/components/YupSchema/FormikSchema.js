import * as Yup from 'yup';
const SignUpSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'First name should be at least 2 characters long.').max(60, 'First name should be less than 60 characters').required('Please enter your first name.'),
  lastName: Yup.string().max(60, 'Last name should be less than 60 characters').required('Please enter your last name.'),
  email: Yup.string().email('Please enter a valid email.').required('Please enter your email.'),
  mobileNumber: Yup.string().min(10, 'Please enter valid mobile number').required('Please enter mobile number.'),
  password: Yup.string().min(6, 'Password must be at least 6 characters long.').max(30, 'Password should be less than 30 characters').required('Please enter your password.'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match.').required('Please confirm your password.'),
  profilePic: Yup.mixed().required('Please upload your profile picture.')
  
});

  export default SignUpSchema;