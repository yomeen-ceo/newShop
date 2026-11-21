# 十九甲雞排 — Quasar 1 / Vue 2 / Node 12 期中展示 SRC

適用於既有 Quasar v1.22.10 + @quasar/app v1.9.6 + Vue 2 + Node.js 12.22.12 專案。

## 安裝
1. 先備份原本的 `src` 資料夾。
2. 解壓縮本 ZIP，將裡面的 `src` 資料夾內容複製到 `D:\19JIA\newShop\src`（建議移走原 src 後整個替換，避免新舊程式混用）。
3. 不需新增 npm 套件，也不需更改 Node 版本。
4. 執行 `npm run dev`。如原專案 `dev` 指令含 `-m ssr`，建議改用 `npx quasar dev` 啟動 SPA；若仍使用 SSR，模擬狀態在伺服器端共享，不適合多人使用。

所有畫面採 Vue 2 Options API，使用 Vue.observable 共用模擬資料，無 Pinia、無 Node 後端、無 MongoDB。

注意：若既有專案 quasar.conf.js 有特殊 boot / plugins / SSR 設定，請保留原檔並先檢查相容性。此交付僅包含 src。
