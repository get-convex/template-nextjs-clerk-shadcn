import NextLink from "next/link";
import { cn, fr } from "@/lib/utils";

const Link = fr<
  React.ElementRef<typeof NextLink>,
  React.ComponentPropsWithoutRef<typeof NextLink>
>(function Link({ className, ...props }, ref) {
  return (
    <NextLink
      className={cn(
        "font-medium text-primary underline underline-offset-4 hover:no-underline",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

export { Link };
