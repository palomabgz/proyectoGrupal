import "../home/Blogs.css"
import { Link } from "react-router-dom"
const BlogAdmin = ({ blog, handleDelete }) => {

    const eliminarBlog = () => {
        handleDelete(blog.source.id)
    }

    return (
        <div className="contenedor-card">
            <img src={blog.urlToImage} alt={blog.title} className="image"/>
            <div className="datos">
                <h2 className="title">{blog.title}</h2>
                <div className="subtitle">
                    <p className="author">{blog.author}</p>
                    <p>{new Date(blog.publishedAt).toLocaleString("es")}</p>
                </div>
                <p className="description">{blog.description}</p>
                <Link to={`/modificar-blog/${blog.source.id}`}>
                    <button>Modificar</button>
                </Link>
                <button onClick={() => eliminarBlog()}>Eliminar</button>
            </div>
        </div>
    )
}

export default BlogAdmin