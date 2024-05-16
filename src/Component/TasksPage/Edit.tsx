// import { log } from 'console'
import { Text, TextField, PrimaryButton } from '@fluentui/react';
import React, { FormEvent, useState } from 'react';
// import { EmployeeData } from '../LocalData/Data';
// import { EventEmitter } from 'stream';

interface Props {
  selectedemployee: any
  setEmployees: any
  Employee: any
}


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

const Edit: React.FC<Props> = ({ Employee, selectedemployee, setEmployees }) => {

  //  const [inputdata,setinputdata]= useState(selectedemployee)

  console.log("selected id is" + selectedemployee);
  const finddata = Employee.find((data: { id: any; }) => data.id === selectedemployee)

  const [inputvalue, setinputvalue] = useState<IInput>({
    id: finddata?.id ?? "",
    Firstname: finddata?.Firstname ?? "",
    Lastname: finddata?.Lastname ?? "",
    Email: finddata?.Email ?? "",
    Date: finddata?.Date ?? "",
    error: {}
  })




  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    // Update the selected employee data in the Employees array
    const updatedEmployees = Employee.map((emp:{id:any}) => {
      if (emp.id === selectedemployee) {
        return {
          ...emp,
          Firstname: inputvalue.Firstname,
          Lastname: inputvalue.Lastname,
          Email: inputvalue.Email,
          Date: inputvalue.Date
        };
      }
      return emp;
    });

    // Set the updated Employees array to state
    setEmployees(updatedEmployees);
  };

const handlechange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string | undefined): void => {

  console.log('const  not implemen = ted.');

  const { name, value } = event.target as HTMLInputElement
  setinputvalue((prevState) => ({
    ...prevState, [name]: value
  }))

}

return (
  <div>


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

export default Edit