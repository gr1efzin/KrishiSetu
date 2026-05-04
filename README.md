# Krishi Setu

**Krishi Setu** (কৃষি সেতু / कृषि सेतु) is a farmer transport pooling platform designed for West Bengal, India. It connects farmers to share transportation costs, access real-time market prices, and optimize logistics for agricultural produce.

> Note: This repository contains the **frontend only**.

## Features

### Transport Pooling
- **Smart Clustering**: Groups nearby farmers by location to share truck capacity
- **Join/Leave Pools**: 15-minute opt-out window after joining a pool
- **Cost Savings**: Real-time calculation of estimated savings per pool

### Market Analytics
- **Live Prices**: Real-time wholesale prices for major crops
- **AI Predictions**: 7-day price forecasts based on historical data
- **Trend Indicators**: Visual indicators for price movements

### Logistics Visualization
- **Pool Status Cards**: View all active transport pools across West Bengal
- **Farmer Count**: Track number of farmers in each pool
- **Weight Tracking**: Monitor total cargo weight per pool

### Multi-Language Support
- English
- বাংলা (Bengali)
- हिंदी (Hindi)

## Project Structure

```
src/
├── components/
│   ├── analytics/      # Market analytics components
│   ├── dashboard/      # Farmer dashboard components
│   ├── layout/         # Navigation, header, sidebar
│   ├── logistics/      # Logistics visualization
│   ├── profile/        # User profile components
│   └── ui/             # shadcn/ui base components
├── hooks/              # Custom React hooks
├── i18n/               # Internationalization (translations)
├── lib/                # shadcn/ui utilities
├── store/
│   └── atoms/          # Jotai atoms for state management
└── utils/              # Clustering engine & utilities
```

## Getting Started

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd h-thon

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## License

This project is part of a hackathon submission.

---

**Built with ❤️**
