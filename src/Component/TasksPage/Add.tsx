import { TextField, Text, PrimaryButton } from '@fluentui/react';
import React, { useState } from 'react'
import { EmployeeData } from '../LocalData/Data';

interface IInput {
    id: string,
    Firstname: string,
    Lastname: string,
    Email: string,
    Date: string,
    error: {
        id?: string,
        Firstname?: string,
        Lastname?: string,
        Email?: string,
        Date?: string,
    }
}

interface Props {
    employee:any
    setemployee: any
    setAdd: any
}

const Add: React.FC<Props> = ({ employee,setemployee, setAdd }) => {


    const handlechange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
        // console.log('changed event...');

        const { name, value } = e.currentTarget as HTMLInputElement;
        setinputvalue((prevState) => ({
            ...prevState, [name]: value
        }))
    }




    const [inputvalue, setinputvalue] = useState<IInput>({
        id: '',
        Firstname: '',
        Lastname: '',
        Email: '',
        Date: '',
        error: {}
    })

    const ValidateForm = () => {


        let errors: IInput['error'] = {};
        if (!inputvalue.id) {
            errors.id = 'No is required';
        }
        else if (typeof inputvalue.id !== 'string') {
            errors.id = "It shouldn't be character";
        }

        if (!inputvalue.Firstname) {
            errors.Firstname = ' First name is required';
        } else if (inputvalue.Firstname.trim() === '') {
            errors.Firstname = 'First Name cannot be empty';
        }

        if (!inputvalue.Lastname) {
            errors.Lastname = 'Last Name is required';
        } else if (inputvalue.Lastname.trim() === '') {
            errors.Lastname = 'last Name cannot be empty';
        }

        if (!inputvalue.Email) {
            errors.Email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(inputvalue.Email)) {
            errors.Email = 'Invalid Email format';
        }
        if (!inputvalue.Date) {
            errors.Date = 'Date is required'
        } else if (inputvalue.Date.trim() === '') {
            errors.Date = 'Date should not be an empty'
        }


        setinputvalue({ ...inputvalue, error: errors });

        return errors

    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        console.log('submitted...');
        // if (ValidateForm()) {
        const errors = ValidateForm();
        if (Object.keys(errors).length === 0) {


            // e.preventDefault(); 
            // EmployeeData.push(inputvalue);
            setemployee([inputvalue,...employee])
            console.log(EmployeeData);
            
            console.log(inputvalue);
            setinputvalue({
                id: '',
                Firstname: '',
                Lastname: '',   
                Email: '',
                Date: '',
                error: {}
            })
            // setemployee(inputvalue)
            setAdd(false)


        }
        // else{
        //   setAdd(false)
        // }
        // setAdd(false    )
    };


    return (
        <div className='container'>
            <h1> Add </h1>
            <div style={{ display: 'grid', justifyContent: 'center' }}>

                <form onSubmit={handleSubmit} style={{ width: 300 }}>
                    <Text> NO <TextField name='id' value={inputvalue.id} onChange={handlechange} errorMessage={inputvalue.error.id} /></Text>
                    <Text>First name<TextField name='Firstname' value={inputvalue.Firstname} onChange={handlechange} errorMessage={inputvalue.error.Firstname} /></Text>
                    <Text>Last name  <TextField name='Lastname' value={inputvalue.Lastname} onChange={handlechange} errorMessage={inputvalue.error.Lastname} /></Text>
                    <Text>Email<TextField name='Email' value={inputvalue.Email} onChange={handlechange} errorMessage={inputvalue.error.Email} /></Text>
                    <Text>Date <TextField name='Date' value={inputvalue.Date} onChange={handlechange} errorMessage={inputvalue.error.Date} /></Text>

                    <PrimaryButton text='Submit' type='submit' style={{ left: 100, top: 30, width: 20 }}></PrimaryButton>
                </form>
            </div>
        </div>
    )
}

export default Add;


export const Addtodo = () => {
    return (
        <div className='container'>
            <h1> Add  to do</h1>

        </div>
    )
}

