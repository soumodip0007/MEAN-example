const mongoose = require('mongoose')

const dbUri = 'mongodb+srv://user1234:test1234@nodejsbasics.crwkmph.mongodb.net/employee_db?retryWrites=true&w=majority'

mongoose.set('strictQuery', false)

module.exports = () => {
    return mongoose.connect(dbUri,
        { useNewUrlParser: true, useUnifiedTopology: true })
}