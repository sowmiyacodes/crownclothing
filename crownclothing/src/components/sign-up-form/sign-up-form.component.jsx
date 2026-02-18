
import {useState} from 'react'
const defaultFormFields = 
{
    displayName : '',
    email : '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = ()=>{
    const [formFields,setFormFields] = useState(defaultFormFields);
    const {displayName,email,password,confirmPassword} = formFields
     
    console.log(formFields);
    const handleChange = (event)=>{
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value});
    };
    return(
        <div>
        <h1>Sign Up Form</h1>
        <form>
            <label>Display Name </label>
            <input type = "text" required onChange={handleChange} name = "displayName" value = {displayName}/>
            <br/> <br/>

            <label>Email </label>
            <input type = "email" required onChange={handleChange} name = "email" value = {email}/>
                        <br/> <br/>

            <label>Password </label>
            <input type = "password" required onChange={handleChange} name = "password" value = {password}/>
            <br/> <br/>

            <label>Confirm Password </label>
            <input type = "password" required onChange={handleChange} name = "confirmPassword" value = {confirmPassword}/>
            <br/> <br/>

            <button type = "submit" >Submit</button>
        </form>
        </div>
    );
}

export default SignUpForm;