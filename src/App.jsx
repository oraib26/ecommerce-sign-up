
import {RouterProvider} from "react-router-dom";
import {router} from './layouts/Routes.jsx'//هون فصلنا الراوتينغ وحطيناه ب كومبونينت ثاني , افضل م ناحية ديزاين 



function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App