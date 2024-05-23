export const revalidate = 420

type Post = {
  title: string
  content: string
  slug: string
}

type Props = {
  params: { slug: string }
}

// This function gets called at build time, don't overuse it, better use it for a certain types of data or pages
export const generateStaticParams = async () => {
  const posts: Post[] = await fetch('http://localhost:8080/api/content').then(
    (res) => res.json()
  )

  return posts.map((post) => ({ slug: post.slug }))
}

const BlogPostPage = async ({ params }: Props) => {
  const posts: Post[] = await fetch('http://localhost:8080/api/content').then(
    (res) => res.json()
  )
  const post = posts.find((post) => post.slug === params.slug)

  return (
    <main>
      <h1>{post?.title}</h1>
      <p>{post?.content}</p>
    </main>
  )
}

export default BlogPostPage
