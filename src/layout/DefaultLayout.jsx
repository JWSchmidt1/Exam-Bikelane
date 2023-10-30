import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"


const DefaultLayout = () => {
    return (
        <>

            <header>
                <Header />
            </header>

            <main className="container">
                <Outlet />
            </main>

            <footer className="container">
                <Footer />
            </footer>

        </>
    )
}

export default DefaultLayout