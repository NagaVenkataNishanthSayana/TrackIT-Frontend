import { useContext } from "react";
import { Box, Typography, Modal, Button } from '@mui/material';
import { UserContext } from "../../contexts/UserContext.js";
import { deleteProjectById, deleteTask } from '../services/projectAPI.js'
import "./DeleteModal.scss"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '25%',
    height: '75px',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '0.5rem',
    p: 4,
};

export default function DeleteModal({ props, open, handleClose, isProject }) {
    const user = useContext(UserContext)
    const handleDelete = (e) => {
        if (isProject) {
            // const isAdmin = user.id === props.project.adminUser
            deleteProjectById(props.id, true).then((res) => {
                console.log("delete successful")
            })
        }

        deleteTask(props.projectId, props.id).then((res) => {
            console.log("delete successful")
        })
        handleClose()
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title" ß
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}
                    component="form"
                    noValidate
                    autoComplete="off">
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Are you sure? This {isProject ? "Project" : "Task"} will be Deleted
                    </Typography>

                    <Button variant="contained" color="error" onClick={handleDelete}>Delete</Button>
                    <Button sx={{ marginRight: 1 }} color="error" onClick={handleClose}>Cancel</Button>
                </Box>

            </Modal>
        </div>
    );
}
