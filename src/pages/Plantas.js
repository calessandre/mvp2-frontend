import { useEffect, useState } from "react"
import ItemPlanta from "../components/ItemPlanta"
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import BarraSuperior from '../components/BarraSuperior';

// Importação dos dados do json com as plantas que deverão ser exibidas nos cards
import plantasJson from '../data/plantas.json'

// Página que lista as plantas retornadas (em cards) pela busca simulada

export default function Plantas() {
  const [listaPlantas, setListaPlantas] = useState ([])

  useEffect(() => {
    setListaPlantas(plantasJson.plantas)
  }, [])

  return (
    <>
    <BarraSuperior />

    <Grid sx={{  width: 1366 }} container>
    <Grid item xs>
        <Item>         
        </Item>
      </Grid>

      <Grid item xs>
        <Item>
          <Grid sx={{ width: 1200}} container>
            <Grid item xs>
              <Item>
                  <Breadcrumbs aria-label="breadcrumb" sx={{ p:'10px' }}>
                    <Link underline="hover" color="inherit" to={`/`}> Home </Link>
                    <Typography color="text.primary"> Resultado da busca </Typography>
                  </Breadcrumbs>
                  <br />
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



    <Grid sx={{ width: 1366 }} container>
    <Grid item xs>
        <Item>         
        </Item>
      </Grid>

      <Grid item xs>
        <Item>
        <Grid sx={{width: 1200}} container>
      
        {listaPlantas.map((p, index) => (
              <Grid item xs={3} sx={{p: "0px 0px 20px 0px" }}>
    			    	<Item>
		      		  	<ItemPlanta key={index} planta={p} escondeBotao={false} />
				        </Item>
			        </Grid>
           ))}
            


           </Grid>
        </Item>
      </Grid>


      <Grid item xs>
        <Item>
        </Item>
      </Grid>

    </Grid>
    </>
  )
}
