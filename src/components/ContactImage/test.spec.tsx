import { render } from "@testing-library/react-native"

import ContactImage from "."

describe("<ContactImage />", () => {
  describe("the contact has imageAvailable", () => {
    it("should render the contact image", () => {
      const { getByTestId } = render(
        <ContactImage
          contact={{ id: "1", name: "Test", contactType: "person", imageAvailable: true }}
          size={96}
          fontSize={64}
        />
      )

      expect(getByTestId("contactImage")).toBeOnTheScreen()
    })
  })

  describe("the contact does NOT have an image available", () => {
    it("should render the initial letter of the contact's name", () => {
      const { getByText } = render(
        <ContactImage
          contact={{ id: "1", name: "Test", contactType: "person", imageAvailable: false }}
          size={96}
          fontSize={64}
        />
      )

      expect(getByText("T")).toBeOnTheScreen()
    })
  })

  describe("the contact does NOT have an image available AND the name is empty", () => {
    it("should render empty text", () => {
      const { getByText } = render(
        <ContactImage
          contact={{ id: "1", name: "", contactType: "person" }}
          size={96}
          fontSize={64}
        />
      )

      expect(getByText("")).toBeEmptyElement()
    })
  })
})
