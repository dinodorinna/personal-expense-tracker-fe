import { queryOptions } from "@tanstack/react-query";

import { client } from "@/services/client";

type TGetAllTransactionsRequest = {
  date: string;
  limit: number;
  page: number;
};

const queryAllTransactions = async (payload: TGetAllTransactionsRequest) => {
  return (
    await client.get(
      `/transactions?date=${payload.date}&limit=${payload.limit}&page=${payload.page}`
    )
  ).data;
};

export const transactionQueryKeys = {
  all: () => ["transactions"] as const,
  getAllTransactions: (payload: TGetAllTransactionsRequest) =>
    queryOptions({
      queryKey: [...transactionQueryKeys.all()] as const,
      queryFn: () => queryAllTransactions(payload),
    }),
};
