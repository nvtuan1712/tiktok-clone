import { getListUser } from "~/layouts/components/SidebarDashBoard/GetList";


function DashBoard() {
    getListUser()

    return ( <p>Danh sách người dùng</p> );
}

export default DashBoard;