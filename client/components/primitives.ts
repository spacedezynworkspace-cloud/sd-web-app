import { tv } from "tailwind-variants";

export const title = tv({
  base: "tracking-tight inline font-semibold",
  variants: {
    tone: {
       primary: "text-orange-500",
      dark: "text-gray-900 dark:text-white",
      muted: "text-gray-600 dark:text-gray-400",  
      gradientOrange:
        "bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent",
      gradientTech:
        "bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent",
    
    },
    size: {
      sm: "text-3xl lg:text-4xl",
      md: "text-[2.3rem] lg:text-5xl",
      lg: "text-4xl lg:text-5xl",
      xlg: "text-5xl lg:text-6xl",
    },
    fullWidth: {
      true: "w-full block",
    },
    fontWeight:{
      light: "font-light",
      normal: "font-normal",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
    }
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "primary",
        "foreground",
      ],
      class: "bg-clip-text bg-gradient-to-b",
    },
  ],
});

export const subtitle = tv({
  base: "w-full md:w-1/2 my-2 text-md text-default-600 block max-w-full",
  variants: {
    fullWidth: {
      true: "!w-full",
    },
    tone: {
       primary: "text-orange-500",
      dark: "text-gray-900 dark:text-white",
      muted: "text-gray-600 dark:text-gray-400",  
      gradientOrange:
        "bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent",
      gradientTech:
        "bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent",
    
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
});
