import React from 'react';
import Register from './Rigester/Register';
import Login from './LOGIN/Login';
import Leave from './Leave/Leave';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main/Main';
import Profile from './Main/Profile';
import View from './Main/View';
import Start from './Main/Start';
import See_Recorde from './Admin/See_Recorde';
// import { useAuth0 } from "@auth0/auth0-react";
// import ProtectedRoute from './protectedroutes/Protected'; // Import the ProtectedRoute component
import LoginForm from './zustand/implement';
import DisplayForm from './zustand/pass';
// import UserContextProvider from './Context/Usercontext';
// import   from   './Context/Usercontextprovider';

const App = () => {
  return (
    // <UserContextProvider >

    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/admin" element={<See_Recorde />} />i
        {/* Protect routes */}
        <Route path="/home" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/view" element={<View />} />
        <Route path="/leave" element={<Leave />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        {/* <Implement/>     */}
        <Route path='/form' element={<LoginForm />} />
        <Route path='/display' element={<DisplayForm />} />
      </Routes>
    </Router>
    //     </UserContextProvider>
  );
};

export default App;
