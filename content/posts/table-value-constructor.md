---
author: "Spencer Nicol"
date: "2021-09-06"
title: "Table Value Constructor"
categories: ["mssql"]
description: "Use this simple utility for generating a table value selector statement in SQL."
authorImageUrl: "https://media.publit.io/file/spencer/spencer-small.jpg"
imageUrl: "https://media.publit.io/file/tableValueConstructor/table-value-constructor.png"
---

![](https://media.publit.io/file/tableValueConstructor/table-value-constructor.png)

## What is a Table Value Constructor?

According to Microsoft, a table value constructor:

> Specifies a set of row value expressions to be constructed into a table. The Transact-SQL table value constructor allows multiple rows of data to be specified in a single DML statement. [Table Value Construct (Transact-SQL)](https://docs.microsoft.com/en-us/sql/t-sql/queries/table-value-constructor-transact-sql?view=sql-server-ver15)

### Example

```sql
SELECT
     tbl.[Name],
     tbl.[ListPrice]
FROM (
     VALUES
     ('Helmet', 25.50),
     ('Wheel', 30.00)
) AS tbl ([Name],[ListPrice])
```

## Let's make it easier to generate this script

Oftentimes, while doing development in SQL, you might need some quick data to mimic some data or create a small table temporarily that matches a specific schema. Maybe you need a small reference table that will contain a static list of values. I always forget the syntax of a the _Table Value Constructor_ select statement and find myself googling the same thing to find an example `SELECT * FROM VALUES()` statement.

Well, I decided to solve this problem and create my own little script generator.

## BEHOLD! The Generator

Simply modify the table values and copy the script down below.

<TableValueConstructor />

That was easy! You're welcome. Happy Coding!!

![](https://media.giphy.com/media/tXTqLBYNf0N7W/giphy.gif)
