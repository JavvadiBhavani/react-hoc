import {Grid, Typography} from '@mui/material';

function Headcheck() {
    return(
        <div >
            <Grid   item lg={6} md={12} sm={12} xs={12}>
               <Grid textAlign={'center'} ><Typography variant='h2'>Checkout</Typography></Grid><br/><br/></Grid>
              <div>
                  <Typography variant='h4'>Shipping Address</Typography>
                </div>
            
        </div>
    );
}

export default Headcheck;