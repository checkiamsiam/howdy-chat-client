import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiBase = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.BACKEND_BASE_URL,
  }),
  endpoints: (builder) => ({}),
});

export default apiBase;
