export function Config() {
  const axiosInstance = {
    baseURL: "/api",
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
      accept: "*/*",
    },
  };

  return axiosInstance;
}
