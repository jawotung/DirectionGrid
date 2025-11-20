import { Box, Button, Grid, IconButton, Paper, styled, TextField, Tooltip, Typography } from "@mui/material";
import NumberInput from "../../components/NumberInput";
import { Fragment, useState } from "react";
import TextInput from "../../components/TextInput";
import ToastService from "../../utils/toast";
import DirectionOptions from "../../core/constants/DirectionOptions";
import SelectInput from "../../components/SelectInput";
import CustomGrid from "./CustomGrid";
import Container from "../../components/Container";

const FormGrid = ({
    x = 5,
    y = 5,
    formData,
    setFormData,
    onFormSubmit,
}) => {
    const onFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const onDirectionClick = (value) => {
        setFormData((prev) => ({
            ...prev,
            direction: value,
        }));
    };
    
    const onSubmit = (e) => {
        var startRange = Number(formData.startRange);
        var endRange = Number(formData.endRange);
        if(!startRange || !endRange){
            ToastService.error("Please input start range and end range.");
            return;
        } 
        if(startRange >= x || endRange >= y){
            ToastService.error("Please input between 0 - " + (x - 1) + " in start range and 0 - " + (y - 1) + " in end range.");
            return;
        } 
        if(!DirectionOptions.some(x => x.value == formData.direction)){
            ToastService.error("Direction is invalid value.");
            return;
        } 
        onFormSubmit();
    };
    return (<>
        <Grid container spacing={2} sx={{justifyContent: "center",alignItems: "center"}}  mb={2}>
            <Grid size={3}>
                <Typography variant="subtitle2" gutterBottom >
                    Start Range
                </Typography>
                <NumberInput
                    name="startRange"
                    value={formData.startRange}
                    onChange={onFormChange}
                />
            </Grid>
            <Grid size={3}>
                <Typography variant="subtitle2" gutterBottom >
                    End Range
                </Typography>
                <NumberInput
                    name="endRange"
                    value={formData.endRange}
                    onChange={onFormChange}
                />
            </Grid>
            <Grid size={3}>
                {/* <Box onClick={onDirectionClick}>{iconMap[formData.direction]}
                </Box> */}
                <Typography variant="subtitle2" gutterBottom >
                    Direction
                </Typography>
                <SelectInput
                    name="direction"
                    value={formData.direction}
                    options={DirectionOptions}
                    onChange={onFormChange}
                    allowClear={false}
                />
                {/* <Grid container spacing={0} sx={{justifyContent: "center",alignItems: "center"}}>
                    <Grid size={4}>
                        <Tooltip title="West" arrow>
                            <IconButton 
                                color={formData.direction == "WEST" ? "primary" : "default"}
                                onClick={() => onDirectionClick("WEST")}
                            >
                                {iconMap["WEST"]}
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid size={4} padding={0}>
                        <Tooltip title="North" arrow>
                            <IconButton 
                                color={formData.direction == "NORTH" ? "primary" : "default"}
                                onClick={() => onDirectionClick("NORTH")}
                            >
                                {iconMap["NORTH"]}
                            </IconButton>
                        </Tooltip>
                        <br/>
                        <Tooltip title="South" arrow>
                            <IconButton 
                                color={formData.direction == "SOUTH" ? "primary" : "default"}
                                onClick={() => onDirectionClick("SOUTH")}
                            >
                                {iconMap["SOUTH"]}
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid size={4}>
                        <Tooltip title="East" arrow>
                        <IconButton 
                            color={formData.direction == "EAST" ? "primary" : "default"}
                            onClick={() => onDirectionClick("EAST")}
                        >
                            {iconMap["EAST"]}
                        </IconButton>
                        </Tooltip>
                    </Grid>
                </Grid> */}
            </Grid>
            <Grid size={3}>
                <Button fullWidth variant="contained" onClick={onSubmit} sx={{mt:3}}>Submit</Button>
            </Grid>
        </Grid>
    </>);
}
export default FormGrid
