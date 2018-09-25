import express from 'express';
import * as config from '../config.json';
import { YoutubeService } from '../services/youtube';

const router = express.Router();
const service = new YoutubeService();

/* GET home page. */
router.get('/', async (req, res) => {
  const country = req.query.country || config.countryDefault;
  const trends = await service.getTrendingVideos(country);
    res.render('youtube/index', {
      title: config.title,
      countryList: config.countryList,
      country: country,
      videos: trends
  });
});

router.get('/:videoId', async (req, res) => {
  res.render('youtube/player', {
    title: config.title
  });
});

module.exports = router;
