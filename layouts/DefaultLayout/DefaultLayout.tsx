import { config } from '../../blogConfig';
import Navbar from '../../components/Navbar/Navbar'


interface Props {
    children
}

function DefaultLayout({ children }: Props) {
    return (
        <>
            <Navbar fullName={config.fullName}/>
            <a href="#content" className='sr-only'>Skip to main content</a>
            {children}
        </>
    )
}

export default DefaultLayout