import React, { useState, useEffect } from 'react';
import { getSupplier, logoutSupplier } from '../services/supplierService';
import { useDispatch, useSelector } from 'react-redux';
import { SET_LOGIN, selectName } from '../redux/features/auth/supplySlice';
import { useHistory } from 'react-router-dom';
import { SET_USER, SET_NAME } from '../redux/features/auth/supplySlice';
import Card from './Card';

const SupplierProfile2 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const name = useSelector(selectName);

  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const logout = async () => {
    await logoutSupplier();
    await dispatch(SET_LOGIN(false));
    history.push('/supplier-login');
  };

  useEffect(() => {
    setIsLoading(true);

    async function getSupplierData() {
      const data = await getSupplier();
      setProfile(data);
      setIsLoading(false);
      await dispatch(SET_USER(data));
      await dispatch(SET_NAME(data.name));
    }
    getSupplierData();
  }, [dispatch]);

  return (
    <>
      <div className="supplier-profile2-container">
        {/* ... */}
        <Card cardClass="card --flex-dir-column">
          <div className="profile-data">
            <div>
              <label htmlFor="companyName"> <b> Company Name: </b></label>
              <input className= "companyInput"   type="text" id="companyName" value={profile?.company_name || ''} readOnly style={{marginLeft:"60px", borderRadius:"20px", textAlign:"center", width:"400px"}} />
            </div>
            <div>
              <label htmlFor="fullName"> <b> Full Name: </b> </label>
              <input
                type="text"
                id="fullName"
                value={`${profile?.first_name || ''} ${profile?.last_name || ''}`}
                style={{marginLeft:"108px", borderRadius:"20px", textAlign:"center"  , width:"400px"}}
                readOnly
              />
            </div>
            <div>
              <label htmlFor="email">  <b> Email: </b> </label>
              <input type="text" id="email" value={profile?.email || ''} style={{marginLeft:"145px", borderRadius:"20px", textAlign:"center" , width:"400px"}} readOnly />
            </div>
            <div>
              <label htmlFor="phoneNumber">  <b> Phone Number: </b> </label>
              <input type="text" id="phoneNumber" value={profile?.mobile || ''} style={{marginLeft:"75px", borderRadius:"20px", textAlign:"center" , width:"400px"}} readOnly />
            </div>
            <div>
              <label htmlFor="companyAddress"> <b> Company Address: </b>  </label>
              <input type="text" id="companyAddress" value={profile?.company_address || ''} style={{marginLeft:"47px", borderRadius:"20px", textAlign:"center" , width:"400px"}} readOnly />
            </div>
          </div>
        </Card>
   {/*     <span><button onClick={logout} style={{ color:'black' , fontWeight : 'bold'}}>Log Out</button></span>    */}
      </div>
    </>
  );
};

export default SupplierProfile2;