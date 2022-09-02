import Head from 'next/head'
import Image from 'next/image'
import Jumbotron from '../components/Jumbotron/Jumbotron';

import { config } from '../blogConfig';
import SEO from '../components/SEO/SEO';
import Spinner from '../components/Spinner/Spinner';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const Testimonials = dynamic(() => import('../components/Testimonials/Testimonials'));

export default function Home() {
  return (
    <>
      <SEO
        title={`Welcome to ${config.fullName}'s blog.`}
        description={`My name is ${config.fullName}, and I write about ${config.expertise.join(", ")}, and more.`}
        keywords={config.expertise}
        socialImgPic={"/public/images/ITMAGINATION_Logo_big_with_bg.png"}
      />
      <Jumbotron
        buttonHref='/blog'
        buttonText='Go to my blog'
        heading={`Hello, my name is ${config.fullName}.`}
        subheading={`If you want to read about ${config.expertise.join(", ")}, and more, then you are in the right place.`}
      />
      <Suspense fallback={<Spinner />}>
        <Testimonials />
      </Suspense>
    </>
  )
}


