const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const authRouter = require('./src/routes/auth');
const jobRouter = require('./src/routes/jobs');
const resumeRouter = require('./src/routes/resume');
const interviewRouter = require('./src/routes/interview');
const roadmapRouter = require('./src/routes/roadmap');
const careerMentor = require("./src/routes/mentor")

dotenv.config();
const app = express();


// Middleware
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());

const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log("MongoDb is Connected"))
    .catch((err) => console.log(err))

app.get("/", (req, res) => {
    res.send("API Running 🚀")
})

app.use('/api/auth', authRouter);
app.use('/api/jobs', jobRouter);
app.use('/api/resume', resumeRouter);
app.use('/api/interview', interviewRouter);
app.use('/api/roadmap', roadmapRouter);
app.use('/api/mentor', careerMentor);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})