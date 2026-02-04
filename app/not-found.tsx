import type { Metadata } from "next";
import NotFoundClient from "./components/layout/NotfoundClient";
import "./globals.css";

export const metadata: Metadata = {
  title: "Page Not Found - Quad Dream",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return <NotFoundClient />;
}
