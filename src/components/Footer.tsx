import { COPY, type Lang } from '../data/i18n'

export default function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="hairline-t relative flex flex-col gap-3 px-5 py-6 md:flex-row md:items-center md:justify-between md:px-10">
      <span className="label-xs">&copy; 2025 Arthur Satoshi</span>
      <span className="label-xs">{COPY[lang].footer}</span>
      <span className="label-xs">SYSTEM REV 2.4</span>
    </footer>
  )
}
