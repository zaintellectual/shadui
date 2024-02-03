import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Very Nice?</AccordionTrigger>
        <AccordionContent>
          Yes. I am.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="hover:text-blue-400 hover:no-underline">Not Bad</AccordionTrigger>
        <AccordionContent>
          Yes. You are right.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Okey Fine</AccordionTrigger>
        <AccordionContent>
          Yes.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
