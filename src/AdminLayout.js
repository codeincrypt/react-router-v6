import React, {useEffect, useContext} from 'react';
import Header from './Admin/Include/Header'
import Footer from './Admin/Include/Footer'
import Sidebar from './Admin/Include/Sidebar'
import { UserContext } from './App';
import { useNavigate } from 'react-router-dom';

const AdminLayout = ({children}) => {
  let navigate = useNavigate();
  const admin = localStorage.getItem('adminlogin');
  const { dispatch } = useContext(UserContext);
  useEffect(() => {
    if (admin) {
      dispatch({ type: 'ADMIN', payload: admin });
    } else {
      // history.push('/login');
      navigate('/login');
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
        <Header/>
        <div className='col-lg-12'>
        <div className='row'>
          <Sidebar />
          {children}
        </div>
        </div>
        <Footer/>
    </>
  )
}

export default AdminLayout