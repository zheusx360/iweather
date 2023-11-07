import { fireEvent, render, screen } from "@testing-library/react-native";
import { SelectList } from ".";
import { CityProps } from "@services/getCityByNameService";

describe("Component: selectList", () => {
  it("should be return city details selected.", () => {
    const data: CityProps[] = [
      { id: "1", name: "Campinas", latitude: 123, longitude: 456 },
      { id: "1s", name: "Campo grande", latitude: 789, longitude: 987 },
    ];

    const onPress = jest.fn();

    render(<SelectList data={data} onChange={() => {}} onPress={onPress} />);
    const selectedCity = screen.getByText(/campo/i);
    fireEvent.press(selectedCity);

    expect(onPress).toHaveBeenCalledWith(data[1]);
  });

  it("not should be show options when data props is empty", () => {
    render(<SelectList data={[]} onChange={() => {}} onPress={() => {}} />);
    const options = screen.getByTestId("options");
    expect(options.children).toHaveLength(0);
  });
});
