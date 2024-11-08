import { newsMock } from '../../mocks/newsMock'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const ModificarBlog = () => {
    const { idblog } = useParams();
    const [blog, setBlog] = useState(
        ...newsMock.filter((blog) => blog.source.id == idblog));

    const navigate = useNavigate();

    const [title, setTitle] = useState(blog.title)
    const [images, setImages] = useState(blog.urlToImage)
    const [description, setDescription] = useState(blog.description)
    const [content, setContent] = useState(blog.content)

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {
            title: title,
            description: description,
            content: content,
            UrlToImage: images,
            publisheAt: new Date(),
            author: "user1"
        }
        console.log(blog)

        toast.success("Blog modificado")
        navigate("/mis-blogs");
    }

    return (
        <div className="contenedor">
            <form onSubmit={handleSubmit} className="form">
            <h3>Modificar Blog</h3>
                <div className="input">
                    <label htmlFor="title" className="label">Títutlo</label>
                    <input 
                    type="text" 
                    id="title" 
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}/>
                </div>
                <div className="input">
                    <label htmlFor="description" className="label">Descripción</label>
                    <input 
                    type="text" 
                    id="description" 
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}/>
                </div>
                <div className="input">
                    <label htmlFor="content" className="label">Contenido</label>
                    <textarea 
                    name="" 
                    id="content" 
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                    cols={"50"} 
                    rows={"10"}>
                    </textarea>
                </div>
                <div className="input">
                    <label htmlFor="images" className="label">Imágenes</label>
                    <input 
                    type="text" 
                    id="images" 
                    onChange={(e) => setImages(e.target.value)}
                    value={images}/>
                </div>
                <button type="submit" className="boton">Modificar</button>
            </form>
        </div>
    )
}

export default ModificarBlog