import axios from "axios";
import { QueryClient } from "@tanstack/react-query";

export const client = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

const clientConfig = {
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
};

export const queryClient = new QueryClient(clientConfig);
