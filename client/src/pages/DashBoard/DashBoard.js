//Thư viện externor trước(thư viện bên ngoài)
import { configBaseURL } from '~/common/common'

function DashBoard() {

    return (
        <>
            <p>Danh sách người dùng</p>
            <form action={`${configBaseURL}/api/video/upload`} encType="multipart/form-data" method="POST">
                <input type="file" name="myFile" />
                <input type="submit" value="Upload a file"/>
            </form>
<img  src='http://localhost:5000/public/images/user.png' alt="" style={{width: '300px', height: '300px'}}></img>
        </>
    );
}

export default DashBoard;
