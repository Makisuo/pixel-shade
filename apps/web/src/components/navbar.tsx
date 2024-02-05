import Link from "next/link"
import { getServerAuthSession } from "~/server/auth"

const navigation = [
	{ name: "Components", href: "#" },
	{ name: "Blocks", href: "#" },
	{ name: "Themes", href: "#" },
]

export const Navbar = async () => {
	const session = await getServerAuthSession()

	return (
		<header className="absolute inset-x-0 top-0 z-50">
			<nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
				<div className="flex lg:flex-1">
					<Link href="/" className="-m-1.5 p-1.5">
						<span className="sr-only">Pixelshade</span>
						<img
							className="h-8 w-auto"
							src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
							alt=""
						/>
					</Link>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					{navigation.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className="text-sm font-semibold leading-6 text-foreground"
						>
							{item.name}
						</Link>
					))}
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<Link
						href={session ? "/api/auth/signout" : "/api/auth/signin"}
						className="text-sm font-semibold leading-6 text-foreground"
					>
						{session ? "Sign out" : "Sign in"}
					</Link>
				</div>
			</nav>
		</header>
	)
}
