const boom = require('@hapi/boom')
const hoteles = require('../hoteles/hotelesDecameron.json')
console.log(hoteles)

class HotelService {
  constructor() {}

  async create(data) {
    const newHotel = {
      ciudadId:4,
      hotelDecameronId: 4,
      ...data
    }
    hoteles.push(newHotel);
    return newHotel;

  }

  async find() {


    if(!hoteles) {
      throw boom.notFound('product not found')
    }
    return hoteles;

  }

  async findOne(ciudadId) {

    const hotel = hoteles.find(item => item.ciudadId === ciudadId);
    if(!hotel) {
      throw boom.notFound('product not found')
    }
    return hotel;
  }

}

module.exports = HotelService;
