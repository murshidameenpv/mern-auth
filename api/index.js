import express from 'express';
import dotenv from 'dotenv';
import './db/mongodb.js';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import path from 'path';
    
dotenv.config()
const app = express()
const port = process.env.PORT || 8001;
const __dirname = path.resolve()
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname,'/client/dist')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client','dist','index.html'))
})

app.use('/api/user/', userRouter)
app.use('/api/auth/', authRouter)


app.use ((err, req, res, next) => {
    const statusCode = err.statusCode  || 500;
    const message = err.message || "Internal Server Error!"
    return res.status(statusCode).json(
        {
            success: false,
            message,
            statusCode: statusCode
        });
}
)


app.listen(port, () => {
        console.log(`Server Listening on port http://localhost:${port}`);
    })  