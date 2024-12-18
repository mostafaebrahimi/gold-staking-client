# Gold Staking Client

This project is a **Gold Staking Client** built with **Next.js** and **Shadcn UI**. It includes functionality for users to **buy** and **sell gold** dynamically, view live gold rates, and complete user verification processes.

---

## Table of Contents

- [Gold Staking Client](#gold-staking-client)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Project Structure](#project-structure)
  - [Available Scripts](#available-scripts)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)

---

## Features

- 📊 **Real-Time Gold Rate**: View live gold rates per milligram.
- 🛒 **Gold Purchase & Sale**: Dynamic forms to calculate payments and gold values.
- 🔐 **User Verification**: Integrated dialog for identity verification.
- 💡 **Responsive Design**: Fully responsive UI using Tailwind CSS.
- 🔢 **Persian Number Support**: Displays numbers in Persian format with comma separators.
- 🎨 **Clean UI**: Designed with Shadcn UI components for consistent and modular styling.

---

## Tech Stack

- **Next.js**: React-based framework for server-side rendering and routing.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.
- **Shadcn UI**: Reusable and accessible components.
- **TypeScript** *(Optional)*: For type safety.
- **Git**: Version control.

---

## Getting Started

### Prerequisites

- **Node.js** (v18+)
- **npm** or **yarn**
- **Git**

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:mostafaebrahimi/gold-staking-client.git
   ```

2. Navigate into the project directory:

   ```bash
   cd gold-staking-client
   ```

3. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
gold-staking-client/
├── components/           # Reusable UI components
│   ├── GoldForm.tsx      # Form to handle gold transactions
│   ├── InstructionSteps.tsx # Steps for guidance
│   ├── IdentityVerificationDialog.tsx # Dialog for user verification
│   └── FormattedInput.tsx # Custom input for formatted values
├── pages/                # Next.js pages
│   ├── index.tsx         # Main page
│   └── _app.tsx          # Custom app configuration
├── styles/               # Global styles
├── utils/                # Utility functions (e.g., number formatters)
└── README.md             # Documentation
```

---

## Available Scripts

- **`npm run dev`**: Start the development server.
- **`npm run build`**: Build the application for production.
- **`npm start`**: Start the production build.
- **`npm run lint`**: Lint the code using ESLint.

---

## Usage

1. **Gold Calculation**: Enter the payment amount or gold value to see the other calculated dynamically.
2. **Identity Verification**: Complete user verification through a dialog interface.
3. **Buy & Sell Tabs**: Use tabs to switch between buying and selling modes.
4. **Real-Time Persian Numbers**: All numbers, including decimals and separators, are shown in Persian format.

---

## Contributing

1. Fork this repository.
2. Create a new branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Commit your changes:

   ```bash
   git commit -m "feature: your-feature-name"
   ```

4. Push to your branch:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Open a Pull Request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

- Thanks to **Shadcn UI** for their reusable components.
- Tailwind CSS for simplified styling.
- Open-source libraries that made this project possible.
