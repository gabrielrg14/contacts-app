import { render, fireEvent } from "@testing-library/react-native"

import ContactListItem from "."

describe("<ContactListItem />", () => {
  it("should render the contact item with the name", () => {
    const { getByText } = render(
      <ContactListItem
        contact={{ id: "1", name: "Contact Test", contactType: "person" }}
        fontSize={40}
        size={24}
      />
    )

    expect(getByText(/test/i)).toBeTruthy()
  })

  it("should call the onPress function when passed", () => {
    const onPressMock = jest.fn()

    const { getByText } = render(
      <ContactListItem
        contact={{ id: "1", name: "Contact Test", contactType: "person" }}
        fontSize={40}
        size={24}
        onPress={onPressMock}
      />
    )

    fireEvent.press(getByText(/test/i))

    expect(onPressMock).toHaveBeenCalled()
  })
})
