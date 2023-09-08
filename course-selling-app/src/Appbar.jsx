import Button from '@mui/material/Button';
import {Typography} from "@mui/material";
import './Appbar.css';

function Appbar()
{
return (
        <div className='appbar'>
        <Typography variant={"h6"}>Coursera</Typography>
        <div className='button'>
            <Button size={"large"} variant="contained">Signup</Button>
            <Button size={"large"} variant="contained">Signin</Button>
        </div>
    </div>
)
}
export default Appbar;