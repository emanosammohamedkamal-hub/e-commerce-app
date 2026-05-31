import { cn } from "@/lib/utils"
import { Loader2Icon } from "lucide-react"

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return <> 
  <img className=" animate-spin w-[30px]" src="/favicon 1.png" /> 
  </>
}
export { Spinner }
