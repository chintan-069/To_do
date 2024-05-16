import EmployeeList from "./EmployeeList"
// import ToDoList from "./ToDoList"


const Task = () => {

  return (
    <div>


      <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
        <h1>Task page</h1>




        {/* <NavLink to='/ToDoList'>Home</NavLink> */}
        <EmployeeList />

        {/* <ToDoList /> */}
      </div>

    </div>
  )
}

export default Task