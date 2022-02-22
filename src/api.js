import axios from 'axios'
import adapter from "axios/lib/adapters/http";

axios.defaults.adapter = adapter;

export class API {

    constructor(url, useProxy) {
        if (url === undefined || url === "") {
            url = "http://localhost:3000";
        }
        if (url.endsWith("/")) {
            url = url.substr(0, url.length - 1)
        }
        this.url = url
    }

    withPath(path) {
        if (!path.startsWith("/")) {
            path = "/" + path
        }
        return `${this.url}${path}`
    }

    async getProductList() {
        return axios.get(this.withPath('/')).then(r => r.data)
    }

    async getProductBySlug(slug) {
        return Promise.resolve([
                "Achieve Modanisa Bootcamp",
                "Sleep",
                "Repeat"
            ]
        )
    }
}

export default new API("http://localhost:3000", true);