import logo from './logo.svg';
import './App.css';
import Autocomplete from './MUI/Autocomplete.jsx';
import BasicGrid from './MUI/MyGrid';
import HomePage from './MUI/HomePage';
import GitHomepage from './Project/GitHomepage';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './MUI/AboutUs';
import Layout from './MUI/Layout';
import PrivateRoutes from './MUI/PrivateRoutes';
import MyLayout from './Project/MyLayout';
import GitRoutes from './Project/GitRoutes';
import Comment from'./Project/Comment';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Autocomplete/> */}
    {/* <BasicGrid/> */}
{/* <CssBaseline>
<HomePage/>
</CssBaseline>
    */}
    <BrowserRouter>
    <MyLayout>
     <GitRoutes/>
    </MyLayout>
    </BrowserRouter>

 
    

    {/* <BrowserRouter>
    <Layout>
      <PrivateRoutes/>
    </Layout>
    </BrowserRouter> */}
    </div>
  );
}

export default App;
