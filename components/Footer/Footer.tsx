import Link from 'next/link'

function Footer() {
  return (
    <footer className='relative w-full flex flex-wrap text-center items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg'>
        <p className='w-full'>Copyright 2022 Aleksander Jess of <Link href="https://www.itmagination.com/"><a className='underline'>ITMAGINATION</a></Link></p>
    </footer>
  )
}

export default Footer