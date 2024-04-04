import logo from './logo.svg';
import './App.css';
import UseCallBack from './Hooks/UseCallBack/UseCallBack';
import { UseContext } from './Hooks/UseContext/UseContext';
import DataProvider from './DataMapping/Provider';
// import UseState from './Hooks/UseState/UseState';
// import UseMemo from './Hooks/UseMemo/UseMemo';

function App() {
  return (
    <DataProvider>

      {/* <UseState/> */}
      {/* <UseMemo/> */}
      {/* <UseCallBack/> */}
      <UseContext/>

    </DataProvider>
  );
}

export default App;
