import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import './InfoBox.css'

const InfoBox = ({info}) => {
    const Rain="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=2048x2048&w=is&k=20&c=oCeUC-IkL0PeNBE1KwDUHBWw692n3T4T6I-usYtX_Qc="
    const Hot="https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.jpg?s=2048x2048&w=is&k=20&c=imXaczN9FcMjasjmjuZGOZraYMBSUy6ga4hoP084lBg="
    const Cold="https://media.istockphoto.com/id/1369374773/photo/restoring-power-during-ice-storm.jpg?s=612x612&w=0&k=20&c=CZfDZFqc5xSA3A6DcZvb0qOfKH9_cBhD4nIdUfOFOys="
    return (
    <div className='InfoBox'>
        <div className='InfoCard'>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={info.humidity>80 ? Rain : info.temp>15 ? Hot:Cold}
          alt="city"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}  {info.humidity>80 ? <ThunderstormIcon/> : info.temp>15 ? <SunnyIcon/>:<AcUnitIcon/>}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>Max Temp = {info.tempMax}&deg;C</p>
            <p>The Weather is <i>{info.weather}</i> feels like {info.feelsLike}&deg;C </p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </div>
  )
}

export default InfoBox