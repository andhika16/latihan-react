import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import UseFetch from "./UseFetch"
const EditBlog = () => {
    const { id } = useParams()
    const url = `http://localhost:8000/data/${id}`
    const {  data:blogs,isPending, isError } = UseFetch(url)
    
    const history = useHistory();
    const [title, setTitle] = useState([])
    const [blog, setBlog] = useState([])
    useEffect(() => {
    fetch(url)
        .then(res => {
            return res.json()
        }).then(data => {
            setTitle(data.title)
            setBlog(data.blog)
        })
    },[url])


    const onSubmit = (e) => {

        if (title === blogs.title) {
            console.log('ndak ono berubah');
            history.push(`/edit-blog/${id}`)
        }

        e.preventDefault()
        // console.log({title,blog});
        fetch(url, {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({title,blog})
        })
            .then(res =>  res.json())
            .then(() => {
                history.push('/')
            })
        .catch(err => console.log(err))
        
        
    }


    return (
        <>
            <div className="create-blog">
            {isPending && <h1>Loading..</h1>}
            {isError && <h1>{isError}</h1>}
            <h1>Update Cerita</h1>
            <form action="/" onSubmit={onSubmit}>
            <div className="row">
                <div className="col-25">
                    <label >Ganti Judul</label>
                </div>
                <div className="col-75">
                    <input type="text" id="fname" name="title" 
                    placeholder="Ketikan Judul" 
                                defaultValue={title}
                                onChange={e => setTitle(e.target.value)}
                    required />
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                        <label>Update Cerita</label>
                </div>
                <div className="col-75">
                            <textarea id="cerita" name="blog"
                                placeholder="Tuliskan Cerita"
                                defaultValue={blog}
                                onChange={e => setBlog(e.target.value)}
                                style={{ height: '200px' }} required>
                            </textarea>
                </div>
                        <div className="col-25">
                            {!isPending && <input type="submit" value="submit" />}
                            {isPending && <input type="submit" disabled value="adding..blog" />}
                    
                </div>
            </div>
            </form>

        </div>
        </>
     );
}
 
export default EditBlog;
    // const {title,blog} = blogs
    // const [title, setTitle] = useState('');
    // const [blog, setBlog] = useState('');
    // const [data,setBlogs] = useState([])
    // const formData = setBlogs(blogs)
    // if (blogs) {
    //     setBlogs(blogs)
    // } else {
    //     console.log('no blogs');
    // }
    // const handleEdit = (e) => {
    //     const updateData = blogs
    //     updateData[e.target.title] = e.target.value
    //     updateData[e.target.blog] = e.target.value
    //     console.log(updateData);
    //     setUpdateForm(updateData)

    // }