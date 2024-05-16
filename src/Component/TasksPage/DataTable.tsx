import { Checkbox, PrimaryButton } from '@fluentui/react';
import React from 'react'
interface Props {
    employee: {
        id: string;
        Firstname: string;
        Lastname: string;
        Email: string;
        Date: string;
    }[];
    setisEdit: React.Dispatch<React.SetStateAction<boolean>>;
    setEmployee: any;
    setSelectedEmployee: any
}
const DataTable: React.FC<Props> = ({ employee, setSelectedEmployee, setEmployee, setisEdit }) => {
    console.log(employee);


    const handleEdit = (id: any) => {
        setisEdit(true);
        setSelectedEmployee(id)
        console.log(id);

    }

    const handleDelete = (id: any) => {
        console.log("Delete is called");
        console.log(id);

        const newArray = employee.filter((emp) => emp.id !== id)
        console.log(id + " is deleted");
        console.log(newArray)

        setEmployee(newArray)


    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <h1>   DataTable</h1>
                <table border={1} style={{ borderCollapse: 'collapse', borderSpacing: '100px' }}>
                    <tr >
                        <td style={{ padding: '15px' }}>No</td>
                        <td style={{ padding: '15px' }}>First Name</td>
                        <td style={{ padding: '15px' }}>Last Name</td>
                        <td style={{ padding: '15px' }}>Email</td>
                        <td style={{ padding: '15px' }}>Date </td>
                        <td style={{ padding: '15px' }}>Action </td>
                    </tr>
                    <tbody style={{}}>
                        {employee.length > 0 ? (
                            employee.map((employee, index) => (

                                <>
                                    <tr key={employee.id}>

                                        <td style={{ padding: '15px' }}>{index + 1}</td>
                                        <td style={{ padding: '15px' }}>{employee.Firstname}</td>
                                        <td style={{ padding: '15px' }}>{employee.Lastname}</td>
                                        <td style={{ padding: '15px' }}>{employee.Email}</td>
                                        <td style={{ padding: '15px' }}>{employee.Date}</td>
                                            <td style={{ display: 'grid', gridTemplateColumns: '90px 90px 30px', justifyContent: 'start', alignItems: 'center',padding:'15px' }}>
                                                <PrimaryButton text='Edit' onClick={() => {
                                                    handleEdit(employee.id);

                                                }} style={{ width: 30, border: 'inset 18px #a4b3ff' }} />
                                                <PrimaryButton text='Delete' onClick={() => {
                                                    handleDelete(employee.id);

                                                }} style={{ width: 30, border: 'inset 18px #a4b3ff' }} />
                                                <Checkbox name=''     ></Checkbox>
                                            </td>
                                    </tr>
                                </>
                            ))


                        ) : (<>
                            <h1> No data found</h1>
                        </>)}
                    </tbody>
                </table>

            </div>


        </div>
    )
}

export default DataTable