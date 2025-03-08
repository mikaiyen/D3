
---

# 資料視覺化課程 – 作業與期末專題總覽

課程聚焦於如何使用 **D3.js** 等網頁前端技術，將各種格式的資料轉換為互動式視覺化作品。課程涵蓋了從基礎的 D3.js 安裝與環境設置，到利用 D3.js 進行繪圖（長條圖、圓餅圖、折線圖、地圖等）、資料更新、互動操作，最後以一個完整的期末專案整合所學，並將成果部署於網頁上。

---

## 課程資訊

- **課程名稱**: 資料視覺化 Data visualization
- **授課單位**: 國立中央大學 通識教育中心
- **授課教師**: 鐘祥仁
- **學期**: 2022 學年度 第 2 學期


---

## 目錄
1. [D3.js 初探 (Intro to D3.js)](#d3js-初探-intro-to-d3js)  
2. [長條圖製作 (D3.js Bar Chart)](#長條圖製作-d3js-bar-chart)  
3. [資料更新與動畫顯示 (Data Update Show)](#資料更新與動畫顯示-data-update-show)  
4. [互動式長條圖 (Interactive With BarChart)](#4互動式長條圖-interactive-with-barchart)  
5. [midterm Project：期中專題](#midterm-project期中專題)  
6. [Final Project：期末專題](#final-project期末專題)  

---

## 1：D3.js 初探 (Intro to D3.js)

- **作業內容**  
  1. **開發環境安裝**：安裝 VS Code、Live Server、D3.js 等基本工具。  
  2. **使用 SVG 繪圖**：學習 `<svg>`、`<g>` 群組等基礎元素與座標系統。  
  3. **D3.js 基礎**：理解資料導向文件 (Data-Driven Document) 的概念，嘗試以 D3 選取 DOM 與插入文本、基本形狀 (circle、line、rect)。  

- **目的**  
  - 熟悉前端開發環境與 D3.js 的基本語法。  
  - 練習將資料 (如簡單的數字或清單) 綁定到網頁 SVG 元素中。

- **示範成果**  
  - https://mikaiyen.github.io/D3/w1/e2/

---

## 2：長條圖製作 (D3.js Bar Chart)

- **作業內容**  
  1. **資料前處理**：載入本地 / 遠端 CSV、JSON 檔案，並使用 d3.csv()、d3.json() 等進行初步清理 (parse、format)。  
  2. **Scale & Axis**：透過 `d3.scaleLinear()`、`d3.scaleBand()` 進行資料到座標的映射，並使用 `d3.axisTop()`、`d3.axisLeft()` 顯示座標軸。  
  3. **繪製長條圖**：將整理後的資料，以 `<rect>` 元素繪製一個簡易的 Bar Chart，同時添加文字標題、刻度格式化 (e.g. d3.format)。  

- **目的**  
  - 熟悉 D3 的資料驅動繪圖流程 (data → scale → axis → shape)。  
  - 瞭解如何利用 `domain`、`range` 來控制圖表的大小、寬度與高度。

- **示範成果**  
  - https://mikaiyen.github.io/D3/w2-extend/

---

## 3：資料更新與動畫顯示 (Data Update Show)

- **作業內容**  
  1. **Enter / Update / Exit Pattern**：以簡單的清單資料 (e.g. 喜愛水果名單) 練習 D3 的資料更新流程，分別對應 `enter()`、`update()`、`exit()`。  
  2. **動畫效果 (Transition)**：在資料新增 (enter) 或移除 (exit) 時，利用 `d3.transition()` 製作平滑的動態效果 (e.g. 移動、漸變)。  
  3. **延伸至 Bar Chart**：複製先前的長條圖專案，練習對不同指標 (e.g. 收益、預算、熱度) 做排序更新並使用動畫顯示切換。  

- **目的**  
  - 深入理解 D3 資料綁定生命週期 (Enter / Update / Exit)，並以程式碼動態增減或改變圖表元素。  
  - 強化視覺化作品的使用者體驗與吸引力。

- **示範成果**  
  - https://mikaiyen.github.io/D3/w3/

---

## 4：互動式長條圖 (Interactive With BarChart)

- **作業內容**  
  1. **事件監聽**：在 Bar 上監聽滑鼠事件 (`mouseover`, `mousemove`, `mouseout` 等)，進行互動效果。  
  2. **Tooltip**：製作滑鼠懸停 (hover) 時出現的提示框，顯示該筆資料的詳細資訊 (例如電影名稱、收益、IMDB 分數等)。  
  3. **視覺化設計**：包含 tooltip 的樣式、定位、文字排版，以及切換不同指標 (revenue / budget / popularity) 時的互動流程。  

- **目的**  
  - 習得如何以 D3 實現滑鼠交互 (使用 CSS + JavaScript 控制 tooltip 的顯示、位置、透明度)。  
  - 幫助讀者 / 使用者更直觀地瀏覽圖表資訊。

- **示範成果**  
  - https://mikaiyen.github.io/D3/w4/

---

## Midterm Project：期中專題

- **主題**  
  - 股票成交量長條圖  

- **專案內容**  
  1. **資料整理**：  
     - python爬蟲台積電歷年股票資訊  
  2. **D3.js 視覺化**：  
     - 實作長條圖  

- **示範成果**  
  - https://mikaiyen.github.io/D3/midterm/

---

## Final Project：期末專題

- **主題**  
  - 各國經濟資訊視覺化  

- **專案內容**  
  1. **資料整理**：  
     - 從 World Bank 下載多國資料 (如就業、GDP、人口、貧富指數、各類經濟指標等)。  
     - 透過 Python、Excel 或其他工具進行前處理、清洗 (handling missing values, filtering, grouping) 後輸出為 CSV / JSON。  
  2. **D3.js 視覺化**：  
     - 實作多種圖表如 Choropleth Map、Bar Chart、Line Chart、Stacked Bar、圓餅圖等，用於不同面向的數據展示 (例如世界地圖 + 國家經濟指標)。  
     - 加入互動機制：滑鼠懸停顯示詳細資訊、篩選或點擊事件切換資料類型等。  
  3. **整體網頁整合**：  
     - 結合各成員的部分，形成多頁 / 多圖表互動式儀表板 (Dashboard)。  

- **示範成果**  
  - 動態地圖顯示全球各國就業率 / GDP / 收入差異  
  - 長條圖或圓餅圖對比不同國家或區域之間的指標值  
  - 以點擊、滑鼠移動、下拉式選單等互動方式深入探究數據  
  - all: https://mikaiyen.github.io/D3/final_merged/
  - my part: https://mikaiyen.github.io/D3/final/
