import { useState } from "react";
import { toast } from "react-toastify";

const CrearBlog = () => {

    const [title, setTitle] = useState("")
    const [images, setImages] = useState("")
    const [description, setDescription] = useState("")
    const [content, setContent] = useState("")

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
        toast.success("Blog creado")
    }

    return (
        <div className="contenedor">
            <form onSubmit={handleSubmit} className="form">
            <h3>Crear Blog</h3>
                <div className="input">
                    <label htmlFor="title" className="label">Títutlo</label>
                    <input 
                    type="text" 
                    id="title" 
                    onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="input">
                    <label htmlFor="description" className="label">Descripción</label>
                    <input 
                    type="text" 
                    id="description" 
                    onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div className="input">
                    <label htmlFor="content" className="label">Contenido</label>
                    <textarea 
                    name="" 
                    id="content" 
                    onChange={(e) => setContent(e.target.value)}
                    cols={"50"} 
                    rows={"10"}>
                    </textarea>
                </div>
                <div className="input">
                    <label htmlFor="images" className="label">Imágenes</label>
                    <input 
                    type="text" 
                    id="images" 
                    onChange={(e) => setImages(e.target.value)}/>
                </div>
                <button type="submit" className="boton">Crear Blog</button>
            </form>
        </div>
    )
}

export default CrearBlog