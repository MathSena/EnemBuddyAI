import React from 'react'
import { Table, Button, Icon, Message } from 'semantic-ui-react'
import jsPDF from 'jspdf'
import 'jspdf-autotable'

interface TopicsListProps {
  topics: string[]
  onClearTopics: () => void
  searchTopic: string
}

const TopicsList: React.FC<TopicsListProps> = ({
  topics,
  onClearTopics,
  searchTopic
}) => {
  const generatePDF = () => {
    const doc = new jsPDF()
    doc.setFillColor(0, 45, 98)
    doc.rect(0, 0, 210, 30, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(16)
    doc.text(`Plano de Estudos ENEM: ${searchTopic}`, 15, 20)
    doc.addImage('/enem.png', 'PNG', 180, 5, 20, 20)
    doc.autoTable({
      startY: 40,
      head: [['Tópicos de Estudo']],
      body: topics.map(topic => [topic])
    })
    doc.save('topicos-de-estudo.pdf')
  }

  return (
    <div
      style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        marginTop: '2rem'
      }}
    >
      <Message
        info
        header="Tópicos Gerados"
        content={`Os tópicos gerados para: "${searchTopic}" estão listados abaixo.`}
        style={{ marginBottom: '1rem' }}
      />

      <Table celled structured>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              style={{
                backgroundColor: '#f8f9fa',
                fontSize: '1.1rem',
                fontWeight: 'normal'
              }}
            >
              Tópicos
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {topics.map((topic, index) => (
            <Table.Row key={index}>
              <Table.Cell
                style={{
                  fontWeight: 'normal',
                  fontSize: '1rem',
                  color: '#000',
                  padding: '10px'
                }}
              >
                {topic}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '1rem',
          marginTop: '1rem'
        }}
      >
        <Button color="red" onClick={onClearTopics} icon labelPosition="left">
          <Icon name="trash" />
          Limpar
        </Button>
        <Button color="blue" onClick={generatePDF} icon labelPosition="left">
          <Icon name="download" />
          Salvar em PDF
        </Button>
      </div>
    </div>
  )
}

export default TopicsList
