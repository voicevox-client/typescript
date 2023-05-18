import Client from "../dist";
import { promises as fs } from "fs";

const client = new Client("http://127.0.0.1:50021");

async function main() {
    const audioQuery = await client.createAudioQuery("こんにちは", 0, {});
    await audioQuery.synthesis(0);
}

main();
