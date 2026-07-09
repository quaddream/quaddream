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
import Script from "next/script";

const openSans = Open_Sans({
    subsets: ["latin"],
    weight: "variable",
    variable: "--font-open-sans",
});
export const metadata = {
  metadataBase: new URL(process.env.BASE_URL!),
};


export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-NBV7RRSH');`,
          }}
        />
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
      <body className={openSans.variable}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NBV7RRSH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}</body>
    </html>
  );
}