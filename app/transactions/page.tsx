"use client";

import { useQuery } from "@tanstack/react-query";

import { transactionQueryKeys } from "@/services/transaction/query/use-query-all-transactions";

const mockFilter = {
  date: "2025-06-30",
  limit: 10,
  page: 1,
};

const TransactionsPage = () => {
  const allTransactions = useQuery(
    transactionQueryKeys.getAllTransactions(mockFilter)
  );

  return (
    <div>
      <div> Home Page </div>
      {/* {allTransactions?.data} */}
    </div>
  );
};

export default TransactionsPage;
