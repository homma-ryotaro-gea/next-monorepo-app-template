import { Geist, Geist_Mono } from "next/font/google";

import "@workspace/ui/globals.css";
import type { Metadata } from "next";
import { Providers } from "@/src/components/providers";

const fontSans = Geist({
	subsets: ["latin"],
	variable: "--font-sans",
});

const fontMono = Geist_Mono({
	subsets: ["latin"],
	variable: "--font-mono",
});

export const metadata: Metadata = {
	title: "Sample",
	description: "Sample",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
