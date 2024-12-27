import React from 'react'
import { AppBar, Toolbar, Typography, Box } from '@mui/material'

const Header: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: 'linear-gradient(90deg, #001F3F 0%, #002D62 100%)', // Fundo mais escuro
        py: 2,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        fontFamily: '"Poppins", sans-serif'
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem'
        }}
      >
        {/* Logo */}
        <Box display="flex" alignItems="center">
          <img
            src="/enem.png"
            alt="Logo ENEM"
            width="60"
            style={{
              marginRight: '16px'
            }}
          />
        </Box>

        {/* Title */}
        <Box textAlign="center" flex={1}>
          <Typography
            variant="h4"
            component="div"
            sx={{
              color: 'white',
              fontWeight: '600',
              textAlign: 'center',
              fontSize: '2.4rem',
              fontFamily: '"Poppins", sans-serif'
            }}
          >
            PLANO DE ESTUDOS ENEM
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: '#F8F9FA',
              fontWeight: '300',
              fontSize: '1.2rem',
              marginTop: '4px',
              fontFamily: '"Poppins", sans-serif'
            }}
          >
            Organize suas revisões e esteja preparado para o exame!
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
