import { Provider } from "react-redux";
import store from "./redux/store";
import  './App.css';

import Navbar from "./NavbarComponent";





export default function App() {

  const time = new Date();
  time.setSeconds(time.getSeconds() + 200);

  return (
    <div className="App">
      <div className="App-header">

      <Provider store={store}>
       <Navbar></Navbar>
   
        </Provider>


      </div>
    </div>
  );
}





