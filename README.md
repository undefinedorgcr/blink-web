# Blink

![Blink Logo](BlinkLogoWhite.png)

Blink is a minimalist social media app built on Starknet, where users share one authentic text post daily (max 50 characters, e.g., "Rain’s loud"), minted as an NFT they own. Friends can send "vibe" tokens as micro-rewards, fostering real connections with a blockchain twist. Our mission is to empower users with ownership and simplicity.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
- [Project Structure](#project-structure)
- [Smart Contracts](#smart-contracts)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- **Daily Posts**: Share one unfiltered text post per day, triggered by a random prompt.
- **NFT Ownership**: Each post is minted as a unique NFT on Starknet, owned by the user.
- **Micro**: Users send micro-rewards ($0.1), with 10% fee to Blink, 90% to the poster.
- **Minimal UI**: Simple interface with a daily wall of posts, no feeds or edits.
- **Wallet Integration**: Connect via Starknet wallets (e.g., Argent) with account abstraction.

## Tech Stack
- **Frontend**: Next.js (React framework for fast, SEO-friendly apps)
- **Blockchain**: Starknet (Layer 2 for low-cost NFT minting and vibe token transfers)
- **Smart Contracts**: Cairo (for NFT and vibe token logic)
- **Wallet**: Starknet.js (interfacing with wallets like Argent)
- **Styling**: Tailwind CSS (for rapid, minimalist design)

## Getting Started

### Prerequisites
- **Node.js**: v18 or higher
- **npm**: v9 or higher
- **Starknet Wallet**: Argent or Braavos for testing
- **Starknet Testnet**: Access to testnet STRK tokens
- **IPFS**: Optional for local metadata testing

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/blink-team/blink.git
   cd blink
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Create a `.env.local` file in the root:
     ```env
     NEXT_PUBLIC_STARKNET_NODE_URL=https://starknet-testnet.public.blastapi.io
     NEXT_PUBLIC_IPFS_GATEWAY=https://ipfs.io/ipfs/
     STARKNET_CONTRACT_ADDRESS=<your-deployed-contract-address>
     ```
   - Replace `<your-deployed-contract-address>` after deploying contracts.

### Running Locally
1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open [http://localhost:3000](http://localhost:3000) in your browser.
3. Connect a Starknet wallet (e.g., Argent) to test posting and vibing.

## Project Structure
```
blink/
├── contracts/            # Cairo smart contracts (NFT minting, vibe tokens)
├── public/               # Static assets (logo, favicon)
├── src/
│   ├── app/              # Next.js pages and layouts
│   ├── components/       # Reusable UI components (PostWall, VibeButton)
│   ├── lib/              # Utility functions (starknet.js, IPFS)
│   ├── styles/           # Tailwind CSS and global styles
├── .env.local            # Environment variables
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── README.md             # Project documentation
```

## Contributing
We welcome contributions! Follow these steps:
1. Fork the repo.
2. Create a feature branch (`git checkout -b feature/your-idea`).
3. Commit changes (`git commit -m "#(issue number) Add your idea"`).
4. Push to the branch (`git push origin feature/your-idea`).
5. Open a Pull Request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
- **Project Lead**: [Adrian Vargs] (adrivargas48@gmail.com)