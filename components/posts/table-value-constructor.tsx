import { ChangeEvent, useEffect, useState } from 'react';

import { PlusIcon, TrashIcon } from '@heroicons/react/24/solid';

import { prismHighlightAll } from '../../shared/utils/prism.util';

type IState = {
  columns: string[];
  values: Array<string[]>;
};

const TableValueConstructor = () => {
  const [table, setTable] = useState({
    columns: ['Player', 'Team', 'Number'],
    values: [
      ['Michael Jordan', 'Chicago Bulls', '23'],
      ['Lebron James', 'Cleveland Cavaliers', '23'],
      ['Kareem Abdul-Jabbar', 'Los Angeles Lakers', '33'],
      ['Karl Malone', 'Utah Jazz', '32'],
      ['Magic Johnson', 'Los Angeles Lakers', '32'],
      ['Bill Russell', 'Boston Celtics', '6'],
      ['Wilt Chamberlain', 'Los Angeles Lakers', '13'],
      ['Larry Bird', 'Boston Celtics', '33'],
      ['John Stockton', 'Utah Jazz', '12'],
      ['Hakeem Olajuwon', 'Houston Rockets', '34'],
    ],
  } as IState);

  useEffect(() => {
    prismHighlightAll();
  }, [table]);

  const spaces = ' '.repeat(5);
  const alias = 'tbl';

  const script = `SELECT\n${spaces}${alias}.[${table.columns.join(`],\n${spaces}${alias}.[`)}]\nFROM (\n${spaces}VALUES${spaces}${table.values.map(
    (value) => `\n${spaces}(${value.map((val) => (isNaN(val as any) && val !== 'NULL' ? `'${val.replace("'", "''")}'` : val.replace("'", "''"))).join(', ')})`
  )}\n) AS ${alias} ([${table.columns.join('],[')}])`;

  const onClickAddColumn = () => {
    setTable({
      columns: table.columns.concat([`Field${table.columns.length + 1}`]),
      values: table.values.map((row) => row.concat('NULL')),
    });
  };

  const onClickAddRow = () => {
    setTable({
      ...table,
      values: table.values.concat([Array(table.columns.length).fill('NULL')]),
    });
  };

  const onClickDeleteColumn = (i: number) => {
    const newColumns = [...table.columns];
    const newValues = [...table.values];
    newColumns.splice(i, 1);
    newValues.map((row) => row.splice(i, 1));
    setTable({ columns: newColumns, values: newValues });
  };

  const onClickDeleteRow = (i: number) => {
    const newValues = [...table.values];
    newValues.splice(i, 1);
    setTable({ ...table, values: newValues });
  };

  const onChangeColumn = (e: ChangeEvent<HTMLInputElement>, i: number) => {
    const newColumns = [...table.columns];
    newColumns.splice(i, 1, e.target.value);
    setTable({ ...table, columns: newColumns });
  };

  const onChangeRowValue = (e: ChangeEvent<HTMLInputElement>, i: number, j: number) => {
    const newValues = [...table.values];
    newValues[i][j] = e.target.value;
    setTable({ ...table, values: newValues });
  };

  return (
    <div>
      <div className='overflow-x-auto'>
        <div className='w-full text-right'>
          <button
            type='button'
            className='m-2 inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            onClick={() =>
              setTable({
                columns: ['Player', 'Team', 'Number'],
                values: [
                  ['Michael Jordan', 'Chicago Bulls', '23'],
                  ['Lebron James', 'Cleveland Cavaliers', '23'],
                  ['Kareem Abdul-Jabbar', 'Los Angeles Lakers', '33'],
                  ['Karl Malone', 'Utah Jazz', '32'],
                  ['Magic Johnson', 'Los Angeles Lakers', '32'],
                  ['Bill Russell', 'Boston Celtics', '6'],
                  ['Wilt Chamberlain', 'Los Angeles Lakers', '13'],
                  ['Larry Bird', 'Boston Celtics', '33'],
                  ['John Stockton', 'Utah Jazz', '12'],
                  ['Hakeem Olajuwon', 'Houston Rockets', '34'],
                ],
              })
            }
          >
            <span className='w-10'>Reset</span>
          </button>
        </div>
        <div className='my-5 flex'>
          <div className='flex flex-col'>
            <table>
              <thead className='align-middle'>
                <tr>
                  {table.columns.map((column, columnIndx) => (
                    <th key={columnIndx} scope='col' className='px-6 text-left tracking-wider'>
                      <div className='flex flex-col'>
                        <button
                          type='button'
                          className='mb-2 inline-flex w-11/12 place-content-center items-center self-center rounded-xl border bg-gray-50 px-2.5 py-1.5 text-xs font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800'
                          onClick={() => onClickDeleteColumn(columnIndx)}
                        >
                          <TrashIcon className='h-5 w-5' aria-hidden='true' />
                        </button>
                        <input
                          type='text'
                          value={column}
                          className='w-full p-1 font-medium dark:bg-mat-black'
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
                      <td key={valueIdx} className={`whitespace-nowrap px-6 py-4 ${valueRowIdx % 2 === 0 ? 'bg-transparent' : 'bg-gray-100 dark:bg-gray-700'}`}>
                        <div className='flex items-center'>
                          <input type='text' value={value} className='w-full bg-transparent p-1' onChange={(e) => onChangeRowValue(e, valueRowIdx, valueIdx)} />
                          {valueIdx === valueRow.length - 1 && (
                            <button
                              type='button'
                              className='mr-2 inline-flex rounded-xl px-2.5 py-1.5 text-xs font-medium text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:bg-gray-800'
                              onClick={() => onClickDeleteRow(valueRowIdx)}
                            >
                              <TrashIcon className='h-5 w-5' aria-hidden='true' />
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
              type='button'
              className='ml-1 mt-2 rounded-xl border bg-gray-50 p-1 text-xs font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800'
              onClick={onClickAddRow}
            >
              <PlusIcon className='m-auto h-5 w-5' aria-hidden='true' />
            </button>
          </div>
          <button
            type='button'
            className='mb-6 ml-2 mr-1 rounded-xl border bg-gray-50 p-1 text-xs font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800'
            onClick={onClickAddColumn}
          >
            <PlusIcon className='h-5 w-5' aria-hidden='true' />
          </button>
        </div>
      </div>
      <div>
        <pre className='language-sql'>
          <code>{script}</code>
        </pre>
      </div>
    </div>
  );
};

export default TableValueConstructor;
