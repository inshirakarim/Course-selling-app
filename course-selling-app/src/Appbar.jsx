import Button from '@mui/material/Button';
import {Typography} from "@mui/material";
import './Appbar.css';
import { useNavigate } from 'react-router-dom';

function Appbar()
{
    const navigate = useNavigate();
return (
    <div>
        <div className='appbar'>
        <Typography sx={{margin: 2 , marginTop: 1}} variant={"h5"}>Coursera</Typography>
        <div>
            <Button sx={{marginRight: 2 , marginTop: 1}} size={"large"} variant="contained" onClick={()=> navigate("/signup")}>Sign up</Button>
            <Button sx={{marginRight: 2 , marginTop: 1}} size={"large"} variant="contained" onClick={()=> navigate("/signin")}>Sign in</Button>
        </div>
    </div>
</div>
)
}
export default Appbar;