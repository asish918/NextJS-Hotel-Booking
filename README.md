![AirbnbLogo](readme_assets/logo.png)
Fully Functional <b>Airbnb Clone</b>
<br/>

![Banner](readme_assets/banner.jpg)

<br/>

## Tech Stack

<div align="center">
<img src="https://img.shields.io/badge/-react-white?style=for-the-badge&logoColor=white&color=61DAFB&logo=react" />
<img src="https://img.shields.io/badge/-next-white?style=for-the-badge&logoColor=white&color=000000&logo=next.js" />
<img src="https://img.shields.io/badge/-tailwind-white?style=for-the-badge&logoColor=white&color=06B6D4&logo=tailwindcss" />
<img src="https://img.shields.io/badge/-mongodb-white?style=for-the-badge&logoColor=white&color=47A248&logo=mongodb" />
<img src="https://img.shields.io/badge/-nextauth-white?style=for-the-badge&logoColor=white&color=3423A6&logo=webauthn" />
<img src="https://img.shields.io/badge/-axios-white?style=for-the-badge&logoColor=white&color=5A29E4&logo=axios" />
<img src="https://img.shields.io/badge/-typescript-white?style=for-the-badge&logoColor=white&color=3178C6&logo=typescript" />
<img src="https://img.shields.io/badge/-leaflet_maps-white?style=for-the-badge&logoColor=white&color=199900&logo=leaflet" />
<img src="https://img.shields.io/badge/-prisma-white?style=for-the-badge&logoColor=white&color=2D3748&logo=prisma" />
</div>

## Tools Used

<div align="center">
<img src="https://img.shields.io/badge/-npm-white?style=for-the-badge&logoColor=CB3837&color=2D3748&logo=npm" />
<img src="https://img.shields.io/badge/-git-white?style=for-the-badge&logoColor=white&color=F05032&logo=git" />
<img src="https://img.shields.io/badge/-github-white?style=for-the-badge&logoColor=white&color=181717&logo=github" />
<img src="https://img.shields.io/badge/-datagrip-white?style=for-the-badge&logoColor=white&color=000000&logo=datagrip" />
<img src="https://img.shields.io/badge/-VSCODE-white?style=for-the-badge&logoColor=white&color=007ACC&logo=visual studio code" />
</div>

<br/>
<br/>

<a href="https://www.figma.com/community/file/1206705782258966386/airbnb-ui-kit" target="_blank">
<img src="https://img.shields.io/badge/-figma-white?style=for-the-badge&logoColor=white&color=F24E1E&logo=figma" />
</a>

The UI for this site was replicated from the above Figma file.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then create a .env file, and fill your respective credentials:

```bash
DATABASE_URL="your_mongo_url"
NEXTAUTH_SECRET="SOME_RANDOM_SECRET"
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
```

Generate your Prisma Schema and Push it to MongoDB:

```bash
npx primsa generate
```

```bash
npx primsa db push
```

Run the dev server:

```bash
npm run dev
#or
yarn run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## File Structure

![File](readme_assets/file_struct.png)

## DB Schemas

![Schema](readme_assets/schema.png)

<hr/>
<br/>

Deployed on

<img src="https://img.shields.io/badge/-vercel-white?style=for-the-badge&logoColor=white&color=000000&logo=vercel" />
