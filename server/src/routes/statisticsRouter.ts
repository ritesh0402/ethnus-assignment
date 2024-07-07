import express from 'express'
import statisticsController from '../controllers/statisticsController'
import statisticsReqValidator from '../middleware/statisticsReqValidator'
const router = express.Router()


router.get('/', statisticsReqValidator.getStatisticsReqValidator, statisticsController.getStatistics)
router.get('/barchart', statisticsReqValidator.getBarchartReqValidator, statisticsController.getBarchart)
router.get('/piechart', statisticsReqValidator.getPiechartReqValidator, statisticsController.getPiechart)
router.get('/report', statisticsReqValidator.getReportReqValidator, statisticsController.getReport)


export default router