import { PlusSmIcon as PlusSmIconSolid } from "@heroicons/react/solid"
import { ChangeEvent, useEffect, useState } from "react"

type IState = {
  columns: string[]
  values: Array<string[]>
}

const defaultState: IState = {
  columns: ["Field1", "Field2", "Field3"],
  values: [
    ["1", "2", "3"],
    ["2", "3", "4"],
    ["3", "4", "5"],
    ["4", "5", "6"],
  ],
}

const TableValueConstructor = () => {
  const [table, setTable] = useState(defaultState)

  const spaces = " ".repeat(5)
  const alias = "tbl"

  const script = `SELECT\n${spaces}${alias}.[${table.columns.join(`],\n${spaces}${alias}.[`)}]\nFROM (\n${spaces}VALUES${spaces}${table.values.map(
    (value) => `\n${spaces}(${value.join(",")})`
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

  return (
    <div>
      <button
        type="button"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        onClick={() =>
          setTable({
            columns: ["Field1", "Field2", "Field3"],
            values: [
              ["1", "2", "3"],
              ["2", "3", "4"],
              ["3", "4", "5"],
              ["4", "5", "6"],
            ],
          })
        }
      >
        Reset
      </button>
      <div className="overflow-x-auto">
        <div className="flex">
          <div className="flex flex-col">
            <table>
              <thead className="align-middle">
                <tr className="">
                  {table.columns.map((column, columnIndx) => (
                    <th key={columnIndx} scope="col" className="px-6 text-left text-xs  tracking-wider">
                      <input type="text" value={column} className="p-1 w-full font-medium dark:bg-mat-black" onChange={(e) => onChangeColumn(e, columnIndx)} />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.values.map((valueRow, valueRowIdx) => (
                  <tr key={valueRowIdx}>
                    {valueRow.map((value, valueIdx) => (
                      <td key={valueIdx} className="px-6 py-4 whitespace-nowrap text-sm">
                        <input
                          type="text"
                          value={value}
                          className="p-1 w-full dark:bg-mat-black"
                          onChange={(e) => onChangeRowValue(e, valueRowIdx, valueIdx)}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              type="button"
              className="text-primary bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-xl mt-1 p-1"
              onClick={onClickAddRow}
            >
              <PlusSmIconSolid className="h-5 w-5 m-auto" aria-hidden="true" />
            </button>
          </div>
          <button
            type="button"
            className="text-primary bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-xl ml-1 p-1 mb-6"
            onClick={onClickAddColumn}
          >
            <PlusSmIconSolid className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
      <pre>{script}</pre>
    </div>
  )
}

export default TableValueConstructor
