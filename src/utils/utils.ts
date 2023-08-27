import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const debugMode = true

// cn(normal class, possible variants, choosen variants)
export function cn(
  className: ClassValue,
  variants?: Record<string, Record<string, ClassValue>>,
  choosenVariants?: Record<string, string>
) {
  if (variants && choosenVariants) {
    const variantClasses = Object.entries(choosenVariants).map(([key, value]) => variants[key][value])
    return twMerge(clsx(className, ...variantClasses, "customElement"))
  } else {
    return twMerge(clsx(className, "customElement"))
  }
}

export function toggleDark(darkMode: boolean) {
  if (darkMode) {
    document.querySelectorAll("*").forEach(element => {
      if (element.shadowRoot) {
        element.shadowRoot.querySelectorAll(".customElement").forEach(element => {
          element.classList.add("dark")
        })
      } else {
        element.querySelectorAll(".customElement").forEach(element => {
          element.classList.add("dark")
        })
      }
    })
  } else {
    document.querySelectorAll("*").forEach(element => {
      if (element.shadowRoot) {
        element.shadowRoot.querySelectorAll(".customElement").forEach(element => {
          element.classList.remove("dark")
        })
      } else {
        element.querySelectorAll(".customElement").forEach(element => {
          element.classList.remove("dark")
        })
      }
    })
  }
}

// funtion "getComponents"
import docs from "./docs.json";
export function getComponents() {
  return docs.components
}