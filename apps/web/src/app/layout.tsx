import "~/styles/globals.css"

import { Inter } from "next/font/google"

import { TRPCReactProvider } from "~/trpc/react"
import { Container } from "~/components/container"
import { Navbar } from "~/components/navbar"
import { config } from "~/config"

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
			<body className={`font-sans ${inter.variable}`}>
				<TRPCReactProvider>
					<Navbar />
					<Container>{children}</Container>
				</TRPCReactProvider>
			</body>
		</html>
	)
}
