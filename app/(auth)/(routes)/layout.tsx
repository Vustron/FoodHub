export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-[calc(100%-170px)] items-center justify-center">
      {children}
    </div>
  );
}
