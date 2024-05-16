import './App.css'
import About from './Component/About';
import Home from './Component/Home';
// import Navbar from './Component/Navbar';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Contact from './Component/Contact';
import Task from './Component/TasksPage/Task';
import Erros from './Component/Erros';
import Navbar from './Component/Navbar';
import ToDoList from './Component/TasksPage/ToDoList';
import EmployeeList from './Component/TasksPage/EmployeeList';
import PaymentsMainPage from './Component/PaymentMethods/PaymentMainPage';
import Sendmail from './Component/SendMailservice/Sendmail';
// import Sidebar from './Component/Sidebar';

const App = () => {
  return (
    // <div>

    <BrowserRouter>
     <Navbar />
     
      <Routes>

        <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home  />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Task' element={<Task />} />
          <Route path='/todo' element={<ToDoList />} />
           <Route path='/Employee' element={<EmployeeList/>}/>
           <Route path='/PaymentMainPage' element={<PaymentsMainPage/>}/>
           <Route path='/Sendmail' element={<Sendmail/>}/>
          <Route path='*' element={<Erros />} />


        {/* </Route> */}
      </Routes>

    </BrowserRouter>



  );
}

export default App;
