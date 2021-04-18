# hackernews-graphql-js

This repository contains the final project for the [**GraphQL.js tutorial**](https://www.howtographql.com/graphql-js/0-introduction/) on [How to GraphQL](https://www.howtographql.com/). Note that it also serves as foundation for all frontend tutorials on the site.

First, we need to save an initial migration.
```
cd server
npx prisma migrate save --experimental
> Supply a migration name
```

Next, we need to run the migration.
```
npx prisma migrate up --experimental
```

Finally, we generate the Prisma Client.
```
npx prisma generate
```