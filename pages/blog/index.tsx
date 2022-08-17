import Link from 'next/link'
import Image from 'next/image'

import fs from 'fs';
import matter from 'gray-matter';
import slugify from 'slugify';
import SEO from '../../components/SEO/SEO';

import {config} from '../../blogConfig';

function BlogIndex({posts}) {
  return (
    <>
    <SEO
        title="Blog"
        description='Welcome to the blog.'
        keywords={config.expertise}
        socialImgPic={'/public/images/ITMAGINATION_Logo_big_with_bg.png'}
    />
    <div className='text-4xl flex w-full my-5'>
        <h1 className='w-full text-center'>Welcome to my blog!</h1>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0'>
      {posts.map(({ slug, frontmatter }) => (
        <div
          key={slug}
          className='border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col'
        >
          <Link href={`/blog/${slug}`}>
            <a>
              <Image
                width={650}
                height={340}
                alt={frontmatter.title}
                src={`/${frontmatter.socialImage}`}
              />
              <h1 className='p-4'>{frontmatter.title}</h1>
            </a>
          </Link>
        </div>
      ))}

    </div>
    </>
  )
}

export default BlogIndex

export function getStaticProps() {
    const files = fs.readdirSync('posts');
  
    const posts = files.map((fileName) => {
      const slug = slugify(fileName.replace('.md', ''));
  
      const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
      const { data: frontmatter } = matter(readFile);
      return {
        slug,
        frontmatter,
      };
    })
    return {
      props: {
        posts,
      }
    }
  }