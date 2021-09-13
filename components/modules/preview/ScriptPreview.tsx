import Link from "next/link"
import { IScriptFrontMatter } from "../../../pages/posts/[slug]"
import { getDateDisplay } from "../../../shared/utils/date.util"
import TechIcon from "../../elements/icons/TechIcon"

type Props = IScriptFrontMatter & { slug: string }

const ScriptPreview = ({ slug, author, title, date, categories, description, authorImageUrl, imageUrl }: Props) => {
  const dateFormatted = getDateDisplay(date)
  return (
    <Link href={`/posts/${slug}`}>
      <a className="flex flex-col rounded-lg shadow-lg dark:shadow-none overflow-hidden">
        <a className="flex-shrink-0">
          <img className="h-48 w-full object-cover" src={imageUrl} alt="" />
        </a>
        <div className="flex-1 p-6 flex flex-col justify-between dark:bg-gray-800">
          <div className="flex-1">
            <div className="mt-3 space-x-1">
              {categories.map((category) => (
                <span key={category} className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  <TechIcon name={category} className="-ml-1 mr-1.5 h-4 w-4" />
                </span>
              ))}
            </div>
            <div className="block mt-2">
              <p className="text-xl font-semibold">{title}</p>
              <p className="mt-3 text-base text-gray-500 dark:text-gray-300">{description}</p>
            </div>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <span className="sr-only">{author}</span>
              <img className="h-10 w-10 rounded-full" src={authorImageUrl} alt="" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">{author}</p>
              <div className="flex space-x-1 text-sm text-gray-600 dark:text-gray-400">
                <time dateTime={date}>{dateFormatted.dateDisplay}</time>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default ScriptPreview
