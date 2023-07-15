import Typography from "@mui/material/Typography";
import Expert from "../../Components/Experts/Expert.jsx";

const ExpertAnalysis = () => {
    return (
        <div>
            <Typography variant={'h3'} display={"grid"} justifyContent={"center"} my={'3rem'}>Connect with experts!</Typography>
            <div style={{border: "solid #efefef 4px", margin: "2rem"}}>
                <Expert />
            </div>
        </div>
    );
};

export default ExpertAnalysis;