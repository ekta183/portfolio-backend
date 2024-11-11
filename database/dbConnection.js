import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

mongoose.set('strictQuery', true);

export const dbConnection = () => {
  console.log("MONGO_URI from .env:", process.env.MONGO_URI);

  // Return a promise so we can handle connection success/failure in server.js
  return mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit the process if the connection fails
  });
};

// import mongoose from "mongoose";
// import dotenv from "dotenv";

// // Load environment variables from .env file
// dotenv.config();

// export const dbConnection = () => {
//   // Log the MONGO_URI to ensure it's being read
//   console.log("MONGO_URI from .env:", process.env.MONGO_URI);
//   /* MONGOOSE SETUP */
// const PORT = process.env.PORT || 6001;
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log('Connected to Database');
//     app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

//     /* ADD DATA ONE TIME */
//     // User.insertMany(users);
//     // Post.insertMany(posts);
//   })
//   .catch((error) => console.log(`${error} did not connect`));


// //   // Check if MONGO_URI is available
// //   if (!process.env.MONGO_URI) {
// //     console.error("MONGO_URI is undefined! Please check your .env file.");
// //     return;
// //   }

// //   mongoose
// //     .connect(process.env.MONGO_URI, {
// //       dbName: "EKTA-PORTFOLIO-MESSAGE", // Set the dbName or include it in the URI
// //     })
// //     .then(() => {
// //       console.log("Connected to database!");
// //     })
// //     .catch((err) => {
// //       console.log("Some error occurred while connecting to the database:", err);
// //     });

// };
