import { styled, TextField, FormControl, Button } from "@mui/material";

import { useForm } from "react-hook-form"
import { getInputState, required, validatePassword, validateCPassword } from '../../utils'


const Wrapper = styled("form")`
  width: 400px;
  height: auto;
  border: 1px solid #c1c2c3;
  padding: 0 1rem 1rem 1rem;
  border-radius: 4px;
  color:black;
  background-color:white;
 
`;

export const FormSignUp = ({ handleClick }) => {
    const { register, handleSubmit, formState, getValues } = useForm();

    const onSubmit = async (value) => {
        handleClick(value.email, value.password)
    };

    return (
        <Wrapper onSubmit={handleSubmit(onSubmit)}>
            <h4>Регистрация</h4>

            <FormControl sx={{ width: "100%", mb: 1, }}>
                <TextField
                    label="e-mail"
                    variant="outlined"
                    type="email"
                    style={{ color: 'white' }}
                    {...register("email", { required: required() })}
                    {...getInputState(formState, "email")}
                />
            </FormControl>

            <FormControl sx={{ width: "100%", mb: 1 }}>
                <TextField
                    label="Пароль"
                    variant="outlined"
                    type="password"
                    {...register("password", {
                        required: required(),
                        validate: validatePassword
                    })}
                    {...getInputState(formState, "password")}
                />
            </FormControl>
            <FormControl sx={{ width: "100%", mb: 1 }}>
                <TextField
                    label="Повторите пароль"
                    variant="outlined"
                    type="password"
                    {...register("cPassword", {
                        required: required(),
                        validate: validateCPassword(getValues("password"))
                    })}
                    {...getInputState(formState, "cPassword")}
                />
            </FormControl>

            <FormControl sx={{ width: "100%", mb: 1 }}>
                <Button type="submit" variant="contained" style={{ backgroundColor: "black" }}>
                    <span className='submit-sign-up_text'>Регистрация</span>

                </Button>
            </FormControl>

        </Wrapper>
    );
}
