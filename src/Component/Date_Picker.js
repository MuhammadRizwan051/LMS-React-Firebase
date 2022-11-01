import React from 'react'
import dayjs from 'dayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';
// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { Stack } from '@mui/material';


function Date_Picker() {
    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <>
            {/* <LocalizationProvider>
                <Stack spacing={3}> */}
                    <DesktopDatePicker
                        label="Date desktop"
                        inputFormat="MM/DD/YYYY"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                {/* </Stack>
            </LocalizationProvider> */}
        </>
    )
}

export default Date_Picker