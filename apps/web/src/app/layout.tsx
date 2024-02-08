import "~/styles/globals.css"

import { Inter } from "next/font/google"

import { TRPCReactProvider } from "~/trpc/react"
import { Navbar } from "~/components/navbar"
import { config } from "~/config"

import { Container } from "@pixelshade/ui/container"

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
})

export const metadata = {
	title: config.name,
	description: config.description,
	icons: [{ rel: "icon", url: "/favicon.svg" }],
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={`font-sans ${inter.variable} min-h-screen`}>
				<TRPCReactProvider>
					<Navbar />
					<Container className="mt-20">{children}</Container>
				</TRPCReactProvider>
			</body>
		</html>
	)
}
