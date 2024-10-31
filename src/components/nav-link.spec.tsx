import { render } from "@testing-library/react";
import { NavLink } from "./nav-link";
import { MemoryRouter } from "react-router-dom";

describe("#NavLink", () => {
  it("should highilght the nav link when is the current page link", () => {
    const wrapper = render(
      <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/orders">Orders</NavLink>
      </>,
      {
        wrapper: ({ children }) => {
          return (
            <MemoryRouter initialEntries={["/orders"]}>{children}</MemoryRouter>
          );
        },
      },
    );
    expect(wrapper.getByText("Home").dataset.current).toEqual("false");
    expect(wrapper.getByText("Orders").dataset.current).toEqual("true");
  });
});
