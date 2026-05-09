const express = require("express");
const rootRouter = require("./routers/rootRouter");
const app = express();

app.use(express.json())

app.use("/api/v1",rootRouter)
const PORT = 4000;
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);   
})