const mongoose = require("mongoose");

const areaSchema = new mongoose.Schema({
    demoArea: {
      hospitals: [
        {
          hospitalName: String,
          tickOptions: [
            {
              option: String,
              checked: Boolean,
            }
          ]
        }
      ]
    }
  });
  
  const Area = mongoose.model('Area', areaSchema);
  

  module.exports = Area;