import { useState } from 'react';
import { Card, CardHeader, CardContent, Button, Divider, Typography, Chip, Avatar, Tooltip } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DeleteModal from "../components/DeleteModal/DeleteModal";
import { deepOrange, deepPurple, green, yellow, red } from '@mui/material/colors';
import ClockIcon from '@mui/icons-material/AccessTime';
import DoneIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Autorenew';
import CreatedIcon from '@mui/icons-material/AddTask';
import BugIcon from '@mui/icons-material/BugReportOutlined';
import FeatureIcon from '@mui/icons-material/DataSaverOnOutlined';
import SubmittedIcon from '@mui/icons-material/AlarmOnOutlined';
import * as Constants from "../utils/constants";
import TaskDetailModal from "./TaskDetailModal";
import './TaskCard.scss';

const TaskCard = (props) => {
  const [open, setOpen] = useState(false);

  const [is_delete_open, setDeleteOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDeleteOpen = () => {
    setDeleteOpen(true)
  }
  const handleDeleteClose = () => {
    setDeleteOpen(false)
  }

  const formatShortDate = (date) => {
    var newShortDate = new Date(date).toDateString();
    return newShortDate.substring(newShortDate.indexOf(" ") + 1);
  }

  return (
    <Card className={'task-card ' + props.taskStatus} >
      <CardHeader sx={{
        display: "flex",
        overflow: "hidden",
        textOverflow: "ellipsis",
        "& .MuiCardHeader-content": {
          overflow: "hidden",
          noWrap: true
        }
      }}
        action={
          <><Button size="small" color="error" variant="text" onClick={(e) => handleDeleteOpen()}>
            <DeleteIcon />
          </Button><Button size="small" color="primary" variant="text" onClick={(e) => handleOpen()}>
              <EditIcon />
            </Button></>

        }

        avatar={
          { ...props?.userName } && <Tooltip title={props?.userName}>
            <Avatar sx={{
              bgcolor: deepOrange[500], fontSize: "small", width: 30, height: 30
            }}> {props?.userName?.charAt(0)} </Avatar>
          </Tooltip>
        }
        titleTypographyProps={{ variant: 'h5' }}
        title={props.taskName} className="card-header" />
      <div className="float-parent-element">
      </div>
      <Divider />
      <CardContent className="float-parent-element">
        <div className="card-description">
          <div className="task-chips">
            {props?.taskLabel[0] === "BUG" && (
              <Chip size="small" sx={{ marginRight: 1 }} icon={<BugIcon />} label={Constants.BUG} onClick={(e) => { console.log("clicked") }} color="error" />
            )}

            {props?.taskLabel[0] === "FEATURE" && (
              <Chip size="small" sx={{ marginRight: 1 }} icon={<FeatureIcon />} label={Constants.FEATURE} onClick={(e) => { console.log("clicked") }} color="info" />
            )}

            {props?.taskStatus[0] === "CREATED" && (
              <Chip size="small" sx={{ marginRight: 1 }} icon={<CreatedIcon />} label={Constants.CREATED} onClick={(e) => { console.log("clicked") }} color="info" />
            )}
            {props?.taskStatus[0] === "IN_PROGRESS" && (
              <Chip size="small" sx={{ marginRight: 1 }} icon={<PendingIcon />} label={Constants.IN_PROGRESS} onClick={(e) => { console.log("clicked") }} color="warning" />
            )}
            {props?.taskStatus[0] === "DONE" && (
              <Chip size="small" sx={{ marginRight: 1 }} icon={<DoneIcon />} label={Constants.DONE} onClick={(e) => { console.log("clicked") }} color="success" />
            )}
            {props?.taskStatus[0] !== "DONE" && <Chip size="small" sx={{ marginRight: 1 }} icon={<ClockIcon />} label={formatShortDate(props.dueDate)} onClick={(e) => { console.log("clicked") }} color="success" />
            }
            {props?.taskStatus[0] === "DONE" && <Chip size="small" sx={{ marginRight: 1 }} icon={<SubmittedIcon />} label={formatShortDate(props.dueDate)} onClick={(e) => { console.log("clicked") }} color="success" />
            }
          </div>
          <Typography className="card-text-description"><b>Description: </b>{props.description}</Typography>
          {
            open ? (
              <TaskDetailModal props={props} open={open} handleClose={handleClose} projectStartDate={props?.projectStartDate} projectEndDate={props?.projectEndDate} />
            ) : null
          }

          {
            is_delete_open ? (
              <DeleteModal props={props} open={is_delete_open} handleClose={handleDeleteClose} isProject={false} />
            ) : null
          }
        </div>
      </CardContent>
    </Card>
  );
}

export default TaskCard;