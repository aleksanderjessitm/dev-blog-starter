import { PostFrontMatter } from '../../types/postFrontmatter';
import PostPreview from './PostPreview';

type Props = {
    posts: Array<Record<any, any>>
}

function PostPreviews({posts}: Props) {
  return (
    <>
    {posts.map(({ slug, frontmatter }: {slug: string, frontmatter: PostFrontMatter}) => (
        <PostPreview key={frontmatter.title} slug={slug} frontmatter={frontmatter} />
      ))}
      </>
  )
}

export default PostPreviews