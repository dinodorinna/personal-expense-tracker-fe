export default function TransactionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="inline-block max-w-lg text-center justify-center">
      {children}
    </div>
  );
}
