// src/components/DisplayForm.jsx
import React, { useState } from 'react';
import useLoginStore from './Zustand';
const DisplayForm = () => {
  const { email, password } = useLoginStore();
  console.log('DisplayForm - Email:', email);
  console.log('DisplayForm - Password:', password);
  return (
    <div className="max-w-sm mx-auto p-4 shadow-md mt-8">
      <h2 className="text-xl font-bold mb-4">Display Form 2</h2>
      <p className="text-sm font-medium">Email: {email || 'Not provided'}</p>
      <p className="text-sm font-medium">Password: {password ? '****' : 'Not provided'}</p>
      <p>(Password is hidden for security reasons)</p>
    </div>
  );
};
export default DisplayForm;