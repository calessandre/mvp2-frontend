import * as React from 'react';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import logo from '../assets/logo.png'
import InputBusca from './InputBusca';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HelpIcon from '@mui/icons-material/Help';
import { grey } from '@mui/material/colors';

// Componente correspondente a barra superior que aparece em todas as páginas

export default function BarraSuperior() {
  return (
    <>
      <header>

      <Grid container 
        sx={{ width: 1366}} 
        spacing={2} 
        justifyContent="center" 
        alignItems="center">
        <Grid item xs={3}>
          <Item>
              <img class="img_logo" src={logo} alt="logo" />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <InputBusca submit="/plantas" placeholder="Busque suas plantas aqui..." />
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            
            <HelpIcon sx={{ p:1, fontSize: 28, color: grey[300] }} />
            <MailOutlineIcon sx={{ p:1, fontSize: 28, color: grey[300] }} />
            <a href="http://www.twitter.com">
              <TwitterIcon sx={{ p:1, fontSize: 28, color: grey[300] }} />
            </a>
            <a href="http://www.instagram.com">  
              <InstagramIcon sx={{ p:1, fontSize: 28, color: grey[300] }} />
            </a>  

          </Item>
        </Grid>
        <Grid item xs={1}>
          <Item></Item>
        </Grid>
      </Grid>



      </header>
      
  </>

      
     
  );
}
