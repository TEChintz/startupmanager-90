
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "backdrop-blur-xl bg-white/10 border border-white/20 text-white hover:bg-gradient-to-r hover:from-[#FF6B6B] hover:via-[#4ECDC4] hover:to-[#375CE1] hover:text-transparent hover:bg-clip-text hover:border-white/40",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-white/20 backdrop-blur-xl bg-white/10 text-white hover:bg-gradient-to-r hover:from-[#FF6B6B] hover:via-[#4ECDC4] hover:to-[#375CE1] hover:text-transparent hover:bg-clip-text hover:border-white/40",
        secondary:
          "backdrop-blur-xl bg-white/10 border border-white/20 text-white hover:bg-gradient-to-r hover:from-[#FF6B6B] hover:via-[#4ECDC4] hover:to-[#375CE1] hover:text-transparent hover:bg-clip-text hover:border-white/40",
        ghost: "hover:bg-gradient-to-r hover:from-[#FF6B6B] hover:via-[#4ECDC4] hover:to-[#375CE1] hover:text-transparent hover:bg-clip-text",
        link: "text-white hover:bg-gradient-to-r hover:from-[#FF6B6B] hover:via-[#4ECDC4] hover:to-[#375CE1] hover:text-transparent hover:bg-clip-text",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
