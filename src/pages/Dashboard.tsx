import React from 'react';
import MainLayout from '../layouts/MainLayout';
import moneyTreeLogo from '../assets/money-tree.svg';

const Dashboard: React.FC = () => {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold underline text-red-500">
        Dashboard
      </h1>
      <img src={moneyTreeLogo} className="logo" alt="Money" width={100} />
      <div>
        <h1>Welcome to the Dashboard</h1>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
