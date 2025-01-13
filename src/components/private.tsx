import { Button } from "@mui/material"
import { styled } from '@mui/material/styles';
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
export const Private=()=>{
  console.log("in private");
  
   return(<>
   <h1>dvory in private</h1>
   <Button
    component="label"
    role={undefined}
    variant="contained"
    tabIndex={-1}
  >
    Upload files
    <VisuallyHiddenInput
      type="file"
      onChange={(event) => console.log(event.target.files)}
      multiple
    />
  </Button>
  </>) 
}