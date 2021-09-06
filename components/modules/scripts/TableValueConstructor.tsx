const TableValueConstructor = () => {
  const spaces = " ".repeat(5)
  const columns = ["Field1", "Field2", "Field3"]
  const alias = "tbl"
  const values = [
    [1, 2, 3],
    [2, 3, 4],
    [3, 4, 5],
    [4, 5, 6],
  ]
  const script = `SELECT\n${spaces}${alias}.[${columns.join(`],\n${spaces}${alias}.[`)}]\nFROM (\n${spaces}VALUES${spaces}${values.map(
    (value) => `\n${spaces}(${value.join(",")})`
  )}\n) AS ${alias} ([${columns.join("],[")}])`
  console.log(script)
  return <pre>{script}</pre>
}

export default TableValueConstructor
