import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import UseFetch from "./UseFetch"
const EditBlog = () => {
    const { id } = useParams()
    const url = `http://localhost:8000/posts/${id}`
    const {  data:blogs,isPending, isError } = UseFetch(url)
    
    const history = useHistory();
    const [title, setTitle] = useState([])
    const [body, setBlog] = useState([])
    const [notification,setNotification]  = useState(false)
    useEffect(() => {
    fetch(url)
        .then(res => {
            return res.json()
        }).then(data => {
            setTitle(data.title)
            setBlog(data.body)
        })
    },[url])


    const onSubmit = (e) => {
        e.preventDefault()

        if (blogs.title === title && blogs.body === body) {
            setNotification(true)
            history.push(`/edit-blog/${id}`)
        } else {
            fetch(url, {
                method: 'PUT',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({title,body})
            })
                .then(res =>  res.json())
                .then(() => {
                    setNotification(false)
                    history.push('/')
                })
            .catch(err => console.log(err))
        }

        
        
        
    }


    return (
        <>
            <div className="create-blog">
            {isPending && <h1>Loading..</h1>}
                {isError && <h1>{isError}</h1>}
                
                <h1>Update Cerita</h1>
                {notification && <h1>Maaf anda tidak mengupdate apapun</h1> }
                {!notification && '' }
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
                                defaultValue={body}
                                onChange={e => setBlog(e.target.value)}
                                style={{ height: '200px' }} required>
                            </textarea>
                </div>
                <div className="col-25">
                        {blogs.title === title && blogs.body === body ? "" : <input type="submit" value="submit" />}
                </div>
            </div>
            </form>

        </div>
        </>
     );
}
 
export default EditBlog;