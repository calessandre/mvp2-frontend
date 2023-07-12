import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

// Componente correspondente ao input de busca (texto + lupa) da barra superior que pode ser reaproveitado em outras páginas

export default function InputBusca(props) {
    return (
        <Paper
            component="form"
            sx={{ p: '1px 3px', display: 'flex', alignItems: 'center', width: 450 }}
            >
            <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder={props.placeholder}
            inputProps={{ 'aria-label': 'busca de plantas' }}
            />
            <Link to={props.submit}>
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            </Link>
        </Paper>
    );    
}    
