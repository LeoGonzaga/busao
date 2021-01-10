import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 300,
    fontWeight: "bold",
    paddingTop: 10,
  },
});

export default function DiscreteSlider(props: any) {
  const classes = useStyles();

  function valuetext(value: any) {
    props.onChance(value);
    return `${value}`;
  }
  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Horário
      </Typography>
      <Slider
        defaultValue={0}
        onChange={(e) => props.onChance(e)}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={23}
      />
    </div>
  );
}
