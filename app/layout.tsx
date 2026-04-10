// import type { Metadata } from "next";
// import "@/app/globals.css";


// export const metadata: Metadata = {
//   title: "Quad Dream | Backend Console",
//   description: "Quad Dream",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <>
//       {children}
//     </>
//   );
// }


import type { Metadata } from "next";
import "@/app/globals.css";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
    subsets: ["latin"],
    weight: "variable",
    variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Quad Dream | Backend Console",
  description: "Quad Dream",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            if (!window.requestIdleCallback) {
              window.requestIdleCallback = function(cb, options) {
                var start = Date.now();
                return setTimeout(function() {
                  cb({
                    didTimeout: false,
                    timeRemaining: function() {
                      return Math.max(0, 50 - (Date.now() - start));
                    }
                  });
                }, options && options.timeout ? options.timeout : 1);
              };
              window.cancelIdleCallback = function(id) {
                clearTimeout(id);
              };
            }
          `
        }} />
      </head>
      <body className={openSans.variable}>{children}</body>
    </html>
  );
}