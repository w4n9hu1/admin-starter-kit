import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import { Layout } from "./components/Layout";
import TaskList from "./pages/TaskList";

function User() {
  return (
    <>
      <h1 className="text-xl text-blue-600">User</h1>
    </>
  )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<User />} />
            <Route path="user" element={<User />} />
            <Route path="task" element={<TaskList />} />
          </Route>
          <Route path="*" element={<><h1>404</h1></>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
