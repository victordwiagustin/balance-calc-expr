import './App.css';
import moneyTreeLogo from './assets/money-tree.svg';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold underline text-red-500">
        Title
      </h1>
      <img src={moneyTreeLogo} className="logo" alt="Money" width={100} />
    </MainLayout>
  );
}

export default App;
