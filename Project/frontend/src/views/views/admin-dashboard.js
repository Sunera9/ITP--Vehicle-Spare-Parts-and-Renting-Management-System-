import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Helmet } from 'react-helmet'

import './admin-dashboard.css'
import { logoutEmployee } from '../services/authService'
import { useDispatch, useSelector} from 'react-redux'
import { SET_LOGIN } from '../redux/features/auth/authSlice'
import { Link, useHistory } from 'react-router-dom'
import { FaTrashAlt } from 'react-icons/fa';
import { employee } from '../redux/employee'
import { toast } from 'react-toastify'
import Search from './search';
import { FILTER_EMPLOYEE, selectFilteredEmployee } from '../redux/features/auth/filterSlice';


const AdminDashboard = () => {
  const dispatch = useDispatch();
  const history = useHistory();

   const logout = async () => {
             await logoutEmployee();
             await dispatch(SET_LOGIN(false));
             history.push("/system-login-selection");
     }


     const [employees, setEmployees] = useState([]);

     useEffect(() => {
       // fetch employees data
       const fetchData = async () => {
         const response = await fetch("http://localhost:5000/api/employees/getAll");
         const data = await response.json();
         setEmployees(data.employee);
       };
       fetchData();
     }, []);

    
     //deleting an employee record
    function onDelete(id) {
      axios.delete(`http://localhost:5000/api/employees/deleteEmployee/${id}`).then(() => {
        setEmployees(employees.filter((employee) => employee._id !== id));
        toast.warning("Employee details deleted!")
      }).catch((error) => {
        console.error(error);
      });
    }

    const [search, setSearch] = useState("")
    const fliteredEmployee = useSelector(selectFilteredEmployee)

    const dispatch2 = useDispatch()

    useEffect(()=>{

      dispatch2(FILTER_EMPLOYEE({employees, search}))
    },[employees, search, dispatch2])
   

    console.log(employees)

  return (
    <div className="admin-dashboard-container">
      <Helmet>
        <title>Shantha Motors - Admin Dashboard</title>
      </Helmet>
      <div className="admin-dashboard-admin-dashboard">
        <img
          src="/playground_assets/rectangle23132-xdwfd-200h.png"
          alt="Rectangle23132"
          className="admin-dashboard-rectangle2"
        />
        <img
          src="/playground_assets/rectangle33133-gpf-1100h.png"
          alt="Rectangle33133"
          className="admin-dashboard-rectangle3"
        />
        <img
          src="/playground_assets/pnglogoimage13136-94rq-200h.png"
          alt="PNGLogoimage13136"
          className="admin-dashboard-pn-logoimage1"
        />
        <span className="admin-dashboard-text">
          <span>EMPLOYEE  MANAGEMENT</span>
        </span>
       {/** <img
          src="/playground_assets/rectangle63138-uffla-200h.png"
          alt="Rectangle63138"
          className="admin-dashboard-rectangle6"
        /> */}
        <span>
          <span>
            <Search value={search} onChange={(e) => setSearch(e.target.value)}/>
          </span>
        </span>
         <img
          src="/playground_assets/icons8search2413140-60dg-200h.png"
          alt="icons8search2413140"
          className="admin-dashboard-icons8search241"
        />
        <img
          src="/playground_assets/rectangle73141-7yon-200h.png"
          alt="Rectangle73141"
          className="admin-dashboard-rectangle7"
        />
        <img
          src="/playground_assets/rectangle223210-vlkv-200h.png"
          alt="Rectangle223210"
          className="admin-dashboard-rectangle22"
        />
        <span className="admin-dashboard-text04">
          <span><Link to="/add-new-employee">Add new emp</Link></span>
        </span>
        <span className="admin-dashboard-text06">
          <span><button type="submit" style={{ color:'white' , fontWeight : 'bold'}}>
            Download Report</button></span>
        </span>
        <img
          src="/playground_assets/rectangle103147-k5h9-200h.png"
          alt="Rectangle103147"
          className="admin-dashboard-rectangle10"
        />
        <img
          src="/playground_assets/rectangle153194-3sh-200h.png"
          alt="Rectangle153194"
          className="admin-dashboard-rectangle15"
        />
        <img
          src="/playground_assets/rectangle163196-f5m-200h.png"
          alt="Rectangle163196"
          className="admin-dashboard-rectangle16"
        />
        <img
          src="/playground_assets/rectangle173198-31pn-200h.png"
          alt="Rectangle173198"
          className="admin-dashboard-rectangle17"
        />
        <img
          src="/playground_assets/rectangle183200-uw4-200h.png"
          alt="Rectangle183200"
          className="admin-dashboard-rectangle18"
        />
        <img
          src="/playground_assets/rectangle193202-xqe6-200h.png"
          alt="Rectangle193202"
          className="admin-dashboard-rectangle19"
        />
        <img
          src="/playground_assets/rectangle203204-0fa9-200h.png"
          alt="Rectangle203204"
          className="admin-dashboard-rectangle20"
        />
        <img
          src="/playground_assets/rectangle213206-icxr-200h.png"
          alt="Rectangle213206"
          className="admin-dashboard-rectangle21"
        />
        <span className="admin-dashboard-text08">
          <span><Link to="/employee-dashboardcopy1">Employee</Link></span>
        </span>
        <span className="admin-dashboard-text10">
          <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Customer</button></span>
        </span>
        <span className="admin-dashboard-text12">
          <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Supplier</button></span>
        </span>
        <span className="admin-dashboard-text14">
          <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Rentals</button></span>
        </span>
        <span className="admin-dashboard-text16">
          <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Spare Parts</button></span>
        </span>
        <span className="admin-dashboard-text18">
          <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Inventory</button></span>
        </span>
        <span className="admin-dashboard-text20">
          <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Payment</button></span>
        </span>
        <span className="admin-dashboard-text22">
          <span><button type="submit" style={{ color:'black' , fontWeight : 'bold'}}>Utility Bills</button></span>
        </span>
        <img
          src="/playground_assets/rectangle143159-drwi-200h.png"
          alt="Rectangle143159"
          className="admin-dashboard-rectangle14"
        />
        <span className="admin-dashboard-text24">
          <span><button onClick={logout} style={{ color:'black' , fontWeight : 'bold'}}>Log Out</button></span>
        </span>
        <img
          src="/playground_assets/mdiaccount3163-sn9.svg"
          alt="mdiaccount3163"
          className="admin-dashboard-mdiaccount"
        />
        <img
          src="/playground_assets/materialsymbolsadd3214-bqm.svg"
          alt="materialsymbolsadd3214"
          className="admin-dashboard-materialsymbolsadd"
        />
        <img
          src="/playground_assets/materialsymbolsdownloadrounded3218-o92.svg"
          alt="materialsymbolsdownloadrounded3218"
          className="admin-dashboard-materialsymbolsdownloadrounded"
        />
        <img
          src="/playground_assets/rectangle445914-w8bp-200h.png"
          alt="Rectangle445914"
          className="admin-dashboard-rectangle44"
        />
        
        {/**displaying Employees */}
        <span  className='admin-dashboard-frame35'>
        <table id='emp'>
           <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile No</th>
                <th>Designation</th>
                <th>Action</th>
              </tr> 
          </thead>
      <tbody>
      {Array.isArray(fliteredEmployee) && fliteredEmployee.map((employee) => {
        console.log(employee)
        return(
          
          <tr key={employee._id} >
             <td>{employee.first_name}</td>
             <td>{employee.email}</td>
             <td>{employee.mobile}</td>
            <td>{employee.designation}</td>
            <td><button onClick={() => onDelete(employee._id)}>
            <span>
              <FaTrashAlt size={18} color='#4B259B' 
                onMouseOver={({target})=>target.style.color="red"}
                onMouseOut={({target})=>target.style.color="#4B259B"}/>
            </span>
            </button></td>
            </tr>
                )
      })}  
         </tbody>
         </table>
        </span>


        <span className="admin-dashboard-text26">
          <span>Copyright ©2023 Shantha Motors®. All rights reserved.</span>
        </span>
        </div>
    </div>
  )
}

export default AdminDashboard
