import { useState } from "react"
import { newsMock } from "../../mocks/newsMock"
import Blog from "./Blogs";

const Home = () => {
    const [blogs, setBlogs] = useState(newsMock);

    return (
        <div>
            <h1>Home</h1>
            {blogs.map((blog) => (
            <Blog blog={blog} key={blog.source.id} />
            ))}
        </div>
    )
}

export default Home