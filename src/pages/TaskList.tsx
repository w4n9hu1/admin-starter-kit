import { Grid } from "@mui/material";

export default function TaskList() {
    return (
        <div className="w-full flex flex-col">
            <Grid container spacing={2}>
                <Grid item xs={9} container spacing={2}>
                    <Grid item xs={6} md={4} lg={3}>
                        <div className="bg-red-300">1-1</div>
                    </Grid>
                    <Grid item xs={6} md={4} lg={3}>
                        <div className="bg-red-300">1-2</div>
                    </Grid>
                    <Grid item xs={6} md={4} lg={3}>
                        <div className="bg-red-300">1-2</div>
                    </Grid>
                    <Grid item xs={6} md={4} lg={3}>
                        <div className="bg-red-300">1-1</div>
                    </Grid>
                    <Grid item xs={6} md={4} lg={3}>
                        <div className="bg-red-300">1-1</div>
                    </Grid>
                </Grid>
                <Grid item xs={3} display="flex" justifyContent="center" alignItems="center">
                    2
                </Grid>
            </Grid>
            <div>
                actions
            </div>
            <div className="bg-red-300 grow">
                table
            </div>
        </div>
    )
}