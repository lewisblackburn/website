<p align="center">
  <img alt="" src="https://lewisblackburn.me/images/og/og.png">
</p>

<h1 align="center">
  lewisblackburn.me
</h1>

## 🔨 Requirements

- Node, recommended `20.x`
- pnpm, recommended `8.14.0`

## 👋 Getting Started

Follow these steps to run the project locally on your machine:

```bash
git clone https://github.com/lewisblackburn/lewisblackburn.me.git
cd lewisblackburn.me
pnpm install
```

Create a `.env.local` file based on the provided `.env.example` file and fill in the necessary variables.

OR you can skip this by modifying `apps/web/src/env.ts`:

```ts
export const env = createEnv({
  skipValidation: true,

  server: {
    // ...
  },
})
```

You may notice that some functionalities will not work properly. But it's okay for learning.

To run the app in development mode:

```bash
pnpm dev
```

The app will be available at `localhost:3000`.

## ✍🏻 Author

[@lewisblackburn](https://github.com/lewisblackburn)

## 🪪 License

This project is open source and available under the [MIT License](LICENSE).

<hr>
<p align="center">
Made with ❤️  in Leeds (UK)
</p>
