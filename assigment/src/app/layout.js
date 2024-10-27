"use client"
import "./globals.css"
 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>

        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
      </head>
      <body >
        {children}
      </body>
    </html>
  );
}
