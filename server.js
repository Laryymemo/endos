const mongoose = require('mongoose')
mongoose.connect("mongodb://larrymemo:Calle13num1@ds161162.mlab.com:61162/mio08");
//mongodb://mongodb://larrymemo:Calle13num1@ds161162.mlab.com:61162/mio08
const Schema = mongoose.Schema,
      ObjectId = Schema.ObjectId;

      const modemSchema = new Schema({
            modem:ObjectId,
            name: String,
            placa:String,
            concesion:String,
            email:String,
            city:String
      });

var modem = mongoose.model('modem',modemSchema);

module.exports = modem;
