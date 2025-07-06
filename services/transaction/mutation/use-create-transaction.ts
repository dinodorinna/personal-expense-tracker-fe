import { useMutation } from "@tanstack/react-query";

import { client } from "@/services/client";

type TCreateTransactionPayload = {
  date: string;
  amount: number;
  description: string;
  category: string;
};

type TCreateTransactionResponse = {
  id: string;
  date: string;
  amount: number;
  description: string;
  category: string;
};

const createTransaction = async (payload: TCreateTransactionPayload) => {
  return await client.post<TCreateTransactionResponse>("/transaction", payload);
};

export const useCreateTransaction = () => {
  return useMutation({
    mutationFn: createTransaction,
  });
};
