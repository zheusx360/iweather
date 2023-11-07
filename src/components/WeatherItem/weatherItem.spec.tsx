import { render, screen } from "@testing-library/react-native";
import { WeatherItem } from ".";

import droIcon from "@assets/drop.svg";

describe("Component: WheatherItem", () => {
  it("should be show title and value", () => {
    render(<WeatherItem icon={droIcon} title="Umidade do ar" value="81%" />);
    const title = screen.getByText("Umidade do ar");
    const value = screen.getByText("81%");

    expect(title).toBeTruthy();
    expect(value).toBeTruthy();
  });
});
