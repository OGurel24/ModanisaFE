import {mount} from '@vue/test-utils'
import DoList from "../../src/components/DoList";
import flushPromises from "flush-promises";

it('Sanity Test', () => {
})

describe("DoList.vue", () => {
    it("Necessary HTML elements should be rendered", () => {
        const wrapper = mount(DoList)

        const input = wrapper.findAll("#input")
        expect(input).toHaveLength(1)

        const label = wrapper.findAll("label")
        expect(label).toHaveLength(1)

        const submit = wrapper.findAll("#submit")
        expect(submit).toHaveLength(1)
    })

    it("If there is no item in the list then there should not be any item element in the screen", () => {
        const wrapper = mount(DoList, {
            data() {
                return {
                    items: []
                }
            }
        })

        wrapper.setData({items: []})
        const emptyItems = wrapper.findAll(".item")
        expect(emptyItems).toHaveLength(0)
    })

    it("If there are some items in the list then there should be same number of item element in the screen", () => {
        const items = ["a", "b", "c"]
        const wrapper = mount(DoList, {
            data() {
                return {
                    items
                }
            }
        })

        wrapper.setData({items: []})
        const filledItems = wrapper.findAll(".item")
        expect(filledItems).toHaveLength(items.length)
    })

    it("Added item should be appeared", async () => {
        const newItemContent = "Onur Gurel"
        const wrapper = mount(DoList)
        const textInput = wrapper.find("#input")
        const submitButton = wrapper.find("#submit")

        await textInput.setValue(newItemContent)
        await submitButton.trigger("click")
        await flushPromises()

        const items = await wrapper.findAll("li")
        expect(items).toHaveLength(1)

        const item = wrapper.find("li")
        expect(item.text()).toEqual(newItemContent)

    })
})

