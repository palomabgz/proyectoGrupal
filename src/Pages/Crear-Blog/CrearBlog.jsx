import { useState } from "react";
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
            // author: "user1"
        }
    }

    return (
        <div>
            <h1>Crear Blog</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Títutlo</label>
                <input type="text" id="title" onChange={(e) => setTitle(e.target.value)}/>
                <label htmlFor="description">Descripción</label>
                <input type="text" id="description" onChange={(e) => setDescription(e.target.value)}/>
                <label htmlFor="content">Contenido</label>
                <textarea name="" id="content" cols="30" rows="10" onChange={(e) => setContent(e.target.value)}></textarea>
                <label htmlFor="images">Imágenes</label>
                <input type="file" id="images" onChange={(e) => setImages(e.target.value)}/>
                <button type="submit">Crear Blog</button>
            </form>
        </div>
    )
}

export default CrearBlog