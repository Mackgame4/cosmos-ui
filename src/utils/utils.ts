import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const debugMode = true

export function getDark() {
  return document.querySelector("c-provider")?.classList.contains("dark") ?? false
}

// cn(normal class, possible variants, choosen variants)
/*export function cn(
  className: ClassValue,
  variants: Record<string, Record<string, ClassValue>>,
  choosenVariants: Record<string, string>
) {
  const variantClasses = Object.entries(choosenVariants).map(([key, value]) => variants[key][value])
  return twMerge(clsx(className, ...variantClasses))
}*/
/*export function cn(
  className: ClassValue,
  variants?: Record<string, Record<string, ClassValue>>,
  choosenVariants?: Record<string, string>
) {
  if (variants && choosenVariants) {
    const variantClasses = Object.entries(choosenVariants).map(([key, value]) => variants[key][value])
    return twMerge(clsx(className, ...variantClasses))
  } else {
    return twMerge(clsx(className))
  }
}*/
export function cn(
  className: ClassValue,
  variants?: Record<string, Record<string, ClassValue>>,
  choosenVariants?: Record<string, string>
) {
  if (variants && choosenVariants) {
    const variantClasses = Object.entries(choosenVariants).map(([key, value]) => variants[key][value])
    return twMerge(clsx(className, ...variantClasses, getDark() ? "dark" : ""))
  } else {
    return twMerge(clsx(className, getDark() ? "dark" : ""))
  }
}