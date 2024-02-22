import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import { useState } from "react";

export default function TaskList() {
    const [taskStatus, setTaskStatus] = useState('open');

    return (
        <div className="w-full space-y-3">
            <div>
                <form action="">
                    <div className="flex items-center">
                        <div>

                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { my: 1, mx: 3, width: '30ch' },
                                }}
                                autoComplete="off"
                            >
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DateTimePicker label="Task created From" />
                                </LocalizationProvider>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DateTimePicker label="Task created To" />
                                </LocalizationProvider>
                                <TextField variant="outlined" label="Task title" />
                                <FormControl >
                                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        value={taskStatus}
                                        label="Status"
                                        onChange={() => setTaskStatus('')}
                                    >
                                        <MenuItem value={10}>Open</MenuItem>
                                        <MenuItem value={20}>In-Progress</MenuItem>
                                        <MenuItem value={30}>Done</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField variant="outlined" label="Task decription" />
                            </Box>
                        </div>
                        <div className="p-6">
                            <Button type="submit" variant="contained">Search</Button>
                        </div>
                    </div>
                </form >
            </div>
            <div>
                <Stack spacing={2} direction="row">
                    <Button variant="contained">Create Task</Button>
                    <Button variant="outlined">Export</Button>
                </Stack>
            </div>
            <div>
                table
            </div>
        </div >
    )
}