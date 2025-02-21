import { generateContent } from "../services/ai.service.js"; // Named import

export const getReview = async (req, res) => {
    const code = req.body.code;

    if (!code) {
        return res.status(400).send("Prompt required!");
    }

    try {
        const response = await generateContent(code);
        res.send(response);
    } catch (error) {
        console.error("Error in getResponse:", error);
        res.status(500).send("Error generating response.");
    }
}
