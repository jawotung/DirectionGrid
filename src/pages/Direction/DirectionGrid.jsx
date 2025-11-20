import { Box, Button, Grid, IconButton, Paper, styled, TextField, Tooltip, Typography } from "@mui/material";
import NumberInput from "../../components/NumberInput";
import { Fragment, useState } from "react";
import TextInput from "../../components/TextInput";
import ToastService from "../../utils/toast";
import DirectionOptions from "../../core/constants/DirectionOptions";
import SelectInput from "../../components/SelectInput";
import CustomGrid from "./CustomGrid";
import Container from "../../components/Container";
import FormGrid from "./FormGrid";

const DirectionGrid = () => {
    const x = 5;
    const y = 5;
    const [formData, setFormData] = useState({
        startRange: "",
        endRange: "",
        direction: "NORTH",
    });
    const [selectedGrid, setSelectedGrid] = useState([]);

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
            ToastService.error("Please input start range and end range");
            return;
        } 
        if(startRange >= x || endRange >= y){
            ToastService.error("Please input between 0 - " + (x - 1) + " in start range and 0 - " + (y - 1) + " in end range");
            return;
        } 
        
        setSelectedGrid([startRange, endRange]);
        // if(formData.direction == "EAST" || formData.direction == "WEST"){
        //     setSelectedGrid([startRange, endRange]);
        // }

    };
    
    return (<>
        <Container title="Main Page">
            <FormGrid 
            x={x}
            y={y}
            formData={formData}
            setFormData={setFormData}
            onFormSubmit={onSubmit}
            />
            
            <CustomGrid 
                x={x}
                y={y}
                selectedGrid={selectedGrid}
                direction={formData.direction}
            />
        </Container>
    </>);
}
export default DirectionGrid
