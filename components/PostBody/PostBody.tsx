import md from 'markdown-it'

type Props = {
    content: string
}

function PostBody({ content }: Props) {
    return (
        <article
            className='prose mx-auto mt-5 mb-20'
            dangerouslySetInnerHTML={{ __html: md().render(content) }}
        />
    )
}

export default PostBody