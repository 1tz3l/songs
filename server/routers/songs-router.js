const { addSong, getRandomSongs, updateSong, deleteSong} = require('../controllers/songs-controller');
const { Router } = require('express');
const router = Router();

router.route('/songs').post(addSong);
router.route('/songs/random').get(getRandomSongs);
router.route('/songs/:id').put(updateSong);
router.route('/songs/:id').delete(deleteSong);

module.exports = { router };