import { Routes, Route } from "react-router-dom"
import { Suspense } from 'react'

{/* Activity1 render diff kind of heads/text using prop
  import StudentStatus from './StudentStatus.jsx'
  import StudentId  from './StudentId'
*/}

{/* activity 2 render conditioning 
import PersonStatus from './PersonStatus.jsx'
*/}

{/* activity 3 render table with array 
import UserDatalist from './UserDatalist.jsx'
*/}

{/* activity 4 by bro code UseState
import CountActivityByBro from './CountActivityByBro'
*/}

{/* act 5
import UserInputuseState from './UserInputuseState'
*/}

{/* act 6 input value 
import InputArrayUseState from './InputArrayUseState.jsx'
import './index.css'
*/}

{/**/}

{/* act 7
import TableOfUser from "./TableOfUser"
*/}

{/* act 8 with validation regis and login */}
import LoginForm from "./pages/LoginForm"
import RegisterAccount from "./pages/RegisterAccount"
import NavBar from "./components/NavBar"
import Access from "./pages/Access"
import Home from "./pages/Home"
import About from "./pages/About"
import Admin from "./pages/Admin"
import Error404 from "./pages/Error404"
import AuthProvider from "./service/Auth"

function App() {

  {/* activity 3
    const studentInformation = [{ id: 1, firstName: "Vinson Ronn", lastName: "Sumilang", Age: 19, sex: "male", course: "BS Information Technology"},
                            { id: 2, firstName : "John Michael", lastName: "Santos", Age : 20, sex: "male", course: "BS Computer Science"},
                            { id: 3, firstName : "Maria Angelica", lastName: "Cruz", Age : 19, sex: "female", course: "BS Information Systems"},
                            { id: 4, firstName : "Sofia Mae", lastName: "Garcia", Age : 21, sex: "female", course: "BS EMC"}];
                            */}
  return (
    <>
      {/* Activity1 render diff kind of heads/text using prop

      <StudentId name ="Vinson" age={18} isStudent={true}/>
      <StudentId name ="ronn" age={25} isStudent={false}/>
      <StudentId name ={15}age="sumilang"  isStudent={false}/>
      <StudentId />
      <StudentStatus isLoggedIn = {true}/>
      <StudentStatus isLoggedIn = {true} name ="ronn" />*/}

      {/* activity 2 render conditioning 
      <PersonStatus fullName = "Vinson Ronn Sumilang" isMarried={true} haveChildren={true} childNames = {["ronn", "vin"]} />
      <PersonStatus fullName = "Ronn Vinson Sumilang" isMarried={true} haveChildren={false} childNames = {["ronn", "vin"]} />
      <PersonStatus />
      */}

      {/* activity 3
      {studentInformation.length > 0  && <UserDatalist users = {studentInformation} category = "Student Information "/>}
      */}

      {/* activity 4 
      <CountActivityByBro />
      */}

      {/* act 5
      <UserInputuseState />
      */}

      {/* act 6 input value 
      <InputArrayUseState />
      */}

      {/* act 7
      <TableOfUser/>
      */}

      {/* act 8
      <RegisterAccount />
      */}
      <AuthProvider>
      <NavBar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path="/Access" element={<Access/>}>
          <Route index element={<LoginForm/>}/>
          <Route path="login" element={<LoginForm/>} />
          <Route path="register" element={<RegisterAccount/>} />
        </Route>
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
      </AuthProvider>
    </>
  )
}

export default App
