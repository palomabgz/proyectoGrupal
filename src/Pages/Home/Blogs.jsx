import "./Blogs.css"
const Blog = ({ blog }) => {
    console.log(blog)
    return (
        <div className="contenedor">
            <img src={blog.urlToImage} alt={blog.title} className="image"/>
            <div className="datos">
                <h2 className="title">{blog.title}</h2>
                <div className="subtitle">
                    <p className="author">{blog.author}</p>
                    <p>{new Date(blog.publishedAt).toLocaleString("es")}</p>
                </div>
                <p className="description">{blog.description}</p>
            </div>
        </div>
    )
}

export default Blog