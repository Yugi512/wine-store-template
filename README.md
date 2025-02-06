This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Future plans for website

this is a template and isnt intended for enterprise use its a ecommerce website that I am creating to test out features and develop and hone my skills as a full stack dev. I am still somewhat inexperienced and I use these projects to see where I am lacking in terms of skills and so far compared to my last project I seem to be doing better as I have a working decent looking frontend that works, and I connected to the backedn using neon and drizzle orm, and upstash redis. I shall update these projects every month to basically build them out slowly until they are viable production grade websites that I can deploy and then move it from a monolithic app to an app comprised of microservices 

## Tasks to complete in the near future
- need to build out admin page, and its components next 
- implement accounts and display info on my-profile page showing past orders, current order, address, payments, reward points, if they have any coupons, and birthdays 
- add sidebar, and filter options to the wines and spirits page so that you can filter by varietal, spirit (whiskey,rum,tequila), the type for wine its red white sparkling etc..., for liquor it could be age
- add to cart feature for the items being displayed in both the individual card and then the list format
- implement stripe and more authentication factors, add refunds and stuff of that nature
- create the orms for the wines and spirits and reviews
- connect users with their reviews, the reviews with the specified bottle of alcohol, and all the reviews to the bottle that they pertain to 
- add error page incase anything stops working so users dont recieve a 404
- refactor code so that its clean and has 0(log n) runtime complexity or close enough
- seed database after creating orms
- write test cases for every component and test data 
- make the website look prettier