import {mount} from '@vue/test-utils'
import App from "../../src/App";

it('Sanity Test', () => {
})

describe("App.vue", () => {
    it("Check exist components and elements", () => {
        const wrapper = mount(App)

        // There should be only one DoListItem
        expect(wrapper.findAllComponents({name: "DoList"})).toHaveLength(1)
    })
})