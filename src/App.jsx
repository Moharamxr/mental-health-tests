import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Login from './components/auth/Login'
import TestDetails from './components/tests/TestDetails'
import SurveyResults from './components/tests/SurveyResults'
import TestResult from './components/tests/TestResult'

function App() {

  return (
 <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Home />} />
      <Route path='/tests/:id' element={<TestDetails />} />
      <Route path='/survey' element={<SurveyResults />} />
      <Route path='/result' element={<TestResult />} />
    </Routes>
  </Layout>
  )
}

export default App
