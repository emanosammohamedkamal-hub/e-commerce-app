import { InfoIcon, SearchIcon } from "lucide-react"

import { Field, FieldLabel } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"

export function  SearchInput() {
  return (
    <Field className="w-[30%] border-gray_91 border rounded-xl  focus:border-0  hidden lg:+=flex">
       <InputGroup className="border-0   ">
        <InputGroupInput id="input-group-url" className="w-[40%]" placeholder="Search For Products ,Brands and more" />
        <InputGroupAddon>
         </InputGroupAddon>
        <InputGroupAddon align="inline-end"  className="bg-green-700 w-[25px] h-[25px]  p-0 flex justify-center me-2 rounded-full">
          <SearchIcon  className="text-white" />
        </InputGroupAddon>
      </InputGroup>
    </Field>
  )
}
