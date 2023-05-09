import axios from "axios";

const URL_API = "http://127.0.0.1:8000/tasks/api/v1/tasks";

const api = axios.create({
  baseURL: URL_API,
});

export const getAlltasks = () => api.get("/");

export const getTask = (id) => api.get(`/${id}`);

export const createTask = (task) => api.post("/", task);

export const deleteTask = (id) => api.delete(`/${id}`);

export const updatetasks = (id, task) => api.put(`/${id}/`, task);
