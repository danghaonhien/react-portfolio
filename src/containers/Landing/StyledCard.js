import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ChevronRightSharpIcon from "@material-ui/icons/ChevronRightSharp";

const useStyles = makeStyles({
  root: {},
});

export default function StyledCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia component='img' height='140' image={props.img} />
        <CardContent>
          <h2>{props.title}</h2>
          <Typography variant='body2' color='textSecondary' component='p'>
            {props.content}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions className='nextButton'>
        <Button size='small'>
          <ChevronRightSharpIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
