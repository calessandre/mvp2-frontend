import { useNavigate } from "react-router"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import { amber } from '@mui/material/colors';

// Componente correspondente ao card com as informações detalhadas da planta selecionada

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export default function PlantaCard(props) {
    const navigate = useNavigate()
    const planta = props.planta;
    const escondeBotao = props.escondeBotao; 

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

  return (
        <Card sx={{ maxWidth: 400}}>
            <CardMedia sx={{ height:345, width:400}}
                image={planta.imagem}
                title="Planta"
            />                   
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {planta.nome}
                </Typography>
            <Typography variant="body" color="text.secondary">
                    <b>Nome científico:</b> {planta.nome_cientifico}  <br /> 
                    <b>Nomes populares:</b> {planta.nomes_populares}  <br /> 
                    <b>Família:</b> {planta.familia}  <br /> 
                    <b>Categorias:</b> {planta.categorias}  <br /> 
                    <b>Clima:</b> {planta.clima}  <br /> 
                    <b>Origem:</b> {planta.origem}  <br /> 
                    <b>Altura:</b> {planta.altura}  <br /> 
                    <b>Luminosidade:</b> {planta.luminosidade}
                </Typography>
            </CardContent>
            
            <CardActions disableSpacing>

                <Button  
                    sx={{ color: amber[900], borderColor: amber[700], display: escondeBotao ? 'none':'inline'}} 
                    size="small" 
                    onClick={() => navigate('/plantas')}
                    variant="outlined">
                    Voltar
                </Button>
                <ExpandMore expand={expanded} 
                    onClick={handleExpandClick} 
                    aria-expanded={expanded} 
                    aria-label="Ver mais">
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph><b>Descrição</b></Typography>
                    <Typography paragraph>{planta.descricao}</Typography>
                </CardContent>
            </Collapse>
        </Card>
      );
}
