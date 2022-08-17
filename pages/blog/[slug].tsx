import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it'
import Image from 'next/image'
import { PostFrontMatter } from '../../types/postFrontmatter';
import SEO from '../../components/SEO/SEO';

import { config } from '../../blogConfig';

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

            <Image src={`/${frontmatter.socialImage}`} width={1920} height={500} alt={frontmatter.altText} className="w-[100vw] h-[40vh] object-cover mb-2 lg:mb-6" />
            <div className='prose mx-auto mt-5 mb-20'>
                <h1 className='mx-auto text-center'>{frontmatter.title}</h1>
                <article className='prose' dangerouslySetInnerHTML={{ __html: md().render(content) }} />
            </div>
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