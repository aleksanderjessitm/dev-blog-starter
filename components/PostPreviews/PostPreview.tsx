import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { PostFrontMatter } from '../../types/postFrontmatter'

type Props = {
    frontmatter: PostFrontMatter
    slug: string
}

function PostPreview({frontmatter, slug}: Props) {
  return (
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
  )
}

export default PostPreview