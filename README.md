<a name="readme-top"></a>

[![Stargazers][stars-shield]][stars-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/asish918/NextJS-Hotel-Booking">
    <img src="readme_assets/logo.png" alt="Logo" width="38" height="25">
  </a>

<h3 align="center">Hotel Booking Site</h3>

  <p align="center">
    A fully functional Hotel Booking site inspired by Airbnb
    <br />
    <br />
    <a href="https://nextjs-hotelbooking-clone-1d4duako2-asish918.vercel.app/" target="_blank">View Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![Product Name Screen Shot][product-screenshot]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- ![Next][Next.js]
- ![React][React.js]
- ![Prisma][Prisma]
- ![Tailwind][Tailwind]
- ![MongoDB][MongoDB]
- ![NextAuth][NextAuth]
- ![Leaflet][Leaflet]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get Auth API Keys for Google O-Auth, Cloud name for Cloudinary account and Mongo URI for your MongoDB database. You need to set these up manually.
2. Clone the repo
   ```sh
   git clone https://github.com/asish918/NextJS-Hotel-Booking.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API keys in `.env`. Refer the `.env.example` file
5. Generate Prisma types and push to MongoDB
   ```sh
   npx prisma generate && npx prisma push
   ```
6. Refer to the `schema.prisma` file and try to create some dummy data to see actual results. The image url is supposed to be the URL of the image file hosted on Cloudinary
7. Run the project
   ```sh
   npm run dev
   ```
   <p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Database Schema

Refer to this visual schema to understand better
![Database Schema][db-schema]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information. Basically you can do whatever the hell you want to with the code 😉

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Asish Mahapatra - asishmahapatra918@gmail.com

Deployed on <br /> ![Vercel][Vercel]

Project Link: [https://github.com/asish918/NextJS-Hotel-Booking](https://github.com/asish918/NextJS-Hotel-Booking)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[stars-shield]: https://img.shields.io/github/stars/asish918/NextJS-Hotel-Booking.svg?style=for-the-badge
[stars-url]: https://github.com/asish918/NextJS-Hotel-Booking/stargazers
[license-shield]: https://img.shields.io/github/license/asish918/NextJS-Hotel-Booking.svg?style=for-the-badge
[license-url]: https://github.com/asish918/NextJS-Hotel-Booking/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/asishmahapatra918
[product-screenshot]: readme_assets/banner.jpg
[db-schema]: readme_assets/schema.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[Prisma]: https://img.shields.io/badge/prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white
[Tailwind]: https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white
[MongoDB]: https://img.shields.io/badge/Mongo-47A248?style=for-the-badge&logo=mongodb&logoColor=white
[NextAuth]: https://img.shields.io/badge/NextAuth-3423A6?style=for-the-badge&logo=webauthn&logoColor=white
[Leaflet]: https://img.shields.io/badge/Leaflet-199900?style=for-the-badge&logo=leaflet&logoColor=white
[Vercel]: https://img.shields.io/badge/Vercel-black?style=for-the-badge&logo=vercel&logoColor=white
