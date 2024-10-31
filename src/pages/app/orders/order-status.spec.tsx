import { render } from "@testing-library/react";
import { OrderStatus } from "./orders-status";
/**
  processing: "Em preparo",
 * 
 */
describe("Order Status", () => {
  it("should display the text when order status Pending", () => {
    let wrapper = render(<OrderStatus status="pending" />);
    let statusText = wrapper.getByText("Pendente");
    let badgeElement = wrapper.getByTestId("badge");
    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-slate-500");
  });
  it("should display the text when order status Canceled", () => {
    let wrapper = render(<OrderStatus status="canceled" />);
    let statusText = wrapper.getByText("Cancelado");
    let badgeElement = wrapper.getByTestId("badge");
    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-rose-500");
  });
  it("should display the text when order status Delivered", () => {
    let wrapper = render(<OrderStatus status="delivered" />);
    let statusText = wrapper.getByText("Entregue");
    let badgeElement = wrapper.getByTestId("badge");
    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-emerald-500");
  });
  it("should display the text when order status Delivering", () => {
    let wrapper = render(<OrderStatus status="delivering" />);
    let statusText = wrapper.getByText("Em entrega");
    let badgeElement = wrapper.getByTestId("badge");
    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-amber-500");
  });
  it("should display the text when order status Processing", () => {
    let wrapper = render(<OrderStatus status="processing" />);
    let statusText = wrapper.getByText("Em preparo");
    let badgeElement = wrapper.getByTestId("badge");
    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-amber-500");
  });
});
