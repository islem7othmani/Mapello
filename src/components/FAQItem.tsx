import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

type FAQItemProps = {
  question: string
  answer: string
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="rounded-[26px] border border-[var(--border)] bg-white px-5 py-4">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 text-left"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium text-[var(--heading)]">{question}</span>
        <ChevronDown className={`h-5 w-5 transition ${isOpen ? 'rotate-180 text-[var(--primary)]' : 'text-[var(--muted)]'}`} />
      </button>
      {isOpen && <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{answer}</p>}
    </div>
  )
}
