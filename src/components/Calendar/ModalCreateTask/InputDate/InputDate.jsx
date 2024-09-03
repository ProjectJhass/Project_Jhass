import React, {useState} from 'react'; // Importación correcta
import dayjs from 'dayjs';
import InputAdornment from '@mui/material/InputAdornment';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

function CustomInputAdornment(props) {
  const { hasError, children, ...other } = props;
  return (
    <InputAdornment {...other}>
      <PriorityHighIcon
        color="error"
        sx={{
          opacity: hasError ? 1 : 0,
        }}
      />
      {children}
    </InputAdornment>
  );
}

export const InputDate = ({ onDateChange }) => {
  const [error, setError] = useState([null, null]);
  const [selectedDates, setSelectedDates] = useState([null, null]);

  const handleDateChange = (newValue) => {
    setSelectedDates(newValue);
    if (onDateChange) {
      // Llama a la función de callback pasando las fechas seleccionadas
      onDateChange(newValue);
    }
  };

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateRangePicker
          label="Selecciona el rango de fechas"
          maxDate={dayjs('2022-04-19')}
          defaultValue={[dayjs('2022-04-18'), dayjs('2022-04-21')]}
          onChange={handleDateChange}
          onError={setError}
          slotProps={{
            textField: (ownerState) => ({
              InputProps: {
                endAdornment: (
                  <CustomInputAdornment
                    position="end"
                    hasError={!!error[ownerState.position === 'start' ? 0 : 1]}
                  />
                ),
              },
            }),
          }}
        />
      </LocalizationProvider>
    </div>
  );
};

