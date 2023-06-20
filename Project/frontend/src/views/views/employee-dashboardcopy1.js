import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet'

import './employee-dashboardcopy1.css'
import { getEmployee, logoutEmployee } from '../services/authService'
import { useDispatch, useSelector} from 'react-redux'
import { SET_LOGIN, selectName } from '../redux/features/auth/authSlice'
import { Link, useHistory } from 'react-router-dom'
import { SET_USER } from '../redux/features/auth/authSlice'
import { SET_NAME } from '../redux/features/auth/authSlice'
import { toast } from 'react-toastify'



const EmployeeDashboardcopy1 = (props) => {

  const dispatch = useDispatch();
  const history = useHistory();
  const name = useSelector(selectName)

   const logout = async () => {
             await logoutEmployee();
             await dispatch(SET_LOGIN(false));
             history.push("/system-login-selection");
     }

   //getting profile 
   const [profile, setProfile] = useState(null)
   const [isLoading, setIsLoading] = useState(false)

   useEffect(()=>{
   
    setIsLoading(true)

    async function getEmployeeData() {
      const data = await getEmployee()
      console.log(data)

      setProfile(data)
      setIsLoading(false)
      dispatch(SET_USER(data))
      dispatch(SET_NAME(data.first_name))
    }

    getEmployeeData();

   }, [dispatch])
   
   //downloading pdf of employee
   const handleDownloadPDF = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/employees/getEmpID/${id}`, {
        responseType: 'blob'
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'employee-id-card.pdf');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (err) {
      console.error(err);
      toast.error("Could not download pdf, Please try again.")
    }
  };

  return (
    <div className="employee-dashboardcopy1-container">
      <Helmet>
        <title>Shantha Motors - Employee Dashboard</title>
      </Helmet>
      <div className="employee-dashboardcopy1-employee-dashboardcopy1">
        <img
          src="/playground_assets/blurredbackground11797-am3n-1600w.png"
          alt="blurredBackground11797"
          className="employee-dashboardcopy1-blurred-background1"
        />
        <div className="employee-dashboardcopy1-biqrcode"></div>
        <img
          src="/playground_assets/rectangle311765-9d1c-400h.png"
          alt="Rectangle311765"
          className="employee-dashboardcopy1-rectangle31"
        />
        <div className="employee-dashboardcopy1-materialsymbolslocationon"></div>
        <img
          src="/playground_assets/rectangle21767-qjsk-200h.png"
          alt="Rectangle21767"
          className="employee-dashboardcopy1-rectangle2"
        />
        <img
          src="/playground_assets/rectangle31768-qfut-1100h.png"
          alt="Rectangle31768"
          className="employee-dashboardcopy1-rectangle3"
        />
        <img
          src="/playground_assets/pnglogoimage11769-uvd-200h.png"
          alt="PNGLogoimage11769"
          className="employee-dashboardcopy1-pn-logoimage1"
        />
       
        <img
          src="/playground_assets/rectangle71761-a7j4-200h.png"
          alt="Rectangle71761"
          className="employee-dashboardcopy1-rectangle7"
        />
        <img
          src="/playground_assets/rectangle321761-ncm-200h.png"
          alt="Rectangle321761"
          className="employee-dashboardcopy1-rectangle32"
        />
        <img
          src="/playground_assets/rectangle221761-nly-200h.png"
          alt="Rectangle221761"
          className="employee-dashboardcopy1-rectangle22"
        />
        <span className="employee-dashboardcopy1-text05">
          <span><Link to="/change-paaswordcopy">Change Password</Link></span>
        </span>
        <span className="employee-dashboardcopy1-text07">
          <span><Link to="/employee-updatecopy1">Edit Details</Link></span>
        </span>
        <span className="employee-dashboardcopy1-text09">
          <span><button style={{ color:'white' , fontWeight : 'bold'}}
              onClick={() => handleDownloadPDF(profile?._id)}>
            Get My ID</button></span>
        </span>
        <img
          src="/playground_assets/rectangle101762-kail-200h.png"
          alt="Rectangle101762"
          className="employee-dashboardcopy1-rectangle10"
        />
        <img
          src="/playground_assets/rectangle151762-luzl-200h.png"
          alt="Rectangle151762"
          className="employee-dashboardcopy1-rectangle15"
        />
        <img
          src="/playground_assets/rectangle161762-47rp-200h.png"
          alt="Rectangle161762"
          className="employee-dashboardcopy1-rectangle16"
        />
        <img
          src="/playground_assets/rectangle171762-dud-200h.png"
          alt="Rectangle171762"
          className="employee-dashboardcopy1-rectangle17"
        />
        <img
          src="/playground_assets/rectangle181762-h35-200h.png"
          alt="Rectangle181762"
          className="employee-dashboardcopy1-rectangle18"
        />
        <img
          src="/playground_assets/rectangle191762-stx-200h.png"
          alt="Rectangle191762"
          className="employee-dashboardcopy1-rectangle19"
        />
        <img
          src="/playground_assets/rectangle201762-b9nd-200h.png"
          alt="Rectangle201762"
          className="employee-dashboardcopy1-rectangle20"
        />
        <img
          src="/playground_assets/rectangle211762-pdod-200h.png"
          alt="Rectangle211762"
          className="employee-dashboardcopy1-rectangle21"
        />
        <span className="employee-dashboardcopy1-text11">
          <span><button style={{ color:'black' , fontWeight : 'bold'}}>Employee</button></span>
        </span>
        <span className="employee-dashboardcopy1-text13">
          <span><Link to="/view-customers">Customer</Link></span>
        </span>
        <span className="employee-dashboardcopy1-text15">
          <span><Link to="/supply-dashboard2">Supplier</Link></span>
        </span>
        <span className="employee-dashboardcopy1-text17">
          <span><button style={{ color:'black' , fontWeight : 'bold'}}>Renatals</button></span>
        </span>
        <span className="employee-dashboardcopy1-text19">
          <span><Link to="/salesmanager-dashboard">Spare Parts</Link></span>
        </span>
        <span className="employee-dashboardcopy1-text21">
          <span><Link to="/invent-dashboard">Inventory</Link></span>
        </span>
        <span className="employee-dashboardcopy1-text23">
          <span><button style={{ color:'black' , fontWeight : 'bold'}}>Payment</button></span>
        </span>
        <span className="employee-dashboardcopy1-text25">
          <span><Link to="/view-settledbills-dashboard" >Utility Bills</Link></span>
        </span>
        <img
          src="/playground_assets/rectangle141763-y0fn-200h.png"
          alt="Rectangle141763"
          className="employee-dashboardcopy1-rectangle14"
        />
        <span className="employee-dashboardcopy1-text27">
          <span><button onClick={logout} style={{ color:'black' , fontWeight : 'bold'}}>Log Out</button></span>
        </span>
        <button>
        <img
          src="/playground_assets/mdiaccount1763-97sl.svg"
          alt="mdiaccount1763"
          className="employee-dashboardcopy1-mdiaccount"
        />
        </button>
        <div className="employee-dashboardcopy1-mdiaccount1">
          <div className="employee-dashboardcopy1-materialsymbolspersonplay"></div>
        </div>
        <img
          src="/playground_assets/materialsymbolsdownloadrounded1764-z3ew.svg"
          alt="materialsymbolsdownloadrounded1764"
          className="employee-dashboardcopy1-materialsymbolsdownloadrounded"
        />
        <img
          src="/playground_assets/ellipse41764-21t-400h.png"
          alt="Ellipse41764"
          className="employee-dashboardcopy1-ellipse4"
        />
        <img
          src="/playground_assets/ellipse31764-9bis-300h.png"
          alt="Ellipse31764"
          className="employee-dashboardcopy1-ellipse3"
        />
        
        {/*"playground_assets/ellipse11764-5po-300w.png"*/}
        <img
          src={profile?.profile_pic}
          alt="profile_pic"
          className="employee-dashboardcopy1-ellipse1"
          style={{borderRadius: "150px", height:"272px", width:"275px"}}
        />
        <img
          src="/playground_assets/ellipse21764-fkd7-300h.png"
          alt="Ellipse21764"
          className="employee-dashboardcopy1-ellipse2"
        />
        <span className="employee-dashboardcopy1-text29">
          <span>{profile?.first_name} {profile?.last_name}</span>
        </span>
        <span className="employee-dashboardcopy1-text31">
          <span>{profile?.designation}</span>
        </span>
        <span className="employee-dashboardcopy1-text33">
          <span>
            “Shantha Motors - For Quality Sapre Parts And Renatal Services ”
          </span>
        </span>
        <img
          src="/playground_assets/icroundmarkemailunread1765-cyra.svg"
          alt="icroundmarkemailunread1765"
          className="employee-dashboardcopy1-icroundmarkemailunread"
        />
        <img
          src="/playground_assets/rectangle331765-5278-200h.png"
          alt="Rectangle331765"
          className="employee-dashboardcopy1-rectangle33"
        />
        <img
          src="/playground_assets/rectangle351765-48jll-200h.png"
          alt="Rectangle351765"
          className="employee-dashboardcopy1-rectangle35"
        />
        <img
          src="/playground_assets/rectangle361765-6kks-200h.png"
          alt="Rectangle361765"
          className="employee-dashboardcopy1-rectangle36"
        />
        <img
          src="/playground_assets/rectangle341765-mtt-200h.png"
          alt="Rectangle341765"
          className="employee-dashboardcopy1-rectangle34"
        />
        <span className="employee-dashboardcopy1-text35">
          <span>{profile?.email}</span>
        </span>
        <span className="employee-dashboardcopy1-text37">
          <span>+94 {profile?.mobile}</span>
        </span>
        <span className="employee-dashboardcopy1-text39">
          <span>Joined on 14th April 2023</span>
        </span>
        <span className="employee-dashboardcopy1-text41">
          <span>{profile?.address}</span>
        </span>
        <img
          src="/playground_assets/mdiaddressmarker1766-k1q.svg"
          alt="mdiaddressmarker1766"
          className="employee-dashboardcopy1-mdiaddressmarker"
        />
        <img
          src="/playground_assets/mdimobilephone1766-hsm.svg"
          alt="mdimobilephone1766"
          className="employee-dashboardcopy1-mdimobilephone"
        />
        <img
          src="/playground_assets/materialsymbolsdaterange1766-iiu.svg"
          alt="materialsymbolsdaterange1766"
          className="employee-dashboardcopy1-materialsymbolsdaterange"
        />
        <div className="employee-dashboardcopy1-group">
          <img
            src="/playground_assets/vector1766-uh1.svg"
            alt="Vector1766"
            className="employee-dashboardcopy1-vector"
          />
          <img
            src="/playground_assets/vector1766-9fhi.svg"
            alt="Vector1766"
            className="employee-dashboardcopy1-vector1"
          />
          <img
            src="/playground_assets/vector1767-cvq8.svg"
            alt="Vector1767"
            className="employee-dashboardcopy1-vector2"
          />
          <img
            src="/playground_assets/vector1767-x3te.svg"
            alt="Vector1767"
            className="employee-dashboardcopy1-vector3"
          />
          <img
            src="/playground_assets/vector1767-lvac.svg"
            alt="Vector1767"
            className="employee-dashboardcopy1-vector4"
          />
        </div>
        <img
          src="/playground_assets/rectangle431767-4dpc-200h.png"
          alt="Rectangle431767"
          className="employee-dashboardcopy1-rectangle43"
        />
        <span className="employee-dashboardcopy1-text43">
          <span>Copyright ©2023 Shantha Motors®. All rights reserved.</span>
        </span>
        <img
          src="/playground_assets/rectangle511856-kjd-200h.png"
          alt="Rectangle511856"
          className="employee-dashboardcopy1-rectangle51"
        />
        <span className="employee-dashboardcopy1-text45">
          <span>WELCOME {name} !</span>
        </span>
      </div>
    </div>
  )
}

export default EmployeeDashboardcopy1
