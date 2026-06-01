# GreenRide Mobile App 🚗♻️

A React Native eco-friendly ride-hailing application built with TypeScript, Redux, and Expo. Users can book rides, track CO2 savings, earn EcoPoints, and enjoy a seamless dark mode experience.

## 🎯 Features

### Core Features
- **Ride Booking** - Browse and book Electric/Hybrid vehicles
- **Real-time CO2 Tracking** - See environmental impact of each ride
- **EcoPoints Rewards** - Earn points based on CO2 saved (1kg CO2 = 10 points)
- **Profile & Statistics** - Track total rides, CO2 savings, and rewards
- **Recent Rides** - View booking history with persistent storage
- **Dark Mode** - System-based theme toggle with persistence

### UI/UX
- Welcome/Onboarding Screen
- Home Screen with Ride Filtering & Sorting
- Interactive Map View with User Location
- Booking Confirmation with Bottom Sheet
- Booking Success with Confetti Animation
- Theme Toggle in Profile

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Language** | TypeScript |
| **Framework** | React Native + Expo |
| **Navigation** | Expo Router (File-based) |
| **State Management** | Redux Toolkit + Redux Persist |
| **Styling** | React Native StyleSheet |
| **Maps** | react-native-maps + expo-location |
| **Testing** | Jest + React Testing Library (54 tests) |
| **CI/CD** | GitHub Actions |

## 📱 Platforms

- ✅ iOS (via Expo)
- ✅ Android (via Expo)

## 🚀 Quick Start

### Prerequisites
- Node.js 20.x or higher
- npm or yarn
- Expo CLI: `npm install -g eas-cli`
- Expo Go app (iOS/Android) for testing

### Installation

```bash
# Clone the repository
git clone https://github.com/arinzehills/GreenRideAppTask.git
cd GreenRideAppTask

# Install dependencies
npm install --legacy-peer-deps

# Run tests
npm test

# Start development server
npm start
```

### Run on Device/Emulator

```bash
# iOS Simulator (Mac only)
npm run ios

# Android Emulator
npm run android
```

### Test on Your Phone

1. Download **Expo Go** from App Store or Play Store
2. Visit: https://expo.dev/accounts/arinzehills/projects/greenrideapptask
3. Scan the QR code or tap "Open with Expo Go"
4. App loads on your device instantly! 📱

## 📸 Screenshots

| Home Screen | Ride Selection | Booking Confirmation |
|:---:|:---:|:---:|
| ![Home](./assets/screenshot/Screenshot%202026-06-01%20at%208.35.07%20AM.png) | ![Rides](./assets/screenshot/Screenshot%202026-06-01%20at%208.35.19%20AM.png) | ![Booking](./assets/screenshot/Screenshot%202026-06-01%20at%208.35.30%20AM.png) |

| Booking Success | Profile & Stats |
|:---:|:---:|
| ![Success](./assets/screenshot/Screenshot%202026-06-01%20at%208.35.39%20AM.png) | ![Profile](./assets/screenshot/Screenshot%202026-06-01%20at%208.35.49%20AM.png) |

## 📂 Project Structure

```
src/
├── app/                          # Expo Router routes
│   ├── (tabs)/                   # Tab navigation
│   │   ├── index.tsx            # Home screen
│   │   ├── recent.tsx           # Recent rides
│   │   └── profile.tsx          # Profile & settings
│   ├── booking.tsx              # Booking confirmation modal
│   └── _layout.tsx              # Root layout with providers
│
├── modules/                      # Feature modules (rides, booking, profile, map)
├── shared/                       # Shared components, theme, hooks
├── store/                        # Redux configuration + persistence
└── data/
    └── rides.json               # Mock ride data
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run in watch mode
npm run test:watch

# Generate coverage
npm test -- --coverage
```

**54 Unit Tests** covering:
- Redux slices (Profile, Booking)
- Custom hooks (useBooking, useProfile)
- State management & persistence
- EcoPoints calculation

## 🌓 Dark Mode

- System-based light/dark detection
- Manual toggle in Profile screen
- Persistent preference (AsyncStorage)
- Centralized color system (`src/shared/theme/colors.ts`)

## 📡 API Integration

Currently uses **mock data** (`src/data/rides.json`). To integrate a real backend, update `RidesApiService` in `src/modules/rides/services/`.

## 🚢 Deployment

### Expo Public Link
```
https://expo.dev/accounts/arinzehills/projects/greenrideapptask
```

### GitHub Actions CI/CD
Automated tests run on every push. View results in **GitHub → Actions tab**.

### Troubleshooting
If `npm install` fails, use this as fallback:
```bash
npm install --legacy-peer-deps
```

## 📋 Assumptions

1. Mock data only (no backend API)
2. Location permissions required (iOS/Android)
3. Redux Persist for data persistence
4. EcoPoints formula: 1kg CO2 = 10 points
5. Unlimited booking history storage

## 🔮 Future Enhancements

- Real backend API integration
- User authentication (Firebase)
- Payment processing (Stripe)
- Push notifications
- Real-time ride tracking
- Driver ratings & reviews

## 👤 Author

**Arinze Hills**
- GitHub: [@arinzehills](https://github.com/arinzehills)

---

**Built with ❤️ for sustainable mobility**
