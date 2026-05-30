export interface Ride {
  id: string;
  vehicleType: "Electric" | "Hybrid";
  vehicleModel: string;
  driverName: string;
  driverRating: number;
  eta: string;
  price: number;
  co2Saved: number;
  estimatedDuration: string;
}

export interface RecentRide {
  id: string;
  date: string;
  from: string;
  to: string;
  co2Saved: number;
  ecoPoints: number;
  price: number;
}