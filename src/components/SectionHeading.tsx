type SectionHeadingProps = {
  eyebrow?: string
  title: string
  text?: string
  center?: boolean
}

export function SectionHeading({ eyebrow, title, text, center = false }: SectionHeadingProps) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">{eyebrow}</p>
      )}
      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[var(--heading)] sm:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-4 text-base leading-7 text-[var(--muted)]">{text}</p>}
    </div>
  )
}
