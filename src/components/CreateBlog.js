import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const CreateBlog = ({onAdd}) => {
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [blog, setBlog] = useState('');
    const onSubmit = (e) => {
        e.preventDefault()
        onAdd({title , blog});
        setTitle('');
        setBlog('');
        history.push('/');
    }


    return (
        <>
        <div className="create-blog">
            <h1>Buat Cerita</h1>

                
            <form action="/" onSubmit={onSubmit}>
            <div className="row">
                <div className="col-25">
                    <label for="fname">Judul</label>
                </div>
                <div className="col-75">
                    <input type="text" id="fname" name="judul" 
                    placeholder="Ketikan Judul" 
                                value={title} onChange={e => setTitle(e.target.value)}
                                required
                                />
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                        <label for="cerita">Tuliskan Cerita</label>
                </div>
                <div className="col-75">
                    <textarea id="cerita" name="cerita"  placeholder="Tuliskan Cerita" value={blog} onChange={ e => setBlog(e.target.value)} style={{height:'200px'}} required></textarea>
                </div>
                <div className="col-25">
                    <input type="submit" value="submit" />
                </div>
            </div>
               
                </form>

        </div>
        </>
     );
}
 
export default CreateBlog;
