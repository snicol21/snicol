---
date: "2021-09-06"
title: "Table Value Constructor"
categories: ["mssql", "react", "tailwind"]
summary: "Use this simple utility for generating a table value selector statement in SQL."
---

When writing code in Transact-SQL, sometimes you want to specify a set of your own values to use. I've always had a script laying around or have often gone to this [StackOverflow]("https://stackoverflow.com/a/35093787") post to copy the same script and input my own values. As a learning exercise on my part and also for the rare occasions where I want to construct my own list, I made this little [React](https://reactjs.org/ "Home page for React") component that allows you to add and remove columns or values from a table and it will generate the corresponding table value selector query.

<TableValueConstructor />

Happy Coding!!
