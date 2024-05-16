

  import { EmployeeData } from '../LocalData/Data'
  import { useState } from 'react'
  import Add from './Add'
  import Edit from './Edit'
  import Header from './Header'
  import DataTable from './DataTable'


  
  const EmployeeList = () => {

    const [Employees,setEmployee] = useState(EmployeeData)
    
    const [selectedemployee,setselectedemployee] =useState(null)  
    const [isAdding,setisAdding] = useState(false);

    const [isEdit,setisEdit] = useState(false);

    
    const handleUpdateEmployee = (updatedEmployees: any[]) => {
      setEmployee(updatedEmployees);
      setisEdit(false); // Exit edit mode after updating
    };
  
    
    return (
      <div>   
          {/* <DetailsList items={Employees} /> */}

        {/* it shows main page from them we can render Edit and Add component  */}
        {!isAdding && !isEdit && (<>
          
                                    <Header setisAdding={setisAdding} />     

                                    <DataTable  setSelectedEmployee={setselectedemployee} 
                                                employee={Employees}
                                              setEmployee= {setEmployee}
                                                setisEdit={setisEdit}
                                                  />                     
                                  </>)}

        {/* it render when Adding become true  */}
        {/* it become true when i click on AddEmployee button  */}
        {isAdding && (<>
                      <Add  employee={Employees}
                      
                          setemployee={setEmployee} 
                              setAdd={setisAdding} />
                    </>)}

        {/* it render when Edit value become true */}
        {/* it become true when i click on Edit button  */}
        {isEdit && (<>
                      <Edit   Employee= {Employees}
                             setEmployees={handleUpdateEmployee}
                            selectedemployee={selectedemployee} />
                        
                    </>)}

      </div>
    )
  }

  export default EmployeeList