import axios from 'axios';
import { useEffect, useState } from 'react';
import { configBaseURL } from '~/common/common';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import '../ManagerAccount/ManageAccount.scss';
import './ManagerTrendy.scss';
import { CustomModal } from '~/components/Modal/Modal';
import { ConfirmBox } from '~/components/ConfirmBox/ConfirmBox';
import { toast } from 'react-toastify';
import { FormTrendy } from './FormTrendy';
const rowData = [
    {
        id: 1,
        name: 'STT',
    },
    {
        id: 2,
        name: 'Id',
    },
    {
        id: 3,
        name: 'Name',
    },
    {
        id: 4,
        name: 'Thumbnail',
    },
    {
        id: 5,
        name: 'description',
    },
    {
        id: 6,
        name: 'watch_count',
    },
    {
        id: 7,
        name: '',
    },
    {
        id: 8,
        name: '',
    },
];
function ManageTrendy() {
    const [data, setData] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState();
    const [reload, setReload] = useState(false);
    const [openForm, setOpenForm] = useState(false);
    const getData = async () => {
        try {
            const res = await axios.get(`${configBaseURL}/api/trendy/get-list-trendy`);
            if (res.status === 200) {
                setData(res.data);
            }
        } catch (err) {
            console.log('err', err);
        }
    };
    useEffect(() => {
        getData();
    }, [reload]);
    const handleDelete = async () => {
        console.log(selectedItem);
        try {
            await axios.delete(`${configBaseURL}/api/trendy/delete/${selectedItem}`);
            setOpenModal(false);
            toast.success('Xo?? th??nh c??ng!');
            setReload(!reload);
        } catch (err) {
            console.log('err', err);
            setOpenModal(false);
            toast.error(err?.response?.data?.message || '???? c?? l???i x???y ra! h??y th??? l???i');
        }
    };
    const handleSelectItem = (id) => {
        setSelectedItem(id);
        setOpenModal(true);
    };
    const handleOpenCreateForm = () => {
        setSelectedItem('');
        setOpenForm(true);
    };
    const handleUpdateMusic = async (values) => {
      
        try {
            const url = `${configBaseURL}/api/trendy/update/${selectedItem}`;
            const bodyFormData = new FormData();
            bodyFormData.append('files', values.thumbnail);
            bodyFormData.append('name', values.name);
            bodyFormData.append('description', values.description);
            const res = await axios.post(url, bodyFormData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            toast.success(res.data?.message);
            setReload(!reload);
        } catch (err) {
            toast.error(err?.response?.data?.message || '???? c?? l???i x???y ra! h??y th??? l???i');
        }
    };
    const handleCreateNew = async (values) => {
        try {
            const url = `${configBaseURL}/api/trendy/create-trendy`;
            const bodyFormData = new FormData();
            bodyFormData.append('files', values.thumnail);
            bodyFormData.append('name', values.singer);
            bodyFormData.append('description', values.description);
            const res = await axios.post(url, bodyFormData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            toast.success(res.data?.message);
            setReload(!reload);
        } catch (err) {
            toast.error(err?.response?.data?.message || '???? c?? l???i x???y ra! h??y th??? l???i');
        }
    };
    const handleOpenEditForm = (id) => {
        setSelectedItem(id);
        setOpenForm(true);
    };

    return (
        <div className="managerUser">
            <Button onClick={handleOpenCreateForm} className="btn__add" variant="contained">Th??m m???i</Button>
            <p className="title">Danh s??ch xu h?????ng: </p>
            <CustomModal open={openModal} handleClose={() => setOpenModal(false)}>
                <ConfirmBox
                    handleClose={() => setOpenModal(false)}
                    title="B???n c?? mu???n x??a user n??y?"
                    handleConfirm={() => handleDelete()}
                />
            </CustomModal>
            <CustomModal open={openForm} handleClose={() => setOpenForm(false)}>
                <FormTrendy id={selectedItem} handleCreate={handleCreateNew} handleUpdate={handleUpdateMusic} />
            </CustomModal>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        {rowData.map((item) => (
                            <TableCell key={item.id}>{item.name}</TableCell>
                        ))}
                    </TableHead>
                    <TableBody>
                        {data.map((row, index) => (
                            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell align="left">{index + 1}</TableCell>
                                <TableCell align="left">{row.id}</TableCell>
                                <TableCell align="left">{row?.name}</TableCell>
                                <TableCell align="left">
                                    <img className="thumbnail" src={row?.thumbnail} alt="" />
                                </TableCell>
                                <TableCell align="left">{row?.description}</TableCell>
                                <TableCell align="left">{row?.watch_count}</TableCell>
                                <TableCell align="left">
                                    <Button onClick={() => handleOpenEditForm(row.id)} variant="contained" color="primary">
                                        Edit
                                    </Button>
                                </TableCell>
                                <TableCell align="left">
                                    <Button onClick={() => handleSelectItem(row.id)} variant="contained" color="error">
                                        X??a
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
export default ManageTrendy;
