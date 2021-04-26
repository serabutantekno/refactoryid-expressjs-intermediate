# How to

1. Generating the first model

```sequelize
npx sequelize-cli model:generate --name Todo --attributes title:string,desc:string,status:boolean
```

2. Create DB using sequelize-cli based on database.js

```sequelize
npx sequelize-cli db:create
```
