# voicevox-client

## Dependencies
- [Node.js](https://nodejs.org/) >= 18

## Installation
```sh
$ yarn add voicevox-client
```

## Example
```ts
import Client from "voicevox-client";

const client = new Client("http://localhost:50021");

async function main() {
  const audioquery = await client.createAudioQuery("こんにちは", 1);
  const audioquery.synthesis(1)
}
