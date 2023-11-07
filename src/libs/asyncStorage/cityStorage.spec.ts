import { CityProps } from "@services/getCityByNameService";
import { getStorageCity, saveStorageCity, removeStorageCity } from "./cityStorage"

describe("Storage: CityStorage", ()=>{

   //declare mock city for tests
   const newCity: CityProps = {
      id: '1',
      name: 'São Paulo',
      latitude: 123,
      longitude: 456
   };


   it("should be return null when dont't hav a city storage", async ()=>{
      const response = await getStorageCity();
      expect(response).toBeNull();
   })
   it("should be return city storage", async ()=>{

      await saveStorageCity(newCity);
      const response = await getStorageCity();

      expect(response).toEqual(newCity);
   })
   it("should be remove city storage", async ()=>{
      
      await saveStorageCity(newCity);
      await removeStorageCity();

      const response = await getStorageCity()

      expect(response).toBeNull();
   })
})