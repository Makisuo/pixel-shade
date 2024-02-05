import { ReactElement, ReactNode } from "react"
import { cn } from "."

export const Container = ({
	children,
	className,
}: {
	className?: string
	children: ReactNode | ReactElement
}) => {
	return <main className={cn("container px-6 md:px-8 md:py-6 space-y-6 md:space-y-8", className)}>{children}</main>
}
