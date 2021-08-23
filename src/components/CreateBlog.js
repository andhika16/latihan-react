import { useState } from 'react'
import {  useHistory } from 'react-router-dom'
const CreateBlog = () => {
    const history = useHistory();
    const [isPending,setIsPending] = useState(false)

    const [title, setTitle] = useState('');
    const [blog, setBlog] = useState('');
    const onSubmit = (e) => {
        e.preventDefault()
        const blogs = { title, blog }
        setIsPending(true)
        fetch('http://localhost:8000/data', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blogs)

        })
        .then(() => {
            console.log('good')
            setIsPending(false)
            history.push('/')
        })
        
        
    }


    return (
        <>
        <div className="create-blog">
            <h1>Buat Cerita</h1>

                
            <form action="/" onSubmit={onSubmit}>
            <div className="row">
                <div className="col-25">
                    <label >Judul</label>
                </div>
                <div className="col-75">
                    <input type="text" id="fname" name="judul" 
                    placeholder="Ketikan Judul" 
                    value={title} onChange={e => setTitle(e.target.value)}
                    required />
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                        <label>Tuliskan Cerita</label>
                </div>
                <div className="col-75">
                    <textarea id="cerita" name="cerita"  placeholder="Tuliskan Cerita" value={blog} onChange={ e => setBlog(e.target.value)} style={{height:'200px'}} required></textarea>
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
 
export default CreateBlog;
