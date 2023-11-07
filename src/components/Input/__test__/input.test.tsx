import { render, screen } from "@testing-library/react-native";

import { Input } from "@components/Input";

describe("Component: Input", () => {
  it("should be render without activity indicator if isloading not passed", () => {
    render(<Input />);

    const activityIndicator = screen.queryByTestId("activity-indicator");
    expect(activityIndicator).toBeNull();
  });

  it("should be render with activity indicator if isloading is true", () => {
    render(<Input isLoading />);

    const activityIndicator = screen.queryByTestId("activity-indicator");
    expect(activityIndicator).toBeTruthy();
  });
});
