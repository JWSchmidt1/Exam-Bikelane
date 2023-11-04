import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import DefaultLayout from './layout/DefaultLayout';
import AdminLayout from './layout/AdminLayout';

import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import EventsDetail from './pages/EventsDetail';
import Contact from './pages/Contact';
import News from './pages/News';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

import HomeAdmin from './pages/admin/HomeAdmin';
import EventsAdmin from './pages/admin/EventsAdmin';
import EventsCreate from './pages/admin/EventsCreate';
import EventsEdit from './pages/admin/EventsEdit';
import ContactAdmin from './pages/admin/ContactAdmin';
import GoalsAdmin from './pages/admin/GoalsAdmin';
import GoalsEdit from './pages/admin/GoalsEdit';

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
      <Route path="/admin" element={ <AdminLayout /> }>
        <Route index element={ <HomeAdmin /> } />

        {/* EVENTS */}
        <Route path="eventsadmin" element={ <EventsAdmin /> } />
        <Route path="eventsadmin/create" element={ <EventsCreate /> } />
        <Route path="eventsadmin/edit/:eventsID" element={ <EventsEdit /> } />

        <Route path="contactadmin" element={ <ContactAdmin /> } />

        {/* GOALS */}
        <Route path="goalsadmin" element={ <GoalsAdmin /> } />
        <Route path="goalsadmin/edit/:goalsID" element={ <GoalsEdit /> } />


      </Route>
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
