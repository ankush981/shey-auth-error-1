"use client";
import Input from '@/components/Input';
import React from 'react';

function Register() {
  const [user, setUser] = React.useState({
    username: "",
    password: "",
    email: "",
  });
  return (
    <div className="flex h-screen bg-gray-200 justify-center items-center">
      <div className="auth-form flex flex-col gap-5">
        <h1>Register</h1>
        <hr />
        <Input
          label="Username"
          type="text"
          name="username"
          value={user.username}
          onChange={e => setUser({ ...user, username: e.target.value })}
          error=""
          placeholder="Username"
        />
      </div>
    </div>
  )
}

export default Register;