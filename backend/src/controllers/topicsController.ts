import { Request, Response, NextFunction } from 'express'
import { z } from 'zod' // Importa o Zod para validação
import openAiService from '../services/openAiService'

const topicSchema = z.object({
  topic: z.string().min(1, 'O tema não pode estar vazio.')
})

const getStudyTopics = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { topic } = topicSchema.parse(req.body)

    const topics = await openAiService.fetchStudyTopics(topic)
    res.status(200).json({ topics })
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ message: error.errors.map(err => err.message) })
    } else {
      next(error)
    }
  }
}

export default { getStudyTopics }
