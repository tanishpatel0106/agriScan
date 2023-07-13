import {expertList} from "./expertList.jsx";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Contact from "./Contact.jsx";


const Expert = () => {
    return (
        <>
            { expertList.map(expert => {
                return (
                    <div key={expert.id}
                         style={{
                             display: "flex",
                             margin: "3rem",
                             flexDirection: "column",
                             alignItems: "center"}}
                    >
                        <Typography variant={'h4'} mb={4}>
                            {expert.name}
                        </Typography>
                        {/*<div style={{border: "solid #efefef 4px", width: "40vw" }} >*/}
                        <div style={{width: "50vw"}}>
                            <Typography variant="body1">
                                {expert.details}
                            </Typography>
                        </div>
                        <div>
                            <Button variant={"contained"} sx={{m: '0.5rem', bgcolor: '#2a9d8f'}} >
                                <Contact name={expert.name} email={expert.email} num={expert.num}/>
                            </Button>
                            <Button variant={"contained"} size={"large"} sx={{ml: '0.5rem', bgcolor: '#2a9d8f'}}>
                                Connect
                            </Button>
                        </div>

                    </div>
                )
            }) }
        </>
    );
};

export default Expert;