import { React, useEffect, useState } from 'react';
import * as api from "../../../../services/Api";
//import axios from 'axios';
import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@material-ui/core';
import { Button } from 'reactstrap';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import UserForm from './UserForm';
import axios from 'axios';

const Users = () => {

    const Delete = () => {
        console.log("asd");
    }
    const Edit = (index) => {
        //openEdit();
        SelectedUser(index);

        OpenEdit();
    }

    const Create = () => {
        OpenCreate();
    }

    const columns = [
        { name: "id", label: "Id", options: { filter: true, sort: true } },
        { name: "name", label: "Name", options: { filter: true, sort: true } },
        { name: "email", label: "Email", options: { filter: true, sort: true } },
        { name: "role", label: "Role", options: { filter: true, sort: true } },
    ];

    const options = {
        selectableRows: 'single',
        filterType: 'dropdown',
        responsive: 'standard',
        pagination: false,
        search: false,
        customToolbarSelect: selectedRows => (
            <div>
                <IconButton name="delete" variant="text" onClick={Delete} style={{ marginRight: "5px" }}><span className="description" data-tooltip="Delete"><DeleteIcon /></span></IconButton>
                <IconButton name="edit" variant="text" onClick={() => { Edit(selectedRows.data[0].dataIndex) }} style={{ marginRight: "5px" }}><span className="description" data-tooltip="Edit"><EditIcon /></span></IconButton>
            </div>
        ),
        textLabels: {
            body: {
                noMatch: "Sorry, no matching records found",
                toolTip: "Sort",
                columnHeaderTooltip: column => `Sort for ${column.label}`
            },
            /*pagination: {
              next: "Next Page",
              previous: "Previous Page",
              rowsPerPage: "Rows per page:",
              displayRows: "of",
            },*/
            toolbar: {
                search: "Search",
                downloadCsv: "Download CSV",
                print: "Print",
                viewColumns: "View Columns",
                filterTable: "Filter Table",
            },
            filter: {
                all: "All",
                title: "FILTERS",
                reset: "RESET",
            },
            viewColumns: {
                title: "Show Columns",
                titleAria: "Show/Hide Table Columns",
            },
            selectedRows: {
                text: "row(s) selected",
                delete: "Delete",
                deleteAria: "Delete Selected Rows",
            },
        }

    };


    const [arrayUsers, setUsers] = useState([]);
    useEffect(() => {
        axios.get(api.BaseURL + 'user').then(response => {
            let dataResponse = response.data;
            setUsers(dataResponse.data.users.data);
        }).catch(setUsers([]));
    }, []);

    const [openCreate, setOpenCreate] = useState(false);
    const OpenCreate = () => {
        setOpenCreate(true);
    };
    const CloseCreate = () => {
        setOpenCreate(false);
    };

    const [openEdit, setOpenEdit] = useState(false);
    const OpenEdit = () => {
        setOpenEdit(true);
    };
    const CloseEdit = () => {
        setOpenEdit(false);
    };

    const [selectedUser, setSelectedUser] = useState(null);
    const SelectedUser = (index) => {
        setSelectedUser(index);
    }

    return (
        <div>
            <ul className="pagination float-left">
                <li className="page-item">
                    <a className="page-link" href="#">
                        <i className="fas fa-step-backward"></i>
                    </a>
                </li>
                <li
                    v-if="pagination.current_page == 1"
                    className="page-item disabled"
                >
                    <a className="page-link" href="#" tabIndex="-1"
                    ><i className="fas fa-chevron-circle-left"></i
                    ></a>
                </li>
                <li className="page-item">
                    <a
                        className="page-link"
                        href="#"
                        tabIndex="-1"

                    ><i className="fas fa-chevron-circle-left"></i></a>
                </li>
                <li className="page-item disabled">
                    <a className="page-link" href="#">Pag. 1 of 5</a>
                </li>
                <li v-if="pagination.current_page == pagination.last_page"
                    className="page-item disabled" >
                    <a className="page-link" href="#"
                    ><i className="fas fa-chevron-circle-right"></i></a>
                </li>
                <li className="page-item">
                    <a
                        className="page-link"
                        href="#"

                    ><i className="fas fa-chevron-circle-right"></i></a>
                </li>
                <li className="page-item">
                    <a
                        className="page-link"
                        href="#"

                    ><i className="fas fa-step-forward"></i
                    ></a>
                </li>
            </ul><br /><br /><br /><br /><br />
            <ThemeProvider theme={createTheme()}>
                <Button name="create" variant="text" onClick={Create} color="transparent" style={{ float: "left", padding: "10px", marginTop: "10px", marginLeft: "10px", marginRight: "10px" }}><AddIcon /></Button>
                <MUIDataTable
                    title={"Users List"}
                    data={arrayUsers}
                    columns={columns}
                    options={options}
                /><br /><br /><br />
            </ThemeProvider>

            <Dialog open={openCreate} onClose={CloseCreate} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{"Create User"}</DialogTitle>
                <DialogContent>
                    <UserForm data={{ type: 'create' }} />
                </DialogContent>
            </Dialog>

            <Dialog open={openEdit} onClose={CloseEdit} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{"Edit User"}</DialogTitle>
                <DialogContent>
                    <UserForm data={{ type: 'edit', user: arrayUsers[selectedUser] }} />
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Users
