import React from 'react'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Layout from '../layouts/Layout.jsx';
import Home from '../components/web/home/Home.jsx';
import Categories from './../components/web/categories/Categories';
import DashboardLayout from './../layouts/DashboardLayout';
import CategoriesDashboard from './../components/dashboard/categories/CategoriesDashboard';
import HomeDashboard from '../components/dashboard/home/HomeDashboard.jsx';
import Register from '../components/web/register/Register.jsx';


export const router = createBrowserRouter([// هاد المتغير عبارة عن ارريه اوف اوبجيكت router
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path:'register',
        element:<Register/>

      },
      // هون ابناء اللي اوت عبارة عن ارريه اوف اوبجيكت , ابناء يعني الي اوت هاي ع مين بتقدر تعمل اكسسيز لانه زي ما حكينا انه لكل لي اوت اكسيز بتختلف عن غيرها (وحدة لليوزر ووحدة للأدمن)
      {
        //:) ما بنقدر نوصل للتشيلدرين هذول عن طريق السلاش , طيب كيف ننوصل لالهن ؟ هسه بنعرف اصبري 
        // ف الجواب : بكون عن طريق كومبونينت اسمه اوت ليت موجود ب الرياكت روتر دوم
        path: 'home',
        element:<Home/>
      },
      {
        path:'categories',
        element:<Categories/>
      },
      {
        path:'*',
        element:<h2>404 page not found --- web</h2>//في حال اليوزر  حط كلمة غلط او مش موجودة بعد هاذ 
      }
     
    ]
  },
  
  {
    path:'dashboard',
    element:<DashboardLayout/>,
    children:[
      {
        path :'home',
        element:<HomeDashboard/>

      },
      {
        path :'categories',
        element:<CategoriesDashboard/>

      },
      {
        path:'*',
        element:<h2>404 page not found --- dashboard</h2>//في حال الادمن  حط كلمة غلط او مش موجودة بعد هاذ او باث  غلط 
      }
    ]
    
    
  }

]);