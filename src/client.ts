import { RestAPI } from './http'

export class Client {
    rest: RestAPI;

    constructor(engine_url: string) {
        this.rest = new RestAPI(engine_url);
    }
}