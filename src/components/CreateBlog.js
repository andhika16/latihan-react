const CreateBlog = () => {
    return (
        <>
        <div class="create-blog">
            <h1>Buat Cerita</h1>

                
            <form action="/">
            <div class="row">
                <div class="col-25">
                    <label for="fname">Judul</label>
                </div>
                <div class="col-75">
                    <input type="text" id="fname" name="judul" placeholder="Ketikan Judul" />
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                        <label for="cerita">Tuliskan Cerita</label>
                </div>
                <div class="col-75">
                    <textarea id="cerita" name="cerita" placeholder="Tuliskan Cerita" style={{height:'200px'}}></textarea>
                </div>
                <div class="col-25">
                    <input type="submit" value="Submit" />
                </div>
            </div>
            </form>
        </div>
        </>
     );
}
 
export default CreateBlog;
