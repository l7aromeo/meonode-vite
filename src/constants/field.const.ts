export const textFieldSX = {
  '& .MuiFormLabel-root:not(.Mui-error)': {
    color: 'theme.text.primary',
    '&.Mui-focused': {
      color: 'theme.text.primary',
    },
    '.Mui-disabled *, .Mui-disabled *::placeholder': {
      color: 'theme.disabled',
      WebkitTextFillColor: 'theme.disabled',
    },
  },
  '& .MuiOutlinedInput-root:not(.Mui-error)': {
    '*, *::placeholder': {
      color: 'theme.text.primary',
      WebkitTextFillColor: 'theme.text.primary',
    },
    '& fieldset,&:hover fieldset': {
      borderColor: 'theme.text.primary',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'theme.secondary',
    },
    '&.Mui-disabled *,&.Mui-disabled *::placeholder': {
      color: 'theme.disabled',
      WebkitTextFillColor: 'theme.disabled',
    },
    '&.Mui-disabled fieldset, &.Mui-disabled:hover fieldset': {
      borderColor: 'theme.disabled',
    },
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: 2,
  },
  '& *, .MuiFormHelperText-root:not(.Mui-error)': {
    color: 'theme.text.primary',
  },
  '& * .Mui-error, .Mui-error *': {
    color: 'theme.error',
  },
}

export const timePickerFieldSX = {
  width: '100%',
  '& .MuiFormLabel-root:not(.Mui-error)': {
    color: 'theme.text.primary',
    '&.Mui-focused': {
      color: 'theme.text.primary',
    },
    '.Mui-disabled *, .Mui-disabled *::placeholder': {
      color: 'theme.disabled',
      WebkitTextFillColor: 'theme.disabled',
    },
  },
  '& .MuiPickersOutlinedInput-root:not(.Mui-error)': {
    '*, *::placeholder': {
      color: 'theme.text.primary',
      WebkitTextFillColor: 'theme.text.primary',
    },
    '& fieldset,&:hover fieldset': {
      borderColor: 'theme.text.primary',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'theme.secondary',
    },
    '&.Mui-disabled *,&.Mui-disabled *::placeholder': {
      color: 'theme.disabled',
      WebkitTextFillColor: 'theme.disabled',
    },
    '&.Mui-disabled fieldset, &.Mui-disabled:hover fieldset': {
      borderColor: 'theme.disabled',
    },
  },
  '& .MuiPickersOutlinedInput-root': {
    borderRadius: 2,
  },
  '& *, .MuiFormHelperText-root:not(.Mui-error)': {
    color: 'theme.text.primary',
  },
  '& * .Mui-error, .Mui-error *': {
    color: 'theme.error',
  },
}

export const timePickerPaperSX = {
  desktop: {
    backgroundColor: 'theme.background.paper',
    color: 'theme.text.primary',
    '& li.Mui-selected, & li.Mui-selected:hover': {
      backgroundColor: 'theme.secondary',
      color: 'theme.text.inverse',
    },
  },
}
