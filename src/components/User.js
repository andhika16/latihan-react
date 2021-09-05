import UseFetch from './UseFetch'
import UsersBlog from './UsersBlog'
import {useParams } from 'react-router-dom'

const User = () => {
    const { id } = useParams()
    const url = ``
    const { data:user, isPending, isError } = UseFetch(`http://localhost:8000/users/${id}`)
    const {data:blogs}= UseFetch(`http://localhost:8000/users/${id}/posts`)

    return (
        <div class="user-container">
            <div className="user">
                    <div className="row">
                        <div className="col">
                            <div class="image">
                                <img src="/img/user.png" alt="" />        
                            </div>
                            <h4>{user.name}</h4>
                            <p>@{user.username}</p>
                    </div>
                    <div class="col">
                        <h3>Edit Profile</h3>
                    </div>
                    </div>
            </div>
            <div className="post">
                <div className="row">
                        {blogs.map(blog => 
                            <div className="col" key={blog.id}>
                                <h2>{blog.title}</h2>
                                <p>{blog.body}</p>
                            </div>
                        )}
                </div>
            </div>
        </div>
     );
}
 
export default User;