const mongoose = require('mongoose')
// const db_liveurl = 'mongodb+srv://sagarporwal8370:sagar123@cluster0.o3zxkoz.mongodb.net/instagram?retryWrites=true&w=majority'
const local_url = 'mongodb://127.0.0.1:27017/instagram'
const connectdb = () => {
   return mongoose.connect(local_url)
      .then(() => {
         console.log('connetion successfully')
      }).catch((error) => {
         console.log(error)
      })
}
module.exports = connectdb