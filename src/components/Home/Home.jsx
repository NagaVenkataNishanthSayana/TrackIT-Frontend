import { useState, useEffect, useContext } from 'react';
import { Button, Typography } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ProjectDetailModal from "../ProjectDetailModal/ProjectDetailModal";
import ProjectCard from "../ProjectCard/ProjectCard";
import { getAllProjects } from "../services/projectAPI";
import { UserContext } from "../../contexts/UserContext";
import { PROJECTS, CREATE_PROJECT } from '../../utils/constants';
import './Home.scss'


const Home = () => {
    const [open, setOpen] = useState(false);
    let [projectList, setProjectList] = useState([]);
    const [count, setCount] = useState(0);
    let { user, } = useContext(UserContext);
    let userProjectsList = projectList?.filter(project => project?.users?.includes(user.id) )
    
    useEffect(() => {
        getAllProjects()
            .then(projects => {
                setProjectList(projects)
                setCount(count + 1);
            })
            .catch(err => { console.error(err); }) // TODO: alert 
    }, [count, projectList.length]);

    const handleModalOpen = () => {
        setOpen(!open);
    };
    return (<>

        <div className="heading"> <Typography> <h1>{PROJECTS}</h1> </Typography> </div>
        <div className="projects" style={{ display: 'flex', flexDirection: 'row-reverse', marginRight: '68px', marginBottom: '15px' }}>
            <Button
                color="primary"
                variant="contained"
                endIcon={<AddOutlinedIcon fontSize="small" />}
                onClick={handleModalOpen}
            >{CREATE_PROJECT}</Button>
        </div>
        {
            open ? (
                <ProjectDetailModal open={open} handleClose={handleModalOpen} />
            ) : null
        }
        {
            userProjectsList.map((project) => {
                return <ProjectCard key={project.id} id={project.id} title={project.title} description={project.description} project={project} />
            })
        }
    </>)
}

export default Home;

