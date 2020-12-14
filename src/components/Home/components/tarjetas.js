import React from 'react'
import { Container, Typography, Grid } from '@material-ui/core';
import useStyles from './estilos'
import Tarjeta from './tarjeta'

import Estructura from './img/html-css.jpg'
import Hanna from './img/victor.jpg'

const contenido=[
     {
         semana:"HTML5 ,CSS3 Y JS",
         descripcion:"Curso de Diseño wed: HTML5,CSS3 Y JS.",
         imagen:Estructura,
         avatar:Hanna,
         disertante:"Victor Zambrano",
         fecha: " Culminado el 12 de noviembre, 2020"
     }, //agregar mas objetos, cada objeto representa una tarjeta y puede agregar la cantidad que se desee.
]

const Cuerpo=()=>{
     return contenido.map(tarjeta=><Tarjeta contenido={tarjeta}/>)  
}

export default function Terjetas(){
     const classes=useStyles()
     return (
          <Container maxWidth='lg' className={classes.semanas}>
              <Typography variant="h4" className={classes.semanasTitulo}>
                  6 semanas de Alta capacitacion con un gran equipo.  
              </Typography>
              <Grid container spacing={3}>
                  <Cuerpo/>
              </Grid>    
          </Container>
      );
}