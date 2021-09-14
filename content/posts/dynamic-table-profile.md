---
author: "Spencer Nicol"
date: "2021-09-13"
title: "Dynamic Table Profile"
categories: ["mssql"]
description: "How to dynamically profile every column of a table using TSQL"
authorImageUrl: "https://media.publit.io/file/spencer/spencer-small.jpg"
imageUrl: "https://media.publit.io/file/dynamic-table-profile.jpg"
---

![](https://media.publit.io/file/dynamic-table-profile.jpg)

```sql
IF OBJECT_ID(N'[dbo].[Players]', N'U') IS NOT NULL
DROP TABLE [dbo].[Players];

SELECT
     tbl.[Player],
     tbl.[Team],
     tbl.[Number]
INTO [dbo].[Players]
FROM (
     VALUES
     ('Michael Jordan', 'Chicago Bulls', 23),
     ('Lebron James', 'Cleveland Cavaliers', 23),
     ('Kareem Abdul-Jabbar', 'Los Angeles Lakers', 33),
     ('Karl Malone', 'Utah Jazz', 32),
     ('Magic Johnson', 'Los Angeles Lakers', 32),
     ('Bill Russell', 'Boston Celtics', 6),
     ('Wilt Chamberlain', 'Los Angeles Lakers', 13),
     ('Larry Bird', 'Boston Celtics', 33),
     ('John Stockton', 'Utah Jazz', 12),
     ('Hakeem Olajuwon', 'Houston Rockets', 34)
) AS tbl ([Player],[Team],[Number])
```

```sql
DECLARE @DatabaseNM NVARCHAR(255) = 'master'
DECLARE @SchemaNM NVARCHAR(255) = 'dbo'
DECLARE @TableNM NVARCHAR(255) = 'Players'

DECLARE @SQL NVARCHAR(MAX) = '';
DECLARE @EntityFieldsWithId TABLE (
     ID INT PRIMARY KEY,
     FieldNM VARCHAR(255)
)
SET @SQL = '
SELECT
     [ORDINAL_POSITION] AS [ID],
	 [COLUMN_NAME] AS [FieldNM]
FROM ['+@DatabaseNM+'].[INFORMATION_SCHEMA].[COLUMNS] AS c
WHERE c.[TABLE_SCHEMA]='''+@SchemaNM+'''
      AND c.[TABLE_NAME] = '''+@TableNM+'''
'
INSERT INTO @EntityFieldsWithId
EXEC(@SQL)
```

```sql
DECLARE @NumIDs INT = (SELECT COUNT(*) FROM @EntityFieldsWithId)
DECLARE @ID INT = 1;

DECLARE @SQLWhenClause NVARCHAR(MAX) = '';
WHILE (@ID <= @NumIDs)
BEGIN
	DECLARE @FieldNM VARCHAR(255);
	SELECT @FieldNM = FieldNM
	FROM @EntityFieldsWithId
	WHERE ID = @ID

	SET @SQLWhenClause = @SQLWhenClause +
          CHAR(10) + REPLICATE(' ', 10) +
		'WHEN '''+@FieldNM+''' THEN CAST(tbl.['+@FieldNM+'] AS SQL_VARIANT) '

	SET @ID = @ID + 1
END

DECLARE @SQLCaseStatement NVARCHAR(MAX) = '';
SET @SQLCaseStatement = '
SELECT
     f.[FieldID],
	 f.[FieldNM],
     CASE f.[FieldNM] '+@SQLWhenClause+'
     END AS ValueTXT
FROM ['+@DatabaseNM+'].['+@SchemaNM+'].['+@TableNM+'] AS tbl
WITH (NOLOCK) CROSS JOIN (
	SELECT
		 [ORDINAL_POSITION] AS [FieldID],
		 [COLUMN_NAME] AS [FieldNM]
	FROM ['+@DatabaseNM+'].[INFORMATION_SCHEMA].[COLUMNS] AS c
	WHERE c.[TABLE_SCHEMA]='''+@SchemaNM+'''
		  AND c.[TABLE_NAME] = '''+@TableNM+'''
) AS f'

EXEC(@SQLCaseStatement)
```
