
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import DashBoard from './components/DashBoard';
import Registration from './components/Registration';
import LoginComponents from './components/LoginComponents';
import store from './redux/store';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Body from './components/Body';


const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children: [
    {
      path: "login",
      element: <LoginComponents/>
    },
    {
      path: "registration",
      element: <Registration/>
    },
    {
      path: "dashboard",
      element: <DashBoard/>
    },
    
  ]
   


  
}])

function App() {

  return (
    <Provider store={store}>
      <div>
       <Header/>
      
       <RouterProvider router={appRouter}/>
     
      </div>
     </Provider>
    
  )
}

export default App
