class Controller {
    constructor(model){
        this.model = model
    }
  }
  
  Controller.prototype.test =  (req, res) => {
    res.status(200).json({ version: '1.0.0' })
  }
  
  module.exports = Controller