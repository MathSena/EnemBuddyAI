import { Router } from 'express'
import topicsController from '../controllers/topicsController'

const router = Router()

router.post('/', topicsController.getStudyTopics)
router.get('/', (req, res) => {
  res.json({ message: 'Endpoint de tópicos funcionando!' })
})

export default router
