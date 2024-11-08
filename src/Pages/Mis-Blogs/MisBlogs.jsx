import ListadoBlogs from "../../components/ListadoBlogs";
const MisBlogs = () => {
    return (
        <>
            <h3>Mis Blogs</h3>
            <ListadoBlogs isLogged={true}/>
        </>
    )
}

export default MisBlogs