import Article from "./Article.js"

function ArticleList ({posts}) {
    return (
        <main>
            {posts.map(post => <Article title={post.title} key={post.id} preview={post.preivew} date={post.date}/>) }
        </main>
    )
}

export default ArticleList;