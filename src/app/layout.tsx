import "./[locale]/globals.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <div>
          <main className="flex-1 p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
