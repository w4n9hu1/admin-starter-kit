import { BrowserRouter, Link, Outlet, Route, Routes, useNavigate } from "react-router-dom"
import Login from "./pages/Login"

function Task() {
  return (
    <>
      <h1 className="text-xl text-blue-600">Task</h1>
    </>
  )
}

function User() {
  return (
    <>
      <h1 className="text-xl text-blue-600">User</h1>
    </>
  )
}

function Layout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
          <li>
            <Link to="/task">Task</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <button onClick={handleLogout}>Log out</button>
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
            <Route path="task" element={<Task />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
