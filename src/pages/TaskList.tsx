import { Button, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, FormControl } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import React, { ChangeEvent, useState } from "react";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from "dayjs";
import 'dayjs/locale/zh-cn';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
import { DataGrid, GridActionsCellItem, GridColDef, GridRowParams, GridRowsProp } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

function generateRandomTasks(n: number): Task[] {
    const tasks: Task[] = [];
    for (let i = 1; i <= n; i++) {
        const randomStatus = Math.random() < 0.33 ? 'open' : Math.random() < 0.66 ? 'in-progress' : 'done';
        tasks.push({
            id: i,
            title: `Task ${i}`,
            description: `Description of Task ${i}`,
            status: randomStatus,
            createdAt: new Date(Date.now() - Math.random() * 1000000000).toISOString(),
        });
    }
    return tasks;
}

const rows: GridRowsProp = generateRandomTasks(10).map(task => ({
    id: task.id,
    title: task.title,
    description: task.description,
    status: task.status,
    createdAt: task.createdAt,
}));

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'description', headerName: 'Description', width: 400 },
    {
        field: 'status', headerName: 'Status', width: 200,
        renderCell: (params) => {
            const status = params.value as string;
            let colorClass = '';
            switch (status) {
                case 'open':
                    colorClass = 'text-green-600';
                    break;
                case 'in-progress':
                    colorClass = 'text-orange-600';
                    break;
                case 'done':
                    colorClass = 'text-blue-600';
                    break;
                default:
                    colorClass = 'text-black';
            }
            return <span className={colorClass}>{status}</span>;
        },
    },
    {
        field: 'createdAt', headerName: 'Created At', width: 300,
        valueGetter: (params) => dayjs(params.value as string).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
        field: 'actions',
        type: 'actions',
        headerName: 'Actions',
        getActions: (params: GridRowParams) => [
            <GridActionsCellItem
                icon={<EditIcon />}
                label="Delete"
                onClick={() => { console.log(params.id) }}
            />,
        ]
    }
];

export default function TaskList() {

    const [queryParams, setQueryParams] = useState({
        page: 1,
        pageSize: 10,
        sort: "id",
        order: "asc",
        createdAtFrom: dayjs().subtract(7, 'day').startOf('day').toISOString(),
        createdAtTo: dayjs().endOf('day').toISOString(),
        title: "",
        description: "",
        status: ""
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setQueryParams(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSelectChange = (e: SelectChangeEvent) => {
        const { name, value } = e.target;
        setQueryParams(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleDatePickerChange = (name: string) => (value: Dayjs | null) => {
        setQueryParams(prevState => ({
            ...prevState,
            [name]: value?.toISOString()
        }));
    };

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        console.log("submit", queryParams);
    }

    return (
        <div className="w-full flex flex-col space-y-6">
            <div>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <Grid container spacing={2}>
                        <Grid item xs={10} container spacing={2}>
                            <Grid item xs={6} md={4} lg={3}>
                                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="zh-cn">
                                    <DateTimePicker
                                        sx={{ width: '100%' }}
                                        defaultValue={dayjs(queryParams.createdAtFrom)}
                                        label="CreatedAt From"
                                        name="createdAtFrom"
                                        onChange={handleDatePickerChange("createdAtFrom")}
                                        views={['year', 'day', 'hours', 'minutes', 'seconds']}
                                        viewRenderers={{
                                            hours: null,
                                            minutes: null,
                                            seconds: null,
                                        }} />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={6} md={4} lg={3}>
                                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="zh-cn">
                                    <DateTimePicker
                                        sx={{ width: '100%' }}
                                        label="CreatedAt To"
                                        defaultValue={dayjs(queryParams.createdAtTo)}
                                        name="createdAtTo"
                                        onChange={handleDatePickerChange("createdAtTo")}
                                        views={['year', 'day', 'hours', 'minutes', 'seconds']}
                                        viewRenderers={{
                                            hours: null,
                                            minutes: null,
                                            seconds: null,
                                        }} />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={6} md={4} lg={3}>
                                <TextField label="Task description" name="description" onChange={handleChange} fullWidth />
                            </Grid>
                            <Grid item xs={6} md={4} lg={3}>
                                <TextField label="Task title" name="title" onChange={handleChange} fullWidth />
                            </Grid>
                            <Grid item xs={6} md={4} lg={3}>
                                <FormControl fullWidth>
                                    <InputLabel id="status-select-label">Status</InputLabel>
                                    <Select
                                        labelId="status-select-label"
                                        value={queryParams.status}
                                        label="Status"
                                        name="status"
                                        onChange={handleSelectChange}
                                        fullWidth
                                    >
                                        <MenuItem value={""}> <em>All</em></MenuItem>
                                        <MenuItem value={"open"}>Open</MenuItem>
                                        <MenuItem value={"inprogress"}>In-Progress</MenuItem>
                                        <MenuItem value={"done"}>Done</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item xs={2} display="flex" justifyContent="center" alignItems="center">
                            <Button type="submit" variant="contained" startIcon={<SearchIcon />}>Search</Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <div className="flex space-x-4">
                <Button variant="contained" startIcon={<AddCircleIcon />}>Create Task</Button>
                <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>Delete Tasks</Button>
                <Button variant="outlined" startIcon={<AssignmentIndIcon />}>Assign Tasks</Button>

            </div>
            <div className="grow">
                <DataGrid checkboxSelection
                    rows={rows} columns={columns}
                    style={{ width: '100%' }} />
            </div>
        </div>
    )
}