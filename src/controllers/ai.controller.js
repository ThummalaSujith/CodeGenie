import { generateContent } from "../services/ai.service.js"; // Named import

export const getResponse = async (req, res) => {
    const prompt = req.body.prompt;

    if (!prompt) {
        return res.status(400).send("Prompt required!");
    }

    try {
        const response = await generateContent(prompt);
        res.send(response);
    } catch (error) {
        console.error("Error in getResponse:", error);
        res.status(500).send("Error generating response.");
    }
}
