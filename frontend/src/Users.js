import { useNavigate } from 'react-router-dom';
import { Box, Button, Grid, Tab, Tabs } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import Axios from "axios";
import { useEffect, useState } from 'react';

const Users = () => {
    const navigate = useNavigate();

    const [users, setUsers] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});
    const [isEdit, setIsEdit] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    useEffect(() => {
        getUsers();
    }, []);

    const handleChangeTab = (event, newValue) => {
        setActiveTab(newValue);
    };

    const getUsers = () => {
        Axios.get('http://localhost:3001/api/users')
            .then(response => {
                setUsers(response.data?.response || []);
            })
            .catch(error => {
                console.error("Axios error :", error);
            });
    }

    const addUser = (data) =>{
        setSubmitted(true);

        const payload = {
            id: data.id,
            name: data.name,
            job_title: data.job_title,
            email: data.email,
            contact_number: data.contact_number,
            age: data.age,
            education_qualification: data.education_qualification,
            work_experience: data.work_experience,
        }
        Axios.post('http://localhost:3001/api/createuser', payload)
            .then(() => {
                getUsers();
                setSubmitted(false);
                isEdit(false);
            })
            .catch(error => {
                console.error("Axios error :", error);
            });
    }

    const updateUser = (data) => {
        setSubmitted(true);

        const payload = {
            id: data.id,
            name: data.name,
            job_title: data.job_title,
            email: data.email,
            contact_number: data.contact_number,
            age: data.age,
            education_qualification: data.education_qualification,
            work_experience: data.work_experience,
        }
        Axios.post('http://localhost:3001/api/updateuser', payload)
            .then(() => {
                getUsers();
                setSubmitted(false);
                isEdit(false);
            })
            .catch(error => {
                console.error("Axios error :", error);
            });
    }

    const deleteUser = (data) => {
        Axios.post('http://localhost:3001/api/deleteuser', data)
            .then(() => {
                getUsers();
            })
            .catch(error => {
                console.error("Axios error :", error);
            });
    }

    return (
        <Grid
            sx={{
                backgroundColor: '#88D3C3',
            }}
        >
            <Tabs value={activeTab} onChange={handleChangeTab}>
                <Tab label="Form" />
                <Tab label="Application Table" />
            </Tabs>
            <Box
                sx={{
                    width: 'calc(100% - 100px)',
                    margin: 'auto',
                    marginTop: '0px',
                }}
            >
                {activeTab === 0 && (
                    <UserForm
                        addUser={addUser}
                        updateUser={updateUser}
                        submitted={submitted}
                        data={selectedUser}
                        isEdit={isEdit}
                    />
                )}
                {activeTab === 1 && (
                    <UsersTable
                        rows={users}
                        selectedUser={data =>{
                            setSelectedUser(data);
                            setIsEdit(true);
                        }}
                        deleteUser={data => window.confirm('Do you want to delete this application?') && deleteUser(data)}
                    />
                )}
            </Box>
            <Grid item xs={12}>
                <Button
                    sx={{
                        margin: 'auto',
                        marginBottom: '20px',
                        backgroundColor: '#3a7e5c',
                        color: '#ffffff',
                        marginLeft: '15px',
                        marginTop: '20px',
                        '&:hover': {
                            opacity: '0.7',
                            backgroundColor: '#34654d',
                        }
                    }}
                    onClick={() => navigate('/SkillsBar')}
                >
                    States Bar
                </Button>
            </Grid>
        </Grid>
    );
}

export default Users;