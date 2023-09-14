import { type ClassValue, clsx } from "clsx";
import { ForwardRefRenderFunction, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

// class names
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// forward refs
export function fr<
  T = HTMLDivElement,
  P = React.HTMLAttributes<HTMLDivElement>
>(component: ForwardRefRenderFunction<T, P>) {
  const wrapped = forwardRef(component);
  wrapped.displayName = component.name;
  return wrapped;
}

// styled element
export function se(Tag: string, ...classNames: ClassValue[]) {
  const component = fr(({ className, ...props }, ref) => (
    // @ts-ignore
    <Tag ref={ref} className={cn(...classNames, className)} {...props} />
  ));
  component.displayName = Tag[0].toUpperCase() + Tag.slice(1);
  return component;
}
