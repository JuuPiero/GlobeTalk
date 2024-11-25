import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Default from './layouts/Default'
import Home from './pages/Home/Home'
import Posts from './pages/Posts/Posts'
import MyPost from './pages/MyPost/MyPost'
import Profile from './pages/Profile/Profile'
import Cources from './pages/Courses/Courses'
import CourseDetail from './pages/CourseDetail/CourseDetail'
import PostCreate from './pages/PostCreate/PostCreate'
import PostDetail from './pages/PostDetail/PostDetail'
import AuthProvider from './context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>

        <Routes>
          <Route element={<Default />}>
            <Route path='/' Component={Home} />
            <Route path='/cources' Component={Cources} />
            <Route path='/posts' Component={Posts} />
            <Route path='/mypost' Component={MyPost} />
            <Route path='/profile' Component={Profile} />
            <Route path='/course/detail/:id' Component={CourseDetail} />
            <Route path='/post/detail/:id' Component={PostDetail} />
            <Route path='/create/post' Component={PostCreate} />
          </Route>
        </Routes>

      </BrowserRouter>
    </AuthProvider>

  )
}

export default App
