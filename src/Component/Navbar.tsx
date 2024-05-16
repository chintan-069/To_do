// import { NavLink } from 'react-router-dom'
// import logo from '../Component/images/logo.svg';
// import '../Component/Components CSS/Navbar.css';
// import Profile from './images/Profile.svg'
// import Sidebar from './Sidebar';
// import { useState } from 'react';
// import iconmenu from '../Component/images/iconmenu.svg'
// import { log } from 'console';


// const Navbar = () => {

//   const [isopen, setisopen] = useState(false);

//   const handlechange = () => {
//     console.log('clicked..');

//     setisopen(!isopen)
//   } 

//   return (

//     <div>

//       <div className="Nav">

//         <img src={logo} className="App-logo" alt="logo" />

//         <div className="Nav Nav2">

//           <NavLink className='Nav-items' to='/'>Home</NavLink>
//           <NavLink className='Nav-items' to='/About'>About</NavLink>
//           <NavLink className='Nav-items' to='/Contact'>Contact</NavLink>

//           <NavLink className='Nav-items' to='/Task'>New Task</NavLink>
//         </div>

//         <button onClick={handlechange} style={{width:"50px",height:"50px"}}>
// <img className='Sidebar' src={iconmenu} alt="" style={{ height: "100%", width: "100%"  ,alignItems:'center'}} />
// </button>
// </div>


//         {isopen &&

//           (<><div className='Sidebar'>
//             <Sidebar />
//           </div>
//           </>)
//         }
//         <img src={Profile} alt="" height='35px' width={'35px'} style={{ marginLeft: 'auto', borderRadius: 40, borderColor: 'white', marginRight: 20, marginTop: 10, backgroundColor: 'white' }} />





//     </div>
//   )
// }

// export default Navbar

// import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Component/images/logo.svg';
import '../Component/Components CSS/Navbar.css';
import Profile from './images/Profile.svg';
// import Sidebar from './Sidebar';
import { useState } from 'react';
import iconmenu from '../Component/images/iconmenu.svg';
// import { log } from 'console';
import Closemenu from '../Component/images/Cancle.svg'

const Navbar = () => {
  const [isopen, setisopen] = useState<boolean>(false);

  const handlechange = () => {
    // console.log('clicked..', isopen);

    setisopen(!isopen);
  };
  // console.log("after", isopen);

  // useEffect(() => {
  //   // Close sidebar when component mounts
  //   setisopen(false);
  // }, []);

  return (
    <div style={{ margin: 0, padding: 0 }}>
      <div className="Nav">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Nav Nav2">
          <NavLink className='Nav-items' to='/'>Home</NavLink>
          <NavLink className='Nav-items' to='/About'>About</NavLink>
          <NavLink className='Nav-items' to='/Contact'>Contact</NavLink>
          {/* <NavLink className='Nav-items' to='/Task'>Tasks</NavLink> */}
        </div>
        <img src={Profile} alt="" height='35px' width={'35px'} style={{ marginLeft: 'auto', borderRadius: 40, borderColor: 'white', marginRight: 20, marginTop: 0, backgroundColor: 'white' }} />
        <button onClick={handlechange} style={{ width: "39px", height: "39px", backgroundColor: "transparent", display: 'flex', justifyContent: 'center',border:0 }}>
          <img src={iconmenu} alt="" style={{ height: "100%", width: "100%", alignItems: 'center' }} />
        </button>
      </div>
      {/* {isopen === true&& <Sidebar isopen={isopen} toggleSidebar={handlechange} /> } Render Sidebar based on the current value of isopen */}

      <div className={`sidebar ${isopen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <button className="toggle-button" onClick={handlechange}>
            {/* Use an icon or text to toggle the sidebar */}
            <img src={Closemenu} alt="" style={{ height: "100", width: "100", color: 'white', alignItems: 'center' }} />
          </button>
        </div>
        <div className="sidebar-content">
          {/* Add content for the sidebar */}
          <ul>
            <li><NavLink  to='/' >Home</NavLink></li>
            <li><NavLink  to='/About'>About</NavLink></li>
            <li><NavLink  to='/Contact'>Contact</NavLink></li>
            <li><NavLink  to='/Task'>Tasks</NavLink></li>
            <li><NavLink  to='/PaymentMainPage'>Payment</NavLink></li>
            <li><NavLink  to='/Sendmail'>Mail Services</NavLink></li>
            {/* <li><NavLink  to='/Task'  ></NavLink></li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
