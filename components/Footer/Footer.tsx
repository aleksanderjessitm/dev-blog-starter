import Link from 'next/link'

function Footer() {
  return (
    <footer className='relative w-full flex flex-col flex-wrap text-center items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg'>
        <p className='w-full'>Template by Aleksander Jess of <Link href="https://www.itmagination.com/"><a className='underline'>ITMAGINATION</a></Link>.</p>
        <p className='text-xs'>Neither the author of the template, nor ITMAGINATION is not responsible for any, and all content published on this website.</p>
    </footer>
  )
}

export default Footer