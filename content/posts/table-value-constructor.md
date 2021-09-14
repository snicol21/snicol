---
author: "Spencer Nicol"
date: "2021-09-06"
title: "Table Value Constructor"
categories: ["mssql"]
description: "Use this simple utility for generating a table value selector statement in SQL."
authorImageUrl: "https://media.publit.io/file/spencer/spencer-small.jpg"
imageUrl: "https://media.publit.io/file/table-value-constructor.png"
---

![](https://media.publit.io/file/table-value-constructor.png)

When writing code in Transact-SQL, sometimes you want to specify a set of your own values to use. I've always had a script laying around or have often gone to this [StackOverflow](https://stackoverflow.com/questions/1564956/how-can-i-select-from-list-of-values-in-sql-server/35093787#35093787) post to copy the same script and input my own values. As a learning exercise on my part and also for the rare occasions where I want to construct my own list, I made this little React component that allows you to add and remove columns or values from a table and it will generate the corresponding table value selector query.

<TableValueConstructor />

Happy Coding!!