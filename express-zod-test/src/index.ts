
import express, { Request, Response } from "express";
import { z } from "zod";


const app = express();
app.use(express.json());

const sumInput = z.object({
    a: z.number(),
    b: z.number()
})

app.post("/sum", (req : Request, res: Response) : void => {
    const parsedResponse = sumInput.safeParse(req.body)
    
    if (!parsedResponse.success) {
        res.status(411).json({
            message: "Incorrect inputs"
        })
        return;
    }

    const answer = parsedResponse.data.a + parsedResponse.data.b;

    res.json({
        answer
    })
});

app.get("/sum", (req: Request, res: Response) : void => {
    const parsedResponse= sumInput.safeParse({
        a: Number(req.headers["a"]),
        b: Number(req.headers["b"])
    })
    
    if (!parsedResponse.success) {
        res.status(411).json({
            message: "Incorrect inputs"
        })
        return;
    }

    const answer = parsedResponse.data.a + parsedResponse.data.b;

    res.json({
        answer
    })
});

export { app }