import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import UseFetch from "./UseFetch"
const EditBlog = () => {
    const { id } = useParams()
    // const { data: blogs, isPending, isError } = UseFetch(`http://localhost:8000/data/${id}`)
    
    const history = useHistory();
    
    const [updateForm, setUpdateForm] = useState([])
    const [title, setTitle] = useState([])
    const [blog, setBlog] = useState([])
    // useEffect(() => {
    // fetch(`http://localhost:8000/data/${id}`)
    //     .then(res => {
    //         return res.json()
    //     }).then(data => {
    //         console.log(data)
    //         setUpdateForm(data)
    //     })
    // })


    const onSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:8000/data/${id}`, {
            method: 'PUT',
            headers: {
                // "Accept":"application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify()

        })
            .then(res =>  res.json())
            .then((data) => console.log(data))
        .catch(err => console.log(err))
        
        
    }


    return (
        <>
            <div className="create-blog">
            {/* {isPending && <h1>Loading..</h1>}
            {isError && <h1>{isError}</h1>} */}
            <h1>Update Cerita</h1>
            <form action="/" onSubmit={onSubmit}>
            <div className="row">
                <div className="col-25">
                    <label >Judul</label>
                </div>
                <div className="col-75">
                    <input type="text" id="fname" name="title" 
                    placeholder="Ketikan Judul" 
                                defaultValue={updateForm.title}
                                onChange={e => setTitle(e.target.value)}
                    required />
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                        <label>Tuliskan Cerita</label>
                </div>
                <div className="col-75">
                            <textarea id="cerita" name="blog"
                                placeholder="Tuliskan Cerita"
                                defaultValue={updateForm.blog}
                                onChange={e => setBlog(e.target.value)}
                                 style={{ height: '200px' }} required></textarea>
                </div>
                        <div className="col-25">
                            {/* {!isPending && <input type="submit" value="submit" />}
                            {isPending && <input type="submit" disabled value="adding..blog" />} */}
                    
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