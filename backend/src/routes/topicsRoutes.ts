import { Router } from 'express'
import topicsController from '../controllers/topicsController'

const router = Router()

router.post('/', topicsController.getStudyTopics)

export default router
