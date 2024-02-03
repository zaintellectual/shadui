import { AccordionDemo } from '@/components/accordion'
import { AlertDialogDemo } from '@/components/alertDialoge'
import { CardWithForm } from '@/components/card'
import { Accordion } from '@/components/ui/accordion'
import { Cardo } from 'next/font/google'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <h1 className='text-center text-3xl pt-5'>
        Shadcn Ui
      </h1>
      <div>
       <AccordionDemo></AccordionDemo>
      </div>
      <div>
       <AlertDialogDemo></AlertDialogDemo>
      </div>
      <div>
       <CardWithForm></CardWithForm> 
      </div>
    </div>
  )
}
