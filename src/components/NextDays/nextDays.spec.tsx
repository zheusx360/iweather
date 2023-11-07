import { render, screen } from "@testing-library/react-native";

import { NextDays } from ".";
import clearDay from "@assets/clear_day.svg";

describe("", () => {
  it("", () => {
    render(
      <NextDays
        data={[
          {
            day: "21/09",
            min: "30° c",
            max: "34° c",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "25/09",
            min: "31° c",
            max: "30° c",
            icon: clearDay,
            weather: "Céu nublado",
          },
          {
            day: "03/11",
            min: "29° c",
            max: "32° c",
            icon: clearDay,
            weather: "Céu chuvoso",
          },
          {
            day: "06/11",
            min: "27° c",
            max: "36° c",
            icon: clearDay,
            weather: "Céu limpo",
          },
        ]}
      />
    );
    expect(screen.getByText("21/09")).toBeTruthy();
  });
});
