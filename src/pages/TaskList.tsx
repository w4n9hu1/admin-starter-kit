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
            </div>
            <div className="bg-blue-500 grow">
                table
            </div>
        </div>
    )
}