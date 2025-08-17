<div align="center">
  <img src="apps/web/src/assets/logo.svg" alt="vizard logo" width="120" />
  <p style="font-size: 30px; font-weight: bold;">vizard</p>
  <p>🪄 Open Source Markdown-based Data Visualization Tool</p>
  <p>
    <a href="https://opensource-brainband.github.io/vizard/"><img alt="Homepage" src="https://img.shields.io/badge/Homepage-vizard-blue?style=flat-square"></a>
    <a href="LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square"></a>
  </p>
</div>

---

## 📁 Project Structure

```
vizard/
├── apps/
│   ├── md-renderer/      # Markdown-based renderer app
│   └── web/              # Web frontend app
├── packages/
│   └── src/
│       ├── render/       # Chart/table rendering functions
│       ├── parseCSV.ts   # CSV parser
│       └── markdown.ts   # Markdown utilities
└── README.md
```

- **apps/md-renderer/**: Markdown preview and chart rendering app
- **apps/web/**: Web frontend app
- **packages/src/render/**: Rendering functions for bar chart, line chart, table, etc.
- **packages/src/parseCSV.ts**: CSV code block parsing function
- **docs/**: Sample markdown and data

---

## 📖 About

**vizard** is an open source tool that allows you to easily visualize charts and tables from CSV/DSL data within markdown documents.  
Just enter your data in a code block and it will be automatically rendered as bar charts, line charts, tables, and more.

---

## ✨ Features

- **Automatic CSV/DSL Chart Rendering**: Instantly visualize bar charts, line charts, and tables from code blocks in markdown
- **Live Preview**: See results as you edit markdown in real time
- **Easy Extensibility**: Easily add custom charts and styles
- **Quick Start**: Use right away with minimal setup

---

## 🚀 Getting Started

### 1. Installation

```bash
git clone https://github.com/opensource-Brainband/vizard.git
cd vizard
npm install
```

### 2. Run

```bash
npm run dev
```

Open your browser and go to http://localhost:5173

---

## 🛠️ Usage

Simply enter a CSV code block in the markdown editor and the chart will be rendered automatically.

<details>
<summary>CSV Chart Example</summary>
<pre>
```csv title="Sales Data" type="bar"
Date,Sales
2021-01-01,100
2021-01-02,150
2021-01-03,120
```
</pre>
</details>

---

## 🖼 Example

<img width="930" height="428" alt="Image" src="https://github.com/user-attachments/assets/7d73fe31-8728-4181-829e-1521c30d0fd0" />

---

## 🤝 Contributing

1. Fork this repository.
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Create a Pull Request.

---

## 🙌 Growing Vizard with the Community
Vizard aims to create an ecosystem where anyone can freely extend and contribute.
We look forward to your participation and feedback for a better data visualization experience!

---

## 📄 License

This project is licensed under the MIT License.

---

<div align="center">
  <sub>Made with ❤️ by <a href="https://github.com/opensource-Brainband/vizard">vizard