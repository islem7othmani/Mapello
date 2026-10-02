const items = ['One-to-One Dental Care', 'Advanced Technology', 'Personalized Care', 'Comfortable Environment']

export function TrustBar() {
  return (
    <div className="mx-auto mt-8 max-w-6xl rounded-[28px] border border-[var(--border)] bg-white/80 px-4 py-4 shadow-[0_14px_35px_rgba(20,41,65,0.06)] backdrop-blur md:px-6">
      <div className="grid gap-3 text-center sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-3 py-4 text-sm font-medium text-[var(--heading)]">
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
