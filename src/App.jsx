import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import PromoBar from './components/PromoBar';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Locations from './pages/Locations';
import StateLanding from './pages/StateLanding';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import AdminRoute from './components/AdminRoute';
import AdminLayout from './pages/admin/AdminLayout';
import Login from './pages/admin/Login';
import BlogAdmin from './pages/admin/BlogAdmin';
import PostEditor from './pages/admin/PostEditor';
import './App.css';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <div className="app">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/servicos" element={<Services />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/contato" element={<Contact />} />
              <Route path="/locais" element={<Locations />} />
              <Route path="/locais/:stateSlug" element={<StateLanding />} />
              
              {/* Public Blog */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />

              {/* Admin Panel */}
              <Route path="/admin/login" element={<Login />} />
              <Route path="/admin" element={<AdminRoute><AdminLayout /></AdminRoute>}>
                <Route index element={<BlogAdmin />} />
                <Route path="posts" element={<BlogAdmin />} />
                <Route path="posts/new" element={<PostEditor />} />
                <Route path="posts/edit/:id" element={<PostEditor />} />
              </Route>
            </Routes>
            <Footer />
            <WhatsAppButton />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
