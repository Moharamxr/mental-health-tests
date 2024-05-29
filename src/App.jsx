import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Login from './components/auth/Login'
import TestDetails from './components/tests/TestDetails'
import SurveyResults from './components/tests/SurveyResults'
import TestResult from './components/tests/TestResult'
import Tests from './components/tests/Tests'
import TermsAndConditions from './pages/TermsAndConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'

function App() {

  return (
 <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Home />} />
      <Route path='/tests' element={<Tests />} />
      <Route path='/tests/:id' element={<TestDetails />} />
      <Route path='/survey' element={<SurveyResults />} />
      <Route path='/result' element={<TestResult />} />
      <Route path="/terms" element={<TermsAndConditions />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/about" element={<AboutUs />} />

    </Routes>
  </Layout>
  )
}

export default App
