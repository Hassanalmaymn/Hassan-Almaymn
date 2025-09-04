import "./globals.css";

export default function RootLayout({ children, params }) {
  const locale = params?.locale || 'en';
  return (
    <html lang={locale} dir={locale === 'en' ? 'ltr' : 'rtl'}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      </head>
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
