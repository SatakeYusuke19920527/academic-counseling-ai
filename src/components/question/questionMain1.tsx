"use client";

import React from "react";
import scss from "./page.module.scss";
// import GoBack from "@/lib/components/go-back";
import { Stack } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    export default function questionMain1() {

    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('Choose wisely');

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
        setHelperText(' ');
        setError(false);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (value === 'best') {
            setHelperText('You got it!');
            setError(false);
        } else if (value === 'worst') {
            setHelperText('Sorry, wrong answer!');
            setError(true);
        } else {
            setHelperText('Please select an option.');
            setError(true);
        }
    };
    
    return (
        <div className={scss.component}>
            {/* <GoBack /> */}
            <br />
            <br />

            <Stack spacing={1} sx={{ width: "30%" }}>
                <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                alignItems="center"
                >
                    <Checkbox {...label} defaultChecked />
                    <Checkbox {...label} />
                    <Checkbox {...label} disabled />
                    <Checkbox {...label} disabled checked />

                    <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox
                    {...label}
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                    />
                </Stack>
                <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                alignItems="center"
                >
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                        <FormControlLabel required control={<Checkbox />} label="Required" />
                        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
                    </FormGroup>
                </Stack>
                <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                alignItems="center"
                >
                    <FormControl component="fieldset">
                    <FormLabel component="legend">Label placement</FormLabel>
                    <FormGroup aria-label="position" row>
                        <FormControlLabel
                        value="top"
                        control={<Checkbox />}
                        label="Top"
                        labelPlacement="top"
                        />
                        <FormControlLabel
                        value="start"
                        control={<Checkbox />}
                        label="Start"
                        labelPlacement="start"
                        />
                        <FormControlLabel
                        value="bottom"
                        control={<Checkbox />}
                        label="Bottom"
                        labelPlacement="bottom"
                        />
                        <FormControlLabel
                        value="end"
                        control={<Checkbox />}
                        label="End"
                        labelPlacement="end"
                        />
                    </FormGroup>
                    </FormControl>
                </Stack>

                <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                alignItems="center"
                >
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                </Stack>
                <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                alignItems="center"
                >
                    <form onSubmit={handleSubmit}>
                    <FormControl sx={{ m: 3 }} error={error} variant="standard">
                        <FormLabel id="demo-error-radios">Pop quiz: MUI is...</FormLabel>
                        <RadioGroup
                        aria-labelledby="demo-error-radios"
                        name="quiz"
                        value={value}
                        onChange={handleRadioChange}
                        >
                        <FormControlLabel value="best" control={<Radio />} label="The best!" />
                        <FormControlLabel value="worst" control={<Radio />} label="The worst." />
                        </RadioGroup>
                        <FormHelperText>{helperText}</FormHelperText>
                        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
                        Check Answer
                        </Button>
                    </FormControl>
                    </form>
                </Stack>

                <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                alignItems="center"
                >
                </Stack>
            </Stack>
        </div>
    );
};