import { ReactNode } from "react"
import Link from "next/link"
//importing the new icons
import { Dot } from "./icons/Dot"
import { VerticalLine } from "./icons/VerticalLine"

type StepsLayoutProps = {
  children: ReactNode
}

export const StepsLayout = ({ children }: StepsLayoutProps) => {
  return (
    <article className='flex justify-start gap-28 min-w-[82%] text-sky-900'>
      <div className='flex flex-col px-8 py-6 mx-20 h-[200px] border-r-2 border-[#8586887c] border-dashed'>
        <Link href='/api/step-one'>
          <div className='flex items-center gap-4'>
            {/* <!--dot is highlighted (active) here--> */}
            <Dot active />
            <p>Nome</p>
          </div>
        </Link>
        {/* <!--vertical line is not active--> */}
        <VerticalLine active={false} />
        <Link href='/api/step-two'>
          <div className='flex items-center gap-4'>
            {/* <!--the second dot is not active--> */}
            <Dot active={false} />
            <p>Email</p>
          </div>
        </Link>
        {/* <!--the second vertical line is not active too--> */}
        <VerticalLine active={false} />
        <Link href='/your-answers'>
          <div className='flex items-center gap-4'>
            {/* <!--the third dot is not active--> */}
            <Dot active={false} />
            <p>Your Answers</p>
          </div>
        </Link>
      </div>
      <form>{children}</form>
    </article>
  )
}