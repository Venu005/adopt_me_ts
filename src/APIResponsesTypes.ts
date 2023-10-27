export type Animal = "dog" | "cat" | "reptile" | "rabbit";
export interface Pet {
  id: number;
  name: string;
  animal: Animal;
  breed: string;
  images: string[];
  city: string;
  state: string;
  description: string;
}
export interface PetAPIResponse {
  numberofResults: number;
  startIndex: number;
  endIndex: number;
  hasNext: boolean;
  pets: Pet[];
}
