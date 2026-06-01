import rawData from "./rides.json";
import { Ride, RecentRide } from "@/modules/rides/types";

interface RidesData {
  rides: Ride[];
  recentRides: RecentRide[];
}

// Type assertion to ensure the JSON data matches our types
const ridesData: RidesData = rawData as unknown as RidesData;

export default ridesData;
