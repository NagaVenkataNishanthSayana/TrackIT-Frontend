import axios from 'axios';
import { getBaseUrl } from '../../config.js';
const BASE_URL = getBaseUrl();

const headers = { "content-type": "application/json" }

export const getAllProjects = async () => {
    try {
        const res = await axios({
            url: `${BASE_URL}/projects`,
            method: 'GET',
            headers: headers
        })
        return res.data
    } catch (err) {
        console.error("axios catch error: ", err)
        return []
    }
};

export const createProject = async (project) => {
    try {
        const res = await axios({
            url: `${BASE_URL}/projects`,
            method: 'POST',
            header: headers,
            data: project
        })
        return res.data
    } catch (err) {
        console.error("axios catch error: ", err)
    }
}

export const updateProject = async (project, projectId) => {

    try {
        const res = await axios({
            url: `${BASE_URL}/projects/${projectId}`,
            method: 'PUT',
            header: headers,
            data: project
        })
        return res.data
    } catch (err) {
        console.error("axios catch error: ", err)
    }

}


export const deleteProjectById = async (projectId, isProjectAdmin) => {

    try {
        const res = await axios({
            url: `${BASE_URL}/projects/${projectId}?isProjectAdmin={isProjectAdmin}`,
            method: 'DELETE',
            header: headers,
        })
        console.log(res.data)
        return res.data
    } catch (err) {
        console.error("axios catch error: ", err)
    }
}

export const getAdminById = async (projectId) => {

    try {
        const res = await axios({
            url: `${BASE_URL}/projects/${projectId}`,
            method: 'GET',
        })
        return res.data
    } catch (err) {
        console.error("axios catch error: ", err)
    }
}

export const getAllUsersByProjectId = async (projectId) => {

    try {
        const res = await axios({
            url: `${BASE_URL}/projects/${projectId}/users`,
            method: 'GET',
        })
        return res.data
    } catch (err) {
        console.error("axios catch error: ", err)
    }
}

export const getAllTasksByProjectId = async (projectId) => {
    try {
        const res = await axios({
            url: `${BASE_URL}/projects/${projectId}/tasks`,
            method: 'GET',
        })
        return res.data
    } catch (err) {
        console.error("axios catch error: ", err)
    }
}

export const getAllUserTasksByProjectId = async (projectId, userId) => {
    try {
        const res = await axios({
            url: `${BASE_URL}/projects/${projectId}/users/${userId}`,
            method: 'GET',
        })
        return res.data
    } catch (err) {
        console.error("axios catch error: ", err)
    }
}

export const removeUserFromProject = async (projectId, userId, isProjectAdmin) => {
    try {
        const res = await axios({
            url: `${BASE_URL}/projects/${projectId}/users/${userId}?isProjectAdmin=${isProjectAdmin}`,
            method: 'DELETE',
            header: headers,
        })
        return res.data
    } catch (err) {
        console.error("axios catch error: ", err)
    }
}

export const createTask = async (data, projectId) => {

    try {
        const res = await axios({
            url: `${BASE_URL}/projects/${projectId}/tasks`,
            method: 'POST',
            header: headers,
            data: data
        })
        return res.data
    } catch (err) {
        console.error("axios catch error: ", err)
    }

}

export const updateTask = async (task, projectId, taskId) => {

    try {
        const res = await axios({
            url: `${BASE_URL}/projects/${projectId}/tasks/${taskId}`,
            method: 'PUT',
            header: headers,
            data: task
        })
        return res.data
    } catch (err) {
        console.error("axios catch error: ", err)
    }
}


export const deleteTask = async (projectId, taskId) => {
    try {
        const res = await axios({
            url: `${BASE_URL}/projects/${projectId}/tasks/${taskId}`,
            method: 'DELETE',
            header: headers,
        })
        return res.data
    } catch (err) {
        console.error("axios catch error: ", err)
    }
}

export const getTasksAnalytics = async (projectId) => {
    try {
        const res = await axios({
            url: `${BASE_URL}/projects/${projectId}/tasks/analytics`,
            method: 'GET',
        })
        return res.data
    } catch (err) {
        console.error("axios catch error: ", err)
    }
}


export const getUserTasksAnalytics = async (projectId, userId) => {
    try {
        const res = await axios({
            url: `${BASE_URL}/projects/${projectId}/users/${userId}/tasks/analytics`,
            method: 'GET',
        })
        return res.data
    } catch (err) {
        console.error("axios catch error: ", err)
    }
}




