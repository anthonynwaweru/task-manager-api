const mongoose = require('mongoose');

// useNewUrlParser, useUnifiedTopology, useFindAndModify, and useCreateIndex are no longer supported options. Mongoose 6 always behaves as if useNew
mongoose.connect(`${process.env.MONGODB_URL}`, {});
