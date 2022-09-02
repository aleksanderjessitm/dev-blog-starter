import fs from 'fs';
import matter from 'gray-matter';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

import { PostFrontMatter } from '../../types/postFrontmatter';
import SEO from '../../components/SEO/SEO';
import { config } from '../../blogConfig';
import Spinner from '../../components/Spinner/Spinner';

const PostHeader = dynamic(() => import('../../components/PostHeader/PostHeader'));
const PostBody = dynamic(() => import('../../components/PostBody/PostBody'));

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
            <Suspense fallback={<Spinner />}>
                <PostHeader frontmatter={frontmatter} />
            </Suspense>
            <Suspense fallback={<Spinner />}>
                <PostBody content={content} />
            </Suspense>
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