import { Grid, Paper, styled } from "@mui/material";
import { Fragment } from "react";
import SouthIcon from '@mui/icons-material/South';
import NorthIcon from '@mui/icons-material/North';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';

export const iconMap = {
    SOUTH: <SouthIcon />,
    NORTH: <NorthIcon />,
    WEST: <WestIcon />,
    EAST: <EastIcon />,
};

const Item = styled(Paper)(({ theme }) => ({
  height: 25,
  backgroundColor: theme.palette.background.paper,
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: 'center',
  color: theme.palette.text.primary,
    "&.selectedItem": {
        backgroundColor: theme.palette.primary.main,
    },
}));

const CustomGrid = ({
    x,
    y,
    selectedGrid = [],
    direction,
    showLabel = false,
}) => {
  const GridY = 12 / y;

  return (
    <Grid container spacing={1} > {/* direction={formData.direction == "EAST" ? "row" : "row-reverse"} */}
        {Array.from({ length: x + 1 }, (_, i) => i).map((a) => (<Fragment key={a}>
            {Array.from({ length: y }, (_, i) => i).map((b) => (
                <Grid size={GridY} sx={{border: "1px solid black"}} key={(x - a) + " " + b}>
                    <Item className={JSON.stringify(selectedGrid) == JSON.stringify([(x - a),b]) ? "selectedItem" : ""}>
                        {JSON.stringify(selectedGrid) == JSON.stringify([(x - a),b]) ? iconMap[direction] : ""}
                        {showLabel && (<>{(x - a) + " " + b}</>)}
                    </Item>
                </Grid>
            ))}
        </Fragment>))}
    </Grid>
  );
};

export default CustomGrid;
