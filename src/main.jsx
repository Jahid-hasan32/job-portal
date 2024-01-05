import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './pages/Home.jsx';
import PostAJob from './pages/PostAJob.jsx';
import Myjobs from './pages/Myjobs.jsx';
import Login from './Components/Credentials/Login.jsx';
import Register from './Components/Credentials/Register.jsx';
import EstimateSalary from './Components/Profile/EstimateSalary.jsx';
import ActivateAccount from './Components/Credentials/ActivateAccount.jsx';
import PassResetConfirm from './Components/Credentials/PassResetConfirm.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "post-a-job/",
        element: <PostAJob/>
      },
      {
        path: "my-jobs/",
        element: <Myjobs/>
      },
      {
        path: "users-autentication/login/",
        element: <Login/>
      },
      {
        path: "users-autentication/register/",
        element: <Register/>
      },
      {
        path: "salary-estimate/",
        element: <EstimateSalary/>
      },
      {
        path: "account/activate/:uid/:token",
        element: <ActivateAccount/>
      },
      {
        path: "password-reset/confirm/:uid/:token",
        element: <PassResetConfirm/>
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)





