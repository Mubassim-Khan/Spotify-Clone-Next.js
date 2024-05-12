# Spotify Clone (Next.js)

![Preview Image](https://github.com/Mubassim-Khan/Spotify-Clone-Next.js/blob/master/assets/Preview.png)

<div align="center">
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
     <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Supabase-black?style=for-the-badge&logoColor=white&logo=supabase&color=234ea94b" alt="supabase" />
    <img src="https://img.shields.io/badge/-Stripe-black?style=for-the-badge&logoColor=white&logo=stripe&color=230A0FFF" alt="stripe" />
</div>

## 📋 <a name="table">Table of Contents</a>

1. [Introduction](#introduction)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Demo](#demo)
5. [Getting Started](#quick-start)
6. [License](#license)
7. [Contributing](#contributing)
8. [Acknowledgements](#acknowledgements)
9. [Contact](#contact)

## <a name="introduction">Introduction</a>

This repository contains the code of a music playing app (Spotify Clone), made using Next.js, TypeScript, Tailwind CSS, Stripe & Supabase. The app replicates the core functionalities of Spotify, allowing users to discover, search, and play music. All songs and associated artwork are stored using Supabase, a backend-as-a-service (BaaS) platform. Users can subscribe to a Spotify plan using Stripe for recurring payments, and webhooks are set up to update Supabase when Stripe events occur.

## <a name="features">Features</a>

👉 **User Authentication**: Users can sign up or log in to their accounts using their email and password, or authenticate with their GitHub account.

👉 **Home Page**: Display the newest songs uploaded to Supabase, allowing users to discover the latest music.

👉 **Search**: Users can search for artists or tracks.

👉 **Music Player**: Play and control music tracks with features like play, pause, skip, and shuffle.

👉 **Automatic Queue Management**: Playing a song automatically adds related songs or songs in the playlist to the queue for uninterrupted music playback.

👉 **Favorite Songs**: Users can save their favorite songs and access them later.

👉 **Upload Songs with Artwork**: Users can upload their own songs along with custom artwork, which is stored on Supabase.

👉 **Subscription Plans**: Users can subscribe to different Spotify plans using Stripe for recurring payments.

👉 **Webhooks**: Set up webhooks to update Supabase when Stripe events occur, ensuring accurate subscription and payment data.

## <a name="tech-stack">Tech Stack 🛠️</a>

- [React.js](https://reactjs.org/) - JavaScript Library
- [Next.js](https://nextjs.org/) - Web Development Framework
- [TypeScript](https://www.typescriptlang.org/) - Programming Language
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Prettier](https://prettier.io/) - Code Formatter
- [React Hot Toast](https://react-hot-toast.com/docs) - Toast Notifications
- [Supabase](https://supabase.com/) - Backend-as-a-Service (BaaS)
- [Stripe](https://stripe.com/) - Payment Processing Platform

## <a name="#demo">Demo</a>

You can access the live demo of the app at [https://spotify-clone-ivory-sigma.vercel.app/](https://spotify-clone-ivory-sigma.vercel.app/).

- Feel free to use and play with the app.
- You can make an account using your own email address & confirm it using verification/confirmation link.
- This deployment is in test mode so you can "pay" (dummy transactions) with fake information.
- The test payment card is 4242 4242 4242 4242. The rest of the information can be made up.

## <a name="#quick-start">Getting Started</a>

To get started with this project, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/Mubassim-Khan/Spotify-Clone-Next.js
```

2. Open the project in your preferred code editor.

3. Install the project dependencies using npm:

```bash
npm install
```

4. Set Up Environment Variables by creating a new file named `.env` in the root of your project and add the following variables:

```env
# Supabase credentials
NEXT_PUBLIC_SUPABASE_URL="your credentials"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your credentials"
SUPABASE_SERVICE_ROLE_KEY="your credentials"

# Stripe credentials
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="your credentials"
STRIPE_SECRET_KEY="your credentials"
STRIPE_WEBHOOK_SECRET="your credentials"
```

Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up on the corresponding websites from [Supabase](https://supabase.com/) and [Stripe](https://stripe.com/)

5. Run the project

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

7. To view webhooks, refer to Stripe documentation for Webhooks (may require a login to your account) [Documentation](https://dashboard.stripe.com/webhooks)

## <a name="license">License</a>

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## <a name="contributing">Contributing</a>

Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## <a name="acknowledgements">Acknowledgements</a>

- Copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

## <a name="contact">Contact</a>

If you have any questions, suggestions, or feedback, you can reach out to the project maintainer:

- LinkedIn : [Mubassim Ahmed Khan](https://www.linkedin.com/in/mubassim-ahmed-khan/)
- Email: [mubassimkhan@gmail.com](mailto:mubassimkhan@gmail.com)

---

<!----->
