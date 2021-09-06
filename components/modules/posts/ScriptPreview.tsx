import Link from "next/link"
import { IScriptFrontMatter } from "../../../pages/scripts/[slug]"
import { getDateDisplay } from "../../../shared/utils/date.util"
import TechIcon from "../../elements/icons/TechIcon"

type Props = IScriptFrontMatter & { slug: string }

const ScriptPreview = ({ slug, title, date, categories, summary }: Props) => {
  const dateFormatted = getDateDisplay(date)
  return (
    <div>
      <div className="text-xs uppercase font-semibold text-gray-600 dark:text-gray-400">{dateFormatted.dateDisplay}</div>
      <div className="mt-2 block">
        <div className="text-xl font-semibold">{title}</div>
        <p className="mt-3 text-base text-gray-500 dark:text-gray-300">{summary}</p>
        <div className="mt-3 space-x-1">
          {categories.map((category) => (
            <span key={category} className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
              <TechIcon name={category} className="-ml-1 mr-1.5 h-5 w-5" />
            </span>
          ))}
        </div>
      </div>
      <div className="mt-3">
        <Link href={`/scripts/${slug}`}>
          <a className="text-base font-semibold text-primary hover:text-primary-700">Learn more</a>
        </Link>
      </div>
    </div>
  )
}

export default ScriptPreview
