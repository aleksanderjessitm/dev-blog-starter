import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it'
import Image from 'next/image'
import { PostFrontMatter } from '../../types/postFrontmatter';
import SEO from '../../components/SEO/SEO';

import { config } from '../../blogConfig';
import Chip from '../../components/Chip/Chip';

interface Props {
    frontmatter: PostFrontMatter;
    content: string
}


function PostDetail({ frontmatter, content }: Props) {
    return (
        <>
            <SEO
                title={frontmatter.metaTitle}
                description={frontmatter.metaDesc}
                keywords={frontmatter.tags}
                socialImgPic={`${config.domainName}/${frontmatter.socialImage.toString()}`}
            />

            <Image src={`/${frontmatter.socialImage}`} width={1920} height={500} alt={frontmatter.altText} className="w-[100vw] h-[40vh] object-cover mb-4 lg:mb-10" />

            <h1 className='text-5xl font-extrabold w-full mx-auto text-center mt-8'>{frontmatter.title}</h1>
            <div className='flex w-full flex-row align-middle justify-center space-x-6 my-6'>
                {frontmatter.tags && frontmatter.tags.map(tag => {
                return <Chip key={tag} text={tag.toLocaleUpperCase()} />
            })}
            </div>
            <article
                className='prose mx-auto mt-5 mb-20'
                dangerouslySetInnerHTML={{ __html: md().render(content) }}
            >

            </article>
        </>
    )
}

export default PostDetail

export async function getStaticPaths() {

    const files = fs.readdirSync('posts');

    const paths = files.map((fileName) => ({
        params: {
            slug: fileName.replace('.md', ''),
        },
    }));

    return {
        paths,
        fallback: false,
    };

}

export async function getStaticProps({ params: { slug } }) {
    const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
        props: {
            frontmatter,
            content,
        },
    };
}