import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { config } from '../../blogConfig';

import Navbar from '../../components/Navbar/Navbar'
import Spinner from '../../components/Spinner/Spinner';

const Footer = dynamic(() => { return import('../../components/Footer/Footer') }, {
    suspense: true
})

interface Props {
    children
}

function DefaultLayout({ children }: Props) {
    return (
        <>
            <Navbar fullName={config.fullName} />
            <a href="#content" className='sr-only'>Skip to main content</a>
            <main className='min-h-screen'>
                {children}
            </main>
            <Suspense fallback={<Spinner />}>
                <Footer />
            </Suspense>
        </>
    )
}

export default DefaultLayout