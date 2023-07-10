// https://reactrouter.com/en/main/hooks/use-location
// https://reactrouter.com/en/main/hooks/use-params
import { useLocation, useParams } from "react-router"
import PlantaCard from "../components/PlantaCard"
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import BarraSuperior from '../components/BarraSuperior';

export default function PlantaDetails() {
  // Hook que permite identificar o location, pathname, state do componente.
  // Nesse caso só precisamos do state que foi enviado pelo componente Item com as informações daquela planta selecionada.

  let { state } = useLocation();
  //console.log(useLocation())

  // De forma geral, dá acesso aos parâmetros passados no path quando chamamos o componente.
  // Nesse caso temos acesso ao id que foi enviado como parâmetro no componente Item. 
  let { id } = useParams();

  return (

    <>
    <BarraSuperior />

    <Grid sx={{ width: 1366}} container>
      <Grid item xs>
        <Item></Item>
      </Grid>

      <Grid item xs>
        <Item>
          <Grid sx={{ width: 1200 }} container>
            <Grid item xs>
             <Item>
               <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" to={`/`}> Home </Link>
                <Link underline="hover" color="inherit" to={`/plantas`} >Resultado da busca </Link>
                <Typography color="text.primary"> Detalhes </Typography>
              </Breadcrumbs>
              <br></br>
              </Item>
            </Grid>
          </Grid>
        </Item>  
      </Grid>      
      <Grid item xs>
        <Item></Item>
      </Grid>
    </Grid>

    <Grid sx={{ width: 1366}} container>
      <Grid item xs>
        <Item></Item>
      </Grid>
      <Grid item xs>
        <Item>
          <Grid sx={{ width: 1200}} container>
            <Grid item xs>
              <Item>
                <PlantaCard planta={state.p} escondeBotao={false}/>
              </Item>
            </Grid>   
          </Grid>
        </Item>
      </Grid>
      <Grid item xs>
        <Item></Item>
      </Grid>
    </Grid>  

    </>
  )
}
