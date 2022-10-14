import * as yup from "yup";

const passwordRules = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$";
// min 8 characters, 1 upper case, 1 lowercase , 1 number
export const LoginSchema = yup.object().shape({
    email:yup.string().email("Please enter a valid email").required("Required"),
    password:yup.string().min(8).matches(passwordRules,
        {message:"Please create a stronger password with at least 1 uppercase,lowercase and number"}
        ).required("Required"),
   
})
