AI-News-Dashboard
==================

A modern, responsive React web application that fetches and displays news from multiple sources with AI-generated summaries. Built to provide users with a clean, user-friendly interface for browsing trending news across different categories and searching for specific topics.

Features
=========

Category-based news: Browse top headlines by categories like Technology, Sports, Business, etc.

Search functionality: Search for any topic to get relevant news articles.

AI-powered summaries: Generate quick 2–3 sentence summaries of news articles using OpenAI's API.

Responsive design: Works smoothly on desktop, tablet, and mobile devices.

Skeleton loaders: Displays placeholder loading cards while fetching news.

External links: Quickly navigate to the original news source.

Clean UI: Smooth animations and modern design with hover effects.

Technologies Used
==================

React (Functional Components & Hooks)

React Router v6

OpenAI API for AI-powered news summaries

NewsAPI.org for fetching news data

CSS Modules for scoped styling

Vite as the build tool

Getting Started
=================
Prerequisites

Node.js (v16+ recommended)

npm or yarn

OpenAI API key

NewsAPI.org API key

Installation
==============

Clone the repository:

git clone https://github.com/
<your-username>/AI-News-Dashboard.git

Navigate into the project directory:

cd AI-News-Dashboard

Install dependencies:

npm install
or
yarn install

Create a .env file in the root:

VITE_OPENAI_KEY=your_openai_api_key
VITE_NEWSAPI_KEY=your_newsapi_key

Start the development server:

npm run dev
or
yarn dev

The app should now be running at http://localhost:5173.

Usage
======

Click on categories in the header to view news by category.

Use the search bar to find news articles by keyword.

Click Summarize on any news card to generate a short AI summary.

Click Read More → to visit the original article.

Project Structure
===================

AI-News-Dashboard/
├─ src/
│ ├─ components/
│ │ ├─ NewsCard.jsx
│ │ ├─ NewsGrid.jsx
│ │ ├─ Header.jsx
│ │ ├─ Footer.jsx
│ │ └─ SummaryModal.jsx
│ ├─ App.jsx
│ ├─ main.jsx
│ └─ styles/
├─ public/
├─ .env
├─ package.json
└─ README.md

Future Improvements
=====================

Add user authentication to save favorite articles.

Dark mode toggle.

Pagination for news results.

Better error handling and notifications.

License
========

This project is open source and available under the MIT License.

Author
=======

Siadat Ali

GitHub: https://github.com/Siadatali
