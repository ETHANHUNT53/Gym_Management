import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={6} height={"100vh"} display="flex" justifyContent="center" alignItems="center">
          <Box 
            textAlign={'left'} 
            display={'flex'} 
            flexDirection={'column'} 
            alignItems={'center'} 
            justifyContent={'center'}  
            height={"100%"}
            paddingX={{ xs: 2, sm: 4, md: 8 }} // Responsive padding for smaller screens
          >
            <Typography 
              variant="body1" 
              alignSelf={'flex-start'} 
              color="initial"
              marginBottom={{ xs: 1, md: 2 }}
            >
              WELCOME BACK
            </Typography>
            <Typography 
              variant="h6" 
              style={{ fontWeight:"bold" }} 
              alignSelf={'flex-start'} 
              color="initial" 
              marginBottom={{ xs: 2, md: 4 }} // Adjust the bottom margin responsively
            >
              Log In to Your Account
            </Typography>
            <TextField
              margin="normal"
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              fullWidth
              sx={{
                width: { xs: '100%', sm: '300px',md: '450px' }, // Set max width to 100% on smaller screens
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: 'black',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'black',
                },
              }}
            />
            <TextField
              margin="normal"
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              fullWidth
              sx={{
                width: { xs: '100%', sm: '300px',md: '450px'  },
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: 'black',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'black',
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ 
                mt: 3, 
                mb: 2, 
                width: "100%", 
                maxWidth: { xs: '100%', sm: '300px',md: '450px',  }, 
                height: "50px", 
                background: "#9ef300", 
                color: "black", 
                fontWeight: "bold", 
                '&:hover': {
                  background: "#5f8c09"
                } 
              }}
            >
              Login
            </Button>
            
            <Typography variant="body1" color="initial">
              Don't have an account?{' '}
              <Typography
                variant="body1"
                component="span"
                style={{ fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' }}
              >
                CREATE NEW ACCOUNT
              </Typography>
            </Typography>
          </Box>
        </Grid>
        <Grid 
          item 
          xs={12} 
          md={6} 
          display="flex" 
          justifyContent={{ xs: "center", md: "flex-end" }} 
          alignItems="center"
          height={{ xs: "50vh", md: "100vh" }} // Adjust height based on screen size
        >
          <Box
            component="img"
            sx={{
              width: { xs: "90%", md: "80%" },
              height: "98vh",
              borderRadius: { xs: "20px", md: "30px" },
              marginBottom: { xs: 4, md: 0 } // Adjust margin for smaller screens
            }}
            alt="Login Visual"
            src='https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
        </Grid>
      </Grid>
    </>
  )
}

export default Login
