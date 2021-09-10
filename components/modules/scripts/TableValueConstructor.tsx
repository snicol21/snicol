import { PlusIcon, TrashIcon } from "@heroicons/react/solid"
import { ChangeEvent, useState } from "react"

type IState = {
  columns: string[]
  values: Array<string[]>
}

const TableValueConstructor = () => {
  const [isCopied, setIsCopied] = useState(false)
  const [table, setTable] = useState({
    columns: ["Player", "Team", "Number"],
    values: [
      ["Michael Jordan", "Chicago Bulls", "23"],
      ["John Stockton", "Utah Jazz", "12"],
      ["Larry Bird", "Boston Celtics", "33"],
      ["Kobe Bryant", "Los Angeles Lakers", "24"],
    ],
  } as IState)

  const spaces = " ".repeat(5)
  const alias = "tbl"

  const script = `SELECT\n${spaces}${alias}.[${table.columns.join(`],\n${spaces}${alias}.[`)}]\nFROM (\n${spaces}VALUES${spaces}${table.values.map(
    (value) => `\n${spaces}(${value.map((val) => (isNaN(val as any) && val !== "NULL" ? `'${val}'` : val)).join(", ")})`
  )}\n) AS ${alias} ([${table.columns.join("],[")}])`

  const onClickAddColumn = () => {
    setTable({
      columns: table.columns.concat([`Field${table.columns.length + 1}`]),
      values: table.values.map((row) => row.concat("NULL")),
    })
  }

  const onClickAddRow = () => {
    setTable({ ...table, values: table.values.concat([Array(table.columns.length).fill("NULL")]) })
  }

  const onClickDeleteColumn = (i: number) => {
    const newColumns = [...table.columns]
    const newValues = [...table.values]
    newColumns.splice(i, 1)
    newValues.map((row) => row.splice(i, 1))
    setTable({ columns: newColumns, values: newValues })
  }

  const onClickDeleteRow = (i: number) => {
    const newValues = [...table.values]
    newValues.splice(i, 1)
    setTable({ ...table, values: newValues })
  }

  const onChangeColumn = (e: ChangeEvent<HTMLInputElement>, i: number) => {
    const newColumns = [...table.columns]
    newColumns.splice(i, 1, e.target.value)
    setTable({ ...table, columns: newColumns })
  }

  const onChangeRowValue = (e: ChangeEvent<HTMLInputElement>, i: number, j: number) => {
    const newValues = [...table.values]
    newValues[i][j] = e.target.value
    setTable({ ...table, values: newValues })
  }

  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text)
    } else {
      return document.execCommand("copy", true, text)
    }
  }

  const handleCopyClick = () => {
    copyTextToClipboard(script)
      .then(() => {
        setIsCopied(true)
        setTimeout(() => {
          setIsCopied(false)
        }, 1500)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <div className="w-full text-right">
          <button
            type="button"
            className="m-2 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() =>
              setTable({
                columns: ["Player", "Team", "Number"],
                values: [
                  ["Michael Jordan", "Chicago Bulls", "23"],
                  ["John Stockton", "Utah Jazz", "12"],
                  ["Larry Bird", "Boston Celtics", "33"],
                  ["Kobe Bryant", "Los Angeles Lakers", "24"],
                ],
              })
            }
          >
            <span className="w-10">Reset</span>
          </button>
        </div>
        <div className="flex my-5">
          <div className="flex flex-col">
            <table>
              <thead className="align-middle">
                <tr>
                  {table.columns.map((column, columnIndx) => (
                    <th key={columnIndx} scope="col" className="px-6 text-left tracking-wider">
                      <div className="flex flex-col">
                        <button
                          type="button"
                          className="self-center place-content-center inline-flex w-11/12 mb-2 items-center px-2.5 py-1.5 text-xs border dark:border-gray-800 font-medium rounded-xl text-gray-500 bg-gray-50 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          onClick={() => onClickDeleteColumn(columnIndx)}
                        >
                          <TrashIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                        <input
                          type="text"
                          value={column}
                          className="p-1 w-full font-medium dark:bg-mat-black"
                          onChange={(e) => onChangeColumn(e, columnIndx)}
                        />
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.values.map((valueRow, valueRowIdx) => (
                  <tr key={valueRowIdx}>
                    {valueRow.map((value, valueIdx) => (
                      <td key={valueIdx} className={`px-6 py-4 whitespace-nowrap ${valueRowIdx % 2 === 0 ? "bg-transparent" : "bg-gray-100 dark:bg-gray-700"}`}>
                        <div className="flex items-center">
                          <input type="text" value={value} className="p-1 w-full bg-transparent" onChange={(e) => onChangeRowValue(e, valueRowIdx, valueIdx)} />
                          {valueIdx === valueRow.length - 1 && (
                            <button
                              type="button"
                              className="inline-flex text-xs font-medium rounded-xl px-2.5 py-1.5 mr-2 text-gray-500 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              onClick={() => onClickDeleteRow(valueRowIdx)}
                            >
                              <TrashIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                          )}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              type="button"
              className="text-xs ml-1 mt-2 p-1 border dark:border-gray-800 font-medium rounded-xl text-gray-500 bg-gray-50 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={onClickAddRow}
            >
              <PlusIcon className="h-5 w-5 m-auto" aria-hidden="true" />
            </button>
          </div>
          <button
            type="button"
            className="text-xs mr-1 ml-2 p-1 mb-6 border dark:border-gray-800 font-medium rounded-xl text-gray-500 bg-gray-50 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={onClickAddColumn}
          >
            <PlusIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="relative">
        <button
          type="button"
          className="absolute right-0 m-2 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleCopyClick}
        >
          <span className="w-10">{isCopied ? "Copied!" : "Copy"}</span>
        </button>
        <pre>{script}</pre>
      </div>
    </div>
  )
}

export default TableValueConstructor
