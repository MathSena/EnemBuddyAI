import React, { useState } from 'react'
import Header from './components/Header'
import InputForm from './components/InputForm'
import TopicsList from './components/TopicsList'
import { Container, Box, CircularProgress, Typography } from '@mui/material'

const App: React.FC = () => {
  const [topics, setTopics] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [searchTopic, setSearchTopic] = useState('')

  const API_BASE_URL =
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_API_URL || 'https://enem-buddy-ai-be.vercel.app'
      : 'http://localhost:3000'

  const fetchTopics = async (topic: string) => {
    setLoading(true)
    setSearchTopic(topic)
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/topics`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic })
      })

      if (!response.ok) {
        throw new Error('Erro ao buscar tópicos')
      }

      const data = await response.json()
      setTopics(data.topics)
    } catch (error) {
      console.error('Erro ao buscar tópicos:', error)
      setTopics([])
    } finally {
      setLoading(false)
    }
  }

  const clearTopics = () => {
    setTopics([])
    setSearchTopic('')
  }

  return (
    <Box sx={{ bgcolor: '#f0f8ff', minHeight: '100vh', pb: 6 }}>
      <Header />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <InputForm onSubmit={fetchTopics} />
        {loading ? (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mt: 4
            }}
          >
            <CircularProgress sx={{ color: '#005CA9' }} />
            <Typography
              variant="h6"
              sx={{
                mt: 2,
                fontWeight: 'bold',
                color: '#005CA9',
                animation: 'pulse 2s infinite'
              }}
            >
              Gerando tópicos para sua revisão...
            </Typography>
          </Box>
        ) : topics.length > 0 ? (
          <TopicsList
            topics={topics}
            onClearTopics={clearTopics}
            searchTopic={searchTopic}
          />
        ) : searchTopic && !loading ? (
          <Typography
            variant="h6"
            sx={{
              mt: 4,
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#005CA9'
            }}
          >
            Nenhum tópico encontrado. Tente novamente com outro tema!
          </Typography>
        ) : null}
      </Container>
    </Box>
  )
}

export default App
