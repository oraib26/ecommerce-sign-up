import * as yup from 'yup';


export const registerschema = yup.object({
    userName:yup.string().required("user name is required").min(3,"must at least 3 characters").max(30,"max is 30 char"),
    email:yup.string().required("email is required").email(),
    password:yup.string().required("password is required").min(3,"must at least 3 characters").max(30,"max is 30 char"),

})


 