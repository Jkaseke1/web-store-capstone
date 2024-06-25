import React from 'react';

function UserAccountPage({ user }) {
  return (
    <div>
      <h1>Welcome, {user?.name}!</h1> {/* Use optional chaining for name */}
      <p>Email: {user?.email}</p>
      <p>Username: {user?.username}</p>
      <p>Account created on: {user?.creationDate}</p>
      {/* Additional account details can be displayed here */}
    </div>
  );
}

export default UserAccountPage;
