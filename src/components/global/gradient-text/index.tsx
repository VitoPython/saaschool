
import { cn } from "@/lib/utils"
type Props = {}

type GradientTextProps = {
    element?: "H1" | "H2",
    children: React.ReactNode,
    className?: string,
}
const GradientText = ({element, children, className}: GradientTextProps) => {
  switch (element) {
    case "H1":
        return (
            <h1 className={cn("text-gradient", className)}>
                {children}
            </h1>
        )
    case "H2":
        return (
            <h2 className={cn("text-gradient", className)}>
                {children}
            </h2>
        )
    default:
        return <p className={cn(className, 'text-gradient')}>{children}</p>
  }
}

export default GradientText