import {
  render,
  waitFor,
  screen,
  waitForElementToBeRemoved,
  fireEvent,
  act,
} from "@__tests__/utils/customRender";
import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherApiResponse";
import { Dashboard } from ".";
import { api } from "@services/api";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { mockCityApiResponse } from "@__tests__/mocks/api/mockCityApiTest";

describe("Screen: Dashboard", () => {
  beforeAll(async () => {
    const city = {
      id: "1",
      name: "Rio Grande do Sul, BR",
      latitude: 456,
      longitude: 123,
    };
    await saveStorageCity(city);
  });

  it("should be show city weather", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse });

    render(<Dashboard />);

    const cityName = await waitFor(() => screen.findByText(/rio grande/i));

    expect(cityName).toBeTruthy();
  });

  it("should be show another selected weather city.", async () => {
    jest
      .spyOn(api, "get")
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse })
      .mockResolvedValueOnce({ data: mockCityApiResponse })
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse });

    render(<Dashboard />);

    await waitForElementToBeRemoved(() => screen.getByTestId("loading"));

    const cityName = "São Paulo";

    await waitFor(() =>
      act(() => {
        const search = screen.getByTestId("search-input");
        fireEvent.changeText(search, cityName);
      })
    );

    await waitFor(() =>
      act(() => {
        fireEvent.press(screen.getByText(cityName, { exact: false }));
      })
    );

    expect(screen.getByText(cityName, { exact: false })).toBeTruthy();
  });
});
