import React from 'react'
import Navbar from '../components/web/navbar/Navbar.jsx'
import Footer from '../components/web/footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    {/* بنحط جواه الاشياء الثابتة نافبار و الفوتر في اللي اوت */}
    {/* الاشياء الثابتة ف كل الكومبونانتس */}
    {/* حطينا ثنين لي اوت عشان في لي اوت لليوزر و لي اوت للادمن , ف كل لي اوت بتختلف لكل واحد فيهم من ناجية يو ار ال*/}
    <Navbar/>
    <Outlet/>
    {/* الاوت ليت هون متغير حسب اليوزر عشو بد يعمل اكسيز يعني بعد الداش مثلا هون يا بختار هوم او كاتيجوريز <<{Outlet} */}
    {/*what is the path? =>  /categories or /home or ... (children of the this Layout(user))*/}
    <Footer/>
    
    </>
  )

}
