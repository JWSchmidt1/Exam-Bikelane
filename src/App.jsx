import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import DefaultLayout from './layout/DefaultLayout';

import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import EventsDetail from './pages/EventsDetail';
import Contact from './pages/Contact';
import News from './pages/News';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

import ScrollToTop from './components/ScrollToTop';

import './scss/style.scss'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>

      {/* PUBLIC */ }
      <Route path="/" element={ <DefaultLayout /> }>
        <Route index element={ <Home /> } />
        <Route path = "/about" element={<About />} />

        <Route path = "/events" element={<Events />} />
        <Route path = "/events/:eventsID" element={<EventsDetail />} />
        
        <Route path = "/contact" element={<Contact />} />
        <Route path = "/news" element={<News />} />
        <Route path="login" element={ <Login /> } />
        <Route path="*" element={ <NotFound /> } />
      </Route>

      {/* ADMIN */ }
      {/* <Route path="/admin" element={ <AdminLayout /> }>
        <Route index element={ <HomeAdmin /> } />
        <Route path="forsideadmin" element={ <ForsideAdmin /> } />
        <Route path="omadmin" element={ <OmAdmin /> } />
        <Route path="serviceadmin" element={ <ServiceAdmin /> } />
        <Route path="faqadmin" element={ <FaqAdmin /> } /> */}
        {/* NEWS */}
        {/* <Route path="newsadmin" element={ <NyhederAdmin /> } />
        <Route path="newsadmin/create" element={ <NewsCreate /> } />
        <Route path="newsadmin/edit/:newsID" element={ <NewsEdit /> } />

        <Route path="kontaktadmin" element={ <KontaktAdmin /> } />
      </Route> */}
    </>

  )
)

function App () {

  return (
    <>
    <ScrollToTop />
    <RouterProvider router={ router } />
    </>
  );
}

export default App;
