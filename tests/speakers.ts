import assert from "assert";
import Client from "../dist";

const client = new Client("http://127.0.0.1:50021");

async function main() {
  const speakers = await client.fetchSpeakers();
  assert(speakers.length > 0);
}

main();
