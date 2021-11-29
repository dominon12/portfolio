# Portfolio Web App

The main idea is to make boring static portfolio be more interactive and more informative in order to get more chances to be notices by HRs.

The app is divided by 8 parts with different content in each:

- 🧑🏽‍💻 About
- 💼 Projects
- 🤸🏼‍♀️ Skills
- 👨‍💼 Experience
- 🌐 Languages
- 🤑 Donate
- 📲 Contact
- ⬇️ Download

Every part serves to introduce a different CV part (not including Donate).

# How can I use it?

First of all clone or fork this repository and download it to your local machine.

After that you can simply put your data into StoreService.ts which can be found at 'src/Services/'. There you can find an example payload for the app.

In order to make a telegram bot send you notifications from the contact form, you will need to register a telegram bot using <a href="https://t.me/BotFather">@BotFather</a>.

Then you will need to create a file CredentialsService.ts in the 'src/Services/' directory with the following content:

```TypeScript
export const TELEGRAM_BOT_TOKEN: string = "<your token goes here>";
export const TELEGRAM_ADMIN_CHAT_ID: number = <your telegram chat id goes here>;
```

After changing mine data to yours, deploy the app with any hosting you like. I'm using <a href="https://firebase.google.com/">firebase</a> and I'm happy with it.

This app is licensed with GNU GPLv3 so if you make any changes, you will have to publish them in a public repository, but if you just made changes described above, there is no need for that.

# Contributing

👍🎉 First off, thanks for taking the time to contribute! 🎉👍

**Preparations**

- Read 'How can I use it?' part.

**While working**

- Cover all the code you wrote with comments;
- Create a new branch for every feature or fix you are working on;
- If possible, write tests.

# LICENSE

This software is licensed with GNU GPLv3. Feel free to fork and make any changes, but always remember to publish them in a public repository.
