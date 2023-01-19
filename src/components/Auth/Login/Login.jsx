import React from 'react';
import { TextField, Button, Typography } from '@mui/material';

export default function LoginPage() {
  return (
    <>
      <Typography variant="h2" fontFamily="Poppins" textAlign="center">
        Authorization
      </Typography>
      <Typography
        variant="body1"
        fontFamily="Poppins"
        textAlign="center"
        marginBottom={2}
      >
        Enter your login and password
      </Typography>

      <TextField
        name="email"
        id="outlined-basic"
        label="Email"
        variant="outlined"
        placeholder="Введите ваш email"
        fullWidth={true}
        margin={'normal'}
      />
      <TextField
        name="password"
        type="password"
        id="outlined-basic"
        label="Password"
        variant="outlined"
        placeholder="Введите ваш пароль"
        fullWidth={true}
        margin={'normal'}
      />
      <Button
        sx={{
          fontFamily: 'Poppins',
          marginTop: 2,
          marginBottom: 2,
          width: '40%',
        }}
        variant="contained"
        type="submit"
      >
        Sign in
      </Button>
    </>
  );
}
