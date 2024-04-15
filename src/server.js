import connectDb from "../configuration/connection.js";
import { app } from "./app.js";


connectDb().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`server is running at port : ${process.env.PORT}`)
    })
}).catch(() => {
    console.log(`app connection failed with error : ${error}`)
})


