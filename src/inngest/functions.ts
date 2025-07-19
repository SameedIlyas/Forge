import { inngest } from "./client";
import { gemini, createAgent } from "@inngest/agent-kit";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    // Create a new agent with a system prompt (you can add optional tools, too)
    const codeAgent = createAgent({
      name: "code-agent",
      system: "You are an expert next.js developer that focuses on practical and scalable approaches with best modern practices in software engineering.  You write readable, maintanable code with amazing UI. You only respond with code snippets.",
      model: gemini({ model: "gemini-2.5-pro" }),
    });

    const { output } = await codeAgent.run(
      `Write the following code and do not give anything other than the required code of the following: ${event.data.value}`,
    );
    console.log(output);

    return { output};
  },
);