import dotenv from 'dotenv';
import app from "./app.js";  // Import the Express app

// Load environment variables
dotenv.config();

// Start the Express server
app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
