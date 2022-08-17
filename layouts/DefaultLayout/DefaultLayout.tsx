import { config } from '../../blogConfig';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar'


interface Props {
    children
}

function DefaultLayout({ children }: Props) {
    return (
        <>
            <Navbar fullName={config.fullName}/>
            <a href="#content" className='sr-only'>Skip to main content</a>
            <main className='min-h-screen'>
            {children}
            </main>
            <Footer />
        </>
    )
}

export default DefaultLayout