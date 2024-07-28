import { useState } from "react";

import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from "@mui/material";

import { AddUserr } from "../service/api";
import { useNavigate } from "react-router-dom";

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top: 20px
    }
`

const defaultValue = {
    name: '',
    email: '',
    phone: ''
}

const AddUser = () => {

    const [user, setUser] = useState(defaultValue);

    const navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const AddUserDetails = async () => {
       await AddUserr(user);
       navigate('/all');
    }

    return(
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone" />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={() => AddUserDetails()}>Add User</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;