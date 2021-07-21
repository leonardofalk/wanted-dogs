import React from 'react';
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';

const brl = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

export function WantedCard({ title, image, reward, description }) {
  return (
    <Card style={{ backgroundColor: '#f8e9d9' }}>
      <CardContent>
        <Typography style={{ textAlign: 'center', fontFamily: 'Western, Roboto, sans-serif' }} variant="h3" gutterBottom>
          P R O C U R A D O
        </Typography>
        <Typography style={{ textAlign: 'center', fontFamily: 'Western, Roboto, sans-serif' }} variant="h4">
          {title}
        </Typography>
      </CardContent>
      <CardMedia
        src={image}
        component="img"
        title={title}
        style={{ filter: 'sepia(50%)' }}
      />
      <CardContent>
        <Typography style={{ textAlign: 'center', fontFamily: 'Western, Roboto, sans-serif' }} variant="h4">
          Recompensa
        </Typography>

        <Typography style={{ color: 'red', textAlign: 'center', fontFamily: 'Western, Roboto, sans-serif' }} variant="h4">
          {brl.format(reward)}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
