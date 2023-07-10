import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { amber } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


// Componente correspondente ao card para a página que exibe todas as plantas da base de dados
// O componente foi reaproveitado na tela inicial (Home.js)

export default function ItemPlanta(props) {
  
  const Favoritar = () => {
    setFavorito(!favorito);
  }

  const escondeBotao = props.escondeBotao;    
  const planta = props.planta;
  //const [inicialPlanta, setInicialPlanta] = useState (planta.nome.substring(0, 1));
  const inicialPlanta = planta.nome.substring(0, 1);
  const [favorito, setFavorito] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (

     <>

  <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Compartilhar</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Informe o e-mail abaixo para compartilhar a planta:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
    <div>
      <Card sx={{ maxWidth: 260, maxHeight:420 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: amber[700] }} aria-label="planta">
              {inicialPlanta}
            </Avatar>
          }

          title={planta.nome}
          subheader={planta.nome_cientifico}
        />
        <CardMedia
          component="img"
          height="194"
          image={planta.imagem}
          alt="Planta"
        />

        <CardActions disableSpacing>
          
          <Link to={`/plantas/${planta.id}`} state={{ p: planta }}>
            <Button 
              sx={{ color: amber[700], borderColor: amber[700], display: escondeBotao&&'none'}} 
              size="small" 
              variant="outlined">
            Detalhes
          </Button></Link>
          
          <IconButton aria-label="add to favorites" onClick={Favoritar} color={favorito ? 'warning' : 'disabled'}>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share" onClick={handleClickOpen}>
            <ShareIcon />
          </IconButton>
          

        </CardActions>

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {planta.nomes_populares}
          </Typography>

        </CardContent>

 
      </Card>

      </div>        
      </>   
    );
  }

          