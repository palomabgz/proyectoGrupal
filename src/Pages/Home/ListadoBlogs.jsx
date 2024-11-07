import { useState } from "react";
import { newsMock } from "../../mocks/newsMock";
import Blog from "./Blogs";
const ListadoBlogs = () => {

    const [blogs, setBlogs] = useState(newsMock);

    return (
        <>
            {blogs.map((blog) => (
            <Blog blog={blog} key={blog.source.id} />
            ))}
        </>
    )
}

export default ListadoBlogs