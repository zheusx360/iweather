import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react-native";
import { Search } from ".";
import { api } from "@services/api";
import { mockCityApiResponse } from "@__tests__/mocks/api/mockCityApiTest";

describe("Screen search", () => {
  it("should be show city option.", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockCityApiResponse });

    const city = "São Paulo";

    render(<Search />);

    const searchInput = screen.getByTestId("search-input");

    fireEvent.changeText(searchInput, city);

    const option = await waitFor(() => screen.findByText(/São Paulo/i));

    expect(option).toBeTruthy();
  });
});
