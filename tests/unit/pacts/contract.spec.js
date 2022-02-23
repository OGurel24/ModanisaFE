import {pactWith} from 'jest-pact';
import {Matchers} from '@pact-foundation/pact';

const {eachLike, like, integer} = Matchers
import {API} from "@/api";
import {string} from "@pact-foundation/pact/src/dsl/matchers";

pactWith({
    consumer: "Frontend",
    provider: "Backend",
}, provider => {
    describe("Items", () => {
        let api
        beforeEach(() => {
            api = new API(provider.mockService.baseUrl, false)
        })
        test('Get Items', async () => {
            await provider.addInteraction({
                state: 'Get item list successfully',
                uponReceiving: 'a request not empty for item list',
                withRequest: {
                    method: 'GET',
                    path: '/',
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8',
                    },
                },
                body: eachLike(["string"])
            })
            await api.getProductList()
        })
    })
})
