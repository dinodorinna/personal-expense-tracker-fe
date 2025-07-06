import { useMutation } from "@tanstack/react-query";

import { client } from "@/services/client";

type TDeleteTransactionPayload = {
  id: string;
};

const deleteTransaction = async (payload: TDeleteTransactionPayload) => {
  const { id } = payload;

  return await client.delete(`/delete/${id}`);
};

export const useDeleteTransaction = () => {
  return useMutation({
    mutationFn: deleteTransaction,
  });
};
