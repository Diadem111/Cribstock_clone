import * as yup from "yup";

const passwordRules = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$";
// min 8 characters, 1 upper case, 1 lowercase , 1 number
export const basicSchema = yup.object().shape({
    firstname:yup.string().min(3).required("Required"),
    lastname:yup.string().min(3).required("Required"),
    username:yup.string().min(3).required("Required"),
    email:yup.string().email("Please enter a valid email").required("Required"),
    confirmemail:yup.string().oneOf([yup.ref("email"),null],
    "Email must match").required("Required"),
    number:yup.string().min(7).required("Required"),
    password:yup.string().min(8).matches(passwordRules,
        {message:"Please create a stronger password with at least 1 uppercase,lowercase and number"}
        ).required("Required"),
    confirmPassword:yup.string().oneOf([yup.ref("password"),null],
        "Passwords must match").required("Required"),
        acceptedTos:yup.boolean().oneOf([true],"Please accept the terms of service"),
})


// export default basicSchema;