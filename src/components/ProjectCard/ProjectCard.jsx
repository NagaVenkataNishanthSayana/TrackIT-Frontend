import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardContent, Button, Divider, Typography, Tooltip, Chip, Avatar, AvatarGroup } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { deepOrange, deepPurple, green, yellow, red } from '@mui/material/colors';
import ProjectDetailModal from "../ProjectDetailModal/ProjectDetailModal";
import { getAllUsersByProjectId } from "../services/projectAPI";
import DeleteModal from "../DeleteModal/DeleteModal";
import { UserContext } from "../../contexts/UserContext";
import PositionedSnackbar from "../PositionedSnackBar/PositionedSnackbar";
import './ProjectCard.scss'

const ProjectCard = (props) => {
  let navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const [is_delete_open, setDeleteOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);
  let projectId = props.id
  const { user } = useContext(UserContext)
  let isProjectAdmin = props.project.adminUser === user.id

  useEffect(() => {
    getAllUsersByProjectId(projectId).then(users => {
      setUsers(users)
      setCount(count + 1)
    }).catch(err => {
      console.error(err);
      // TODO: alert
    })

  }, [count])

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDeleteOpen = (e) => {
    setDeleteOpen(true)
  }
  const handleDeleteClose = () => {
    setDeleteOpen(false)
  }
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const formatShortDate = (date) => {
    var newShortDate = new Date(date).toDateString();
    return newShortDate.substring(newShortDate.indexOf(" ") + 1);
  }

  const backgroundColors = [deepOrange[500], green[500], yellow[500], deepPurple[500]]

  const Avatars = () => users?.map((user, idx) => <Tooltip key={idx} title={user?.userName}>
    <Avatar sx={{ bgcolor: backgroundColors[idx], fontSize: "small" }}> {user?.userName[0]} </Avatar>
  </Tooltip>)
  const UserIcons = () => {
    return <div>
      {props.title}
    </div>
  };
  return (
    <Card className="card">
      <div className="float-parent-element">
        <CardHeader title={<UserIcons />}
          avatar={
            <AvatarGroup> {<Avatars />} </AvatarGroup>
          }
          action={
            <>
              <Button size="small" color="error" variant="text" disabled={!isProjectAdmin} onClick={(e) => handleDeleteOpen()}>
                <DeleteIcon />
              </Button>
              <Button size="small" color="primary" variant="text" disabled={!isProjectAdmin} onClick={(e) => handleOpen()}>
                <EditIcon />
              </Button>
            </>

          } className="project-card-header" titleTypographyProps={{ variant: 'h5', noWrap: true }}
          sx={{
            display: "flex",
            overflow: "hidden",
            "& .MuiCardHeader-content": {
              overflow: "hidden"
            }
          }}
        />
      </div>
      <Divider />
      <CardContent className="float-parent-element">
        <div className="card-description">
          <Typography>{props.description}</Typography>

          {
            open ? (
              <ProjectDetailModal props={props} open={open} handleClose={handleClose} />
            ) : null
          }

          {
            is_delete_open ? (
              <DeleteModal props={props} open={is_delete_open} handleClose={handleDeleteClose} isProject={true} />
            ) : null
          }
        </div>

      </CardContent>
      <div className="footer">
        <Chip sx={{ marginRight: 1 }} label={"Start Date: " + formatShortDate(props.project.startDate)} onClick={handleClick} color="primary" />
        <ArrowRightAltOutlinedIcon sx={{ color: "orange" }} />
        <Chip label={"End Date: " + formatShortDate(props.project.endDate)} onClick={handleClick} color="success" />
        <div className="detail-view-button">
          <Button size="small" color="primary" variant="text" onClick={(e) => navigate(`/project-detail/${props.id}`, { state: props })}>
            Detail View
            <ArrowForwardIcon />
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default ProjectCard;