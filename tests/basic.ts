import Client from "voicevox-client"

const client = new Client("http://localhost:50021")

async function main() {
    const audioQuery = await client.createAudioQuery("こんにちは", 0, {});
    await audioQuery.synthesis(0, {})
}

main()