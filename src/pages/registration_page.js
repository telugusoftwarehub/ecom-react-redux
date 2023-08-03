import { useState } from "react";
import { InputGroup, InputGroupText, Input, Button } from "reactstrap";
import { registrationForm } from "../forms/registration_form";

const RegistrationPage = () => {
    const [regFormJson, setRegFormJson] = useState(registrationForm);

    const validate = (event) => {
        console.log('event.target: ', event.target)
        if(event.target.value.length === 0) {
            const formJson = regFormJson;
            formJson.forEach((item) => {
                if(event.target.name === item.name) {
                    item.isValid = false;
                }
            })
            setRegFormJson([...formJson])
        }
    }


    return <>
        <h2> Registration Form </h2>
        {
            registrationForm && registrationForm.length > 0 && regFormJson.map((item, index) => {
                const { isValid } = item;
                return <InputGroup key={index}>
                    <InputGroupText>
                        @
                    </InputGroupText>
                    {
                        isValid && <Input valid name={item.name} type={item.type} placeholder={item.label}  onBlur={validate}/>
                    }
                    {
                        !isValid && <Input invalid name={item.name} type={item.type} placeholder={item.label}  onBlur={validate}/>
                    }
                    {/* <Input type={item.type} placeholder={item.label}  onBlur={validate}/> */}
                </InputGroup>
            })
        }
        <Button> Register </Button>
    </>
}

export default RegistrationPage;