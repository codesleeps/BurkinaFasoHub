type NewsItem = {
  title: string
  link: string
  isoDate?: string
  source?: string
}

export function NewsList({ items }: { items: NewsItem[] }) {
  if (!items?.length) {
    return <p className="text-black/60">No news available right now.</p>
  }
  return (
    <ul className="grid gap-4 md:gap-6">
      {items.map((item) => (
        <li key={item.link} className="card p-4">
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="group inline-flex flex-col gap-1">
            <span className="font-semibold group-hover:text-burkina-green">{item.title}</span>
            <span className="text-xs text-black/60">
              {item.source ? `${item.source} · ` : ''}
              {item.isoDate ? new Date(item.isoDate).toLocaleString() : ''}
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}
