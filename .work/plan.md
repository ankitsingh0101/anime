

# Anime Gallery Dashboard — Updated Plan

## Overview
A sleek, dark-themed Anime Gallery Dashboard featuring **Naruto**, **Jujutsu Kaisen**, and **My Hero Academia**, each with **25 characters** (75 total), glassmorphism cards, neon accents, and Framer Motion animations.

## Pages & Features

### 1. Main Gallery Page
- Dark gradient background
- App title with neon purple/orange accents
- Responsive grid of 3 anime cards (glassmorphism, hover scale effect)
- Each card: poster image, anime title, episode/season count blurb

### 2. Anime Detail / Character Grid Page
- Navigate via React Router on card click
- Back button to gallery
- Anime banner with title & synopsis
- **Responsive grid of 25 character cards** per anime
- Each card: character image placeholder, name, hover lift effect
- Search/filter bar to find characters quickly (given 25 per anime)

### 3. Character Modal
- Click a character → sleek glassmorphism modal
- Shows: character image, power/abilities list, strength rating bar, famous quote (italic)
- Smooth Framer Motion open/close

## Character Data (Hardcoded — 25 per anime)

### Naruto (25 Characters)
Naruto Uzumaki, Sasuke Uchiha, Kakashi Hatake, Itachi Uchiha, Sakura Haruno, Gaara, Rock Lee, Hinata Hyuga, Shikamaru Nara, Jiraiya, Tsunade, Orochimaru, Minato Namikaze, Obito Uchiha, Madara Uchiha, Neji Hyuga, Killer Bee, Pain/Nagato, Might Guy, Hashirama Senju, Tobirama Senju, Kabuto Yakushi, Konan, Deidara, Sasori

### Jujutsu Kaisen (25 Characters)
Yuji Itadori, Gojo Satoru, Megumi Fushiguro, Ryomen Sukuna, Nobara Kugisaki, Toge Inumaki, Maki Zenin, Panda, Todo Aoi, Nanami Kento, Yuta Okkotsu, Choso, Mahito, Jogo, Hanami, Toji Fushiguro, Mei Mei, Kamo Noritoshi, Miwa Kasumi, Geto Suguru, Naoya Zenin, Yuki Tsukumo, Hakari Kinji, Kashimo Hajime, Uraume

### My Hero Academia (25 Characters)
Izuku Midoriya, Katsuki Bakugo, Shoto Todoroki, All Might, Ochaco Uraraka, Tenya Iida, Fumikage Tokoyami, Eijiro Kirishima, Momo Yaoyorozu, Tsuyu Asui, Denki Kaminari, Shota Aizawa, Endeavor, Hawks, Tomura Shigaraki, Dabi, Himiko Toga, Twice, Overhaul, Mirio Togata, Tamaki Amajiki, Nejire Hado, Best Jeanist, Midnight, Present Mic

Each character will have: abilities list, strength rating (1–10), and a famous quote.

## Design & Aesthetics
- **Theme**: Dark mode, deep navy/charcoal backgrounds
- **Accents**: Neon purple (#A855F7) & neon orange (#F97316) gradients
- **Cards**: Glassmorphism — translucent, backdrop blur, glowing borders
- **Animations**: Framer Motion page transitions, hover effects, modal animations
- **Typography**: Bold titles, italic quotes, clean sans-serif
- **Responsive**: Mobile-first grid layout

## Technical Approach
- Hardcoded data file with all 75 characters and their details
- React Router for page navigation
- Framer Motion for transitions and animations
- Radix Dialog for character modal
- Tailwind CSS for all styling
- Character search/filter on the detail page for easy browsing of 25 characters

