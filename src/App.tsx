import './App.css';
import moneyTreeLogo from './assets/money-tree.svg';

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <img src={moneyTreeLogo} className="logo" alt="Money" width={100} />
      <div>Balance-calc-expr dashboard</div>
    </>
  );
}

export default App;
