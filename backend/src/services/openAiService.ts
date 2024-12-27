import axios from 'axios'

const fetchStudyTopics = async (topic: string): Promise<string[]> => {
  const prompt = `
  Como se fosse um professor especializado no ENEM, crie uma lista sequencial e lógica de tópicos que um estudante deve estudar para dominar o tema '${topic}'. 
  Organize os tópicos em três níveis: 
  1. Fundamentos básicos, 
  2. Tópicos intermediários, 
  3. Assuntos avançados. 
  Certifique-se de incluir tópicos amplos e essenciais, mas com uma progressão lógica para aprendizado eficiente.
  `

  const data = {
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }]
  }

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
        }
      }
    )

    const content = response.data.choices[0].message.content
    return content.split('\n').filter((line: string) => line.trim() !== '')
  } catch (error: any) {
    throw new Error('Erro ao comunicar com a API OpenAI: ' + error.message)
  }
}

export default { fetchStudyTopics }
