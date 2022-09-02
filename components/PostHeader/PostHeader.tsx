import Image from 'next/image'
import React from 'react'
import { PostFrontMatter } from '../../types/postFrontmatter'
import Chip from '../Chip/Chip'

type Props = {
    frontmatter: PostFrontMatter,

}

function PostHeader({ frontmatter }: Props) {
    return (
        <>
            <Image src={`/${frontmatter.socialImage}`} width={1920} height={500} alt={frontmatter.altText} className="w-[100vw] h-[40vh] object-cover mb-4 lg:mb-10" />
            <h1 className='text-5xl font-extrabold w-full mx-auto text-center mt-8'>{frontmatter.title}</h1>
            <div className='flex w-full flex-row align-middle justify-center space-x-6 my-6'>
                {frontmatter.tags && frontmatter.tags.map(tag => {
                    return <Chip key={tag} text={tag.toLocaleUpperCase()} />
                })}
            </div>
        </>
    )
}

export default PostHeader