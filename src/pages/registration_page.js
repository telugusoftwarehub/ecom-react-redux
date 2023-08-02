import { InputGroup, InputGroupText, Input, Button } from "reactstrap";
import { registrationForm } from "../forms/registration_form";
const RegistrationPage = () => {

    const validate = (event) => {
        if(event.target.value.length === 0) {
            console.log("Required Validation");
            // event.target
            // setAttribute("invalid")
        }
    }


    return <>
        <h2> Registration Form </h2>
        {
            registrationForm && registrationForm.length > 0 && registrationForm.map((item, index) => {
                return <InputGroup key={index}>
                    <InputGroupText>
                        @
                    </InputGroupText>
                    <Input type={item.type} placeholder={item.label}  onBlur={validate}/>
                </InputGroup>
            })
        }
        <Button> Register </Button>
    </>
}

export default RegistrationPage;