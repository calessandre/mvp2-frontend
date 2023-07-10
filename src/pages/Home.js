import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
//import { useEffect, useState } from "react"
import planta_do_dia from '../data/planta_do_dia.json'
import ItemPlanta from "../components/ItemPlanta"
import inicial from '../assets/inicial.png'
import BarraSuperior from '../components/BarraSuperior';


export default function Home() {

    //const [planta2, setPlanta] = useState (planta_do_dia)
    

        //setPlanta(planta_do_dia.planta)
 

  //console.log(planta_do_dia);


  return (
    <>

      <BarraSuperior />


    <Grid sx={{ border: '0px solid red', width: 1366, height: 768}} container>
    <Grid item xs>
        <Item>
          
        </Item>
      </Grid>
      <Grid item xs>
        <Item>
          <Grid sx={{ border: '0px solid black', width: 1200}} container  alignItems="flex-end">
          
          <Grid item xs={8}>
        <Item>
          <img class="img_inicial" src={inicial} alt='inicial' size='10px'></img>
        </Item>
      </Grid>

          
          <Grid item xs={4}>


          <Item>
            <div class="card_dia">
              <div class="card_texto">PLANTA DO DIA</div>
              <ItemPlanta planta={planta_do_dia} escondeBotao={true}/>
            </div>  
          
         </Item>
         </Grid>
          </Grid>
        </Item>
      </Grid> 
      <Grid item xs>
        <Item>
          
        </Item>
      </Grid>

    </Grid>
    </>
        
  );
}

