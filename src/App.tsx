import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { About } from './pages/About'
import { AppointmentPage } from './pages/AppointmentPage'
import { ContactPage } from './pages/ContactPage'
import { FAQPage } from './pages/FAQPage'
import { Home } from './pages/Home'
import { NotFoundPage } from './pages/NotFound'
import { PrivacyPage } from './pages/Privacy'
import { ResultsPage } from './pages/Results'
import { ReviewsPage } from './pages/ReviewsPage'
import { ServiceDetailPage } from './pages/ServiceDetail'
import { ServicesPage } from './pages/Services'
import { TechnologyPage } from './pages/Technology'
import { TermsPage } from './pages/Terms'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
      <Route path="/services/:slug" element={<Layout><ServiceDetailPage /></Layout>} />
      <Route path="/team" element={<Navigate to="/about" replace />} />
      <Route path="/technology" element={<Layout><TechnologyPage /></Layout>} />
      <Route path="/results" element={<Layout><ResultsPage /></Layout>} />
      <Route path="/reviews" element={<Layout><ReviewsPage /></Layout>} />
      <Route path="/faq" element={<Layout><FAQPage /></Layout>} />
      <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
      <Route path="/appointment" element={<Layout><AppointmentPage /></Layout>} />
      <Route path="/privacy" element={<Layout><PrivacyPage /></Layout>} />
      <Route path="/terms" element={<Layout><TermsPage /></Layout>} />
      <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
    </Routes>
  )
}

export default App
