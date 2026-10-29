import { createClient } from "redis";

const client = createClient({
    url: "redis://localhost:6379"
});

client.on("error", (err) => console.log(err));

await client.connect();

await client.set("name", "Soham");

const result = await client.get("name");

console.log(result);