import { Router } from 'express';
import { addTweet, deleteTweet, editTweet, getAllTweets, getOneTweet } from '../controllers/tweetController';

const router = Router();

router.get('/', getAllTweets);
router.get('/:id', getOneTweet);
router.post('/', addTweet);
router.put('/:id', editTweet);
router.delete('/:id', deleteTweet);

export default router;