import Navbar from '../../components/Navbar/Navbar'


interface Props {
    children
}

function DefaultLayout({ children }: Props) {
    return (
        <>
            <Navbar />
            <a href="#content" className='sr-only'>Skip to main content</a>
            {children}
        </>
    )
}

export default DefaultLayout