const express = require('express');
const HotelService = require('./../services/hotel-service');
const router = express.Router();
const service = new HotelService();


router.get('/', async (req, res, next)=> {
  try {
    const hoteles = await service.find();
    res.json(hoteles);

  } catch(error) {
    next(error);
  }

});



router.get('/:ciudadId', async (req,res, next)=>{
  try {
    const ciudadId = parseInt(req.params.ciudadId);
    const hotel = await service.findOne(ciudadId);
    res.json(hotel);
  } catch(error) {
    next(error);
  }
})

router.post('/', async (req, res) => {
  const body = req.body;
  const newHotel = await service.create(body)
  res.status(201).json(newHotel);
})



module.exports = router;
