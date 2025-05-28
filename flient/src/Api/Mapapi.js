export const getDeviceLocation = async (imei, token) => {
  const url = `https://open.iopgps.com/api/device/location?accessToken=${token}&imei=${imei}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch location");
    }
    const data = await response.json();
    return data;
  } 
  catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

// console.log("Running getDeviceLocation script");
// (async () => {
//   try {
//     const locationData = await getDeviceLocation(imei, token);
//     console.log("Device Location Data:", locationData);
//   } catch (error) {
//     console.error("Error fetching location:", error);
//   }
// })();
