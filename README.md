<div align="center">
  <img src="apps/web/src/assets/logo.svg" alt="vizard logo" width="250" />
  <h1>vizard</h1>
  <p>🪄 Open Source Markdown-based Data Visualization Tool</p>
  <p>
    <a href="https://opensource-brainband.github.io/vizard/"><img alt="Homepage" src="https://img.shields.io/badge/Homepage-vizard-blue?style=flat-square"></a>
    <a href="LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square"></a>
  </p>
</div>

## 📖 About

**vizard** is an open source tool that allows you to easily visualize charts and tables from CSV/DSL data within markdown documents.  
Just enter your data in a code block and it will be automatically rendered as bar charts, line charts, tables, and more.

## ✨ Features

- **Automatic CSV/DSL Chart Rendering**
- **Live Preview**
- **Easy Extensibility**
- **Quick Start**

## 📁 Project Structure

```
vizard/
├── apps/
│   ├── md-renderer/           # Markdown preview & chart rendering app
│   │   ├── docs/              # Sample markdown and data
│   │   ├── public/
│   │   └── src/
│   │       ├── main.ts        # Entry point for md-renderer
│   │       ├── parseTest.ts
│   │       ├── style.css
│   │       ├── typescript.svg
│   │       └── ...
│   └── web/                   # Web frontend app
│       ├── docs/              # Sample markdown and data
│       └── src/
│           ├── main.ts        # Entry point for web app
│           ├── assets/        # Static assets (logo, etc.)
│           ├── types/         # Type definitions
│           ├── utils/         # Utility functions (modals, etc.)
│           └── views/         # HTML templates
├── packages/
│   └── src/
│       ├── render/
│       │   ├── renderBarChart.ts
│       │   ├── renderLineChart.ts
│       │   └── renderTable.ts
│       ├── parseCSV.ts        # CSV/DSL parser
│       ├── markdown.ts        # Markdown renderer utilities
│       └── index.ts
└── README.md
```

- **apps/md-renderer/**: Markdown preview and chart rendering app
- **apps/web/**: Web frontend app (with assets, utils, views, types, etc.)
- **packages/src/render/**: Rendering functions for bar chart, line chart, table, etc.
- **packages/src/parseCSV.ts**: CSV/DSL code block parsing function
- **packages/src/markdown.ts**: Markdown renderer and utilities
- **docs/**: Sample markdown and data (located under each app)

## 🚀 Getting Started

### 1. Installation

```bash
git clone https://github.com/opensource-Brainband/vizard.git
cd vizard
npm install
```

### 2. Run

#### For the web app:
```bash
cd apps/web
npm run dev
```

#### For the markdown renderer app:
```bash
cd apps/md-renderer
npm run dev
```

Open your browser and go to http://localhost:5173

## 📝 Chart Block Syntax

You can render charts and tables by writing a CSV code block in your markdown.  
The first line (info string) can include options like `title` and `type`.

**Syntax:**
<pre>
```csv title="Chart Title" type="bar"
Header1,Header2
value1,value2
...
```
</pre>

**Options:**
- `title` (optional): The chart or table title.
- `type` (required): The visualization type.  
  - `bar` : Bar chart  
  - `line` : Line chart  
  - `table` : Table

## 🛠️ Usage

Simply enter a CSV code block in the markdown editor and the chart will be rendered automatically.

**CSV Chart Example:**
<pre>
```csv title="Sales Data" type="bar"
# Only rendered as a chart in vizard, not on GitHub
Date,Sales
2021-01-01,100
2021-01-02,150
2021-01-03,120
```
</pre>

## 🖼 Example

<img width="930" height="428" alt="Image" src="https://github.com/user-attachments/assets/7d73fe31-8728-4181-829e-1521c30d0fd0" />

## 🤝 Contributing

1. Fork this repository.
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Create a Pull Request.

<div align="center">
  <sub>Made with ❤️ by <a href="https://github.com/opensource-Brainband/vizard">vizard contributors</a></sub>
</div>