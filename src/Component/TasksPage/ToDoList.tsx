import { Checkbox, Dropdown, IDropdownOption, IStackProps, PrimaryButton, Stack, TextField, } from '@fluentui/react'
import React, { useState } from 'react'
import { Text } from '@fluentui/react/lib/Text';
// import Add, { Addtodo } from './Add';


interface IInput {
    Task: string,
    Assign: string
}
interface IData {
    Task: string,
    Priority: string,
    Assign: string
}

const childernspace: Partial<IStackProps> = {
    tokens: { childrenGap: 25 }
}

const ToDoList = () => {
    const [todoList, setTodoList] = useState<IData[]>([]);
    const [selectedValue, setSelectedValue] = useState('');
    // const [edit,setedit] =useState(todoList);
//   const [isdelete,setisdelete] =useState(false);


    const [inputdata, setinputdata] = useState<IInput>({
        Task: '',
        Assign: ''
    })

    const handleChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // console.log('Hello World..')

        //  const result =e.currentTarget.value
        const { name, value } = event.currentTarget
        setinputdata((prevState) => ({
            ...prevState, [name]: value
        }))
        // console.log(inputdata);

    }


    const handleDropdownChange = (event: React.FormEvent<HTMLDivElement>, item?: IDropdownOption<any>) => {
        if (item) {
            setSelectedValue(item.text as string);
        }
    };



    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        const newTodo= {
            Task: inputdata.Task,
            Priority: selectedValue,
            Assign: inputdata.Assign
        };
        setTodoList([...todoList, newTodo]);



        console.log(inputdata);
        console.log(selectedValue);



        setinputdata({
            Task: '',
            Assign: ''
        })
    }

    const handleEdit =(index:any) =>{
    
        console.log(index);
    //    const  id= index

        
    
    }
    const handleDelete =(index:any) =>{

        console.log(index);
        
    }


    const testText = "Task"
    const priority = "Priority"
    const assign = "Assigned to"
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

            <form onSubmit={handleSubmit}>
                <Stack  {...childernspace} >

                    <Text>{testText}
                        <TextField name='Task' value={inputdata.Task} onChange={handleChange} /></Text>
                    <Text>{priority}
                        <Dropdown
                            placeholder="Required with no label"
                            ariaLabel="Required dropdown example"
                            options={[
                                { key: 'A', text: 'Easy' },
                                { key: 'B', text: 'Medium' },
                                { key: 'C', text: 'Hard' },

                            ]}
                            required={true}
                            styles={{}}
                            onChange={handleDropdownChange}
                        /></Text>

                    <Text>{assign}
                        <TextField name='Assign' value={inputdata.Assign} onChange={handleChange} />
                    </Text>
                    <PrimaryButton style={{width:30}} text='Submit' type='submit' />
                </Stack>
            </form >




            <table border={1} style={{ marginTop: 40 }}>
                <tr>
                    <th>Task</th>
                    <th>Priority</th>
                    <th>Assignrd to</th>
                    <th>Action</th>
                </tr>
                    {todoList.length> 0? ( todoList.map((todo, index) => (
                <tbody>
                        <tr key={index+1}>
                            <td>{todo.Task}</td>
                            <td>{todo.Priority}</td>
                            <td>{todo.Assign}</td>
                            <td>{(<div style={{display:'grid',gridTemplateColumns:'100px 100px' ,justifyContent:'start'}}> <PrimaryButton style={{width:30}} text='Edit' onClick={() => handleEdit(index)}/><PrimaryButton style={{width:30}} text='Delete' onClick={() => handleDelete(index)}/></div>)}
                             <Checkbox />
                             
                            </td>
                        </tr>
                </tbody>
                    ))) : (<><h1>no data Found</h1></>)}
            </table>
        </div>
    )
}

export default ToDoList