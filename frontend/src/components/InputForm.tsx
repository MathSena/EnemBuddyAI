import React, { useState } from 'react'
import { Form, Button, Message } from 'semantic-ui-react'

interface InputFormProps {
  onSubmit: (topic: string) => void
}

const InputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
  const [topic, setTopic] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (topic.trim()) {
      onSubmit(topic)
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
    <Form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        marginTop: '2rem'
      }}
    >
      {error && (
        <Message
          error
          header="Campo vazio"
          content="Por favor, insira um tópico para continuar."
          style={{ marginBottom: '1rem' }}
        />
      )}
      <Form.Input
        placeholder="Digite o tópico de estudo"
        value={topic}
        onChange={e => setTopic(e.target.value)}
        error={error ? 'O campo não pode estar vazio.' : undefined}
        style={{ marginBottom: '1rem' }}
      />
      <Button
        type="submit"
        color="blue"
        style={{ fontWeight: 'bold' }}
        icon="search"
        labelPosition="left"
        content="Gerar Tópico"
      />
    </Form>
  )
}

export default InputForm
