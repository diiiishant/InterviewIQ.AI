// import axios from "axios"

// export const askAi = async (messages) => {
//     try {
//         if (!messages || !Array.isArray(messages) || messages.length === 0) {
//             throw new Error("messages array is empty.");
//         }
//         const responce = await axios.post("https://openrouter.ai/api/v1/chat/completions",
//             {
//                 model: "openai/gpt-4o-mini",
//                 messages: messages
//             }, 
//             {
//             headers: {
//             Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
//             'Content-Type': 'application/json',
//         },});

//         const content = responce?.data?.choices?.[0]?.messages?.content;

//         if(!content || !content.trim()){
//             throw new Error("AI returned empty response.");
//         }
//         return content
//     } catch (error) {
//         console.error("OpenRouter Error:", error?.responce.data || error.messages);
//         throw new Error("OpenRouter API Error.");
//     }
// }

import axios from "axios"

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const askAi = async (messages, retries = 2) => {
    try {
        if (!messages || !Array.isArray(messages) || messages.length === 0) {
            throw new Error("messages array is empty")
        }

        for (let attempt = 1; attempt <= retries + 1; attempt++) {
            try {
                const response = await axios.post("https://openrouter.ai/api/v1/chat/completions",
                    {
                        model: "openai/gpt-4o-mini",
                        messages: messages
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                            "Content-Type": "application/json"
                        },
                        timeout: 30000 // 30 seconds timeout
                    })
                
                const content = response?.data?.choices?.[0]?.message?.content
                if (!content || !content.trim()) {
                    throw new Error("AI returned empty response")
                }
                return content
            } catch (error) {
                console.error(`OpenRouter Attempt ${attempt} failed:`, error.response?.data || error.message)
                if (attempt > retries) {
                    throw error
                }
                // Wait 1 second before retrying
                await delay(1000)
            }
        }
    } catch (error) {
        console.error("OpenRouter Final Error:", error.response?.data || error.message)
        throw new Error("OpenRouter API Error")
    }
}