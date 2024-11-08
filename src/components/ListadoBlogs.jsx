import { useState } from "react";
import { newsMock } from "../mocks/newsMock";
import Blog from "../pages/Home/Blogs";
import BlogAdmin from "../pages/mis-blogs/BlogAdmin";
const ListadoBlogs = ({ isLogged=false }) => {
    const [blogs, setBlogs] = useState(newsMock);
    let blogsFilter = blogs

    const handleDelete = (id) => {
        console.log("llega", id)
        blogsFilter = blogsFilter.filter((blog) => !(blog.source.id == id));
        console.log(blogsFilter)
    };

    if (isLogged) {
    blogsFilter = blogs.filter(
        (blog) => blog.author === "Investing.com"
    );

        return (
            <>
                {blogsFilter.map((blog) => (
                    <BlogAdmin blog={blog} key={blog.source.id} handleDelete={handleDelete} />
                ))}
            </>
        );
    }

    return (
        <>
            {blogs.map((blog) => (
                <Blog blog={blog} key={blog.source.id} />
            ))}
        </>
    )
}

export default ListadoBlogs