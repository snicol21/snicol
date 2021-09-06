import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import advancedFormat from "dayjs/plugin/advancedFormat"

dayjs.extend(relativeTime)
dayjs.extend(advancedFormat)

export type IDateDisplay = {
  dateDisplay: string
  dateFullDisplay: string
  timeDisplay: string
  timeRangeDisplay?: string
  relativeDisplay: string
  isoString: string
}

export function getDateDisplay(rawDate: Date | string): IDateDisplay {
  const date = dayjs(rawDate)
  return {
    dateDisplay: date.format("MMMM Do, YYYY"),
    dateFullDisplay: date.format("dddd, MMMM Do, YYYY"),
    timeDisplay: date.format("h:mm A"),
    relativeDisplay: dayjs(date).fromNow(false),
    isoString: date.toISOString(),
  }
}