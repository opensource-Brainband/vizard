export const getMarkdownAppHtml = (markdownText: string) => `
  <div id="vizard-root" style="width: 100vw; min-height: 100vh; background: white; overflow: hidden; position: relative;">
    <!-- Sidebar -->
    <div id="sidebar" style="position: fixed; top: 0; left: 0; width: 260px; height: 100vh; background: #232336; color: #fff; z-index: 200; display: flex; flex-direction: column; align-items: flex-start; padding-top: 32px; padding-left: 24px; box-shadow: 2px 0 16px rgba(0,0,0,0.08); transform: translateX(-100%); transition: transform 0.3s cubic-bezier(.4,0,.2,1);">
  <div style="font-size: 28px; font-weight: 700; margin-bottom: 32px; letter-spacing: 2px;">MENU</div>
  <span id="how-to-use-text" style="color: #fff; cursor: pointer; font-size: 18px; margin-bottom: 18px; font-weight: 600;">How to use</span>
      <span id="csv-upload-text" style="color: #fff; cursor: pointer; font-size: 18px; margin-bottom: 18px;">Upload csv file</span>
      <input type="file" id="csv-upload-input" accept=".csv" style="display:none;" />
      <span id="md-upload-text" style="color: #fff; cursor: pointer; font-size: 18px; margin-bottom: 18px;">Upload markdown file</span>
      <input type="file" id="md-upload-input" accept=".md,.markdown,text/markdown" style="display:none;" />
  <span id="clear-data-text" style="color: #fff; cursor: pointer; font-size: 18px; margin-bottom: 18px;">Clear data</span>
  <span id="export-data-text" style="color: #fff; cursor: pointer; font-size: 18px; margin-bottom: 18px;">Export</span>
  <span id="sidebar-close" style="color: #fff; cursor: pointer; font-size: 18px; margin-top: 36px;">Close menu</span>
    </div>
    <!-- Topbar -->
    <div style="align-self: stretch; height: 80px; padding: 20px; background: #21203C; overflow: hidden; justify-content: flex-start; align-items: center; display: flex; position: relative; z-index: 101;">
      <span id="menu-icon" style="font-size: 32px; color: #fff; cursor: pointer; user-select: none; margin-right: 24px;">&#9776;</span>
      <div style="color: white; font-size: 32px; font-family: Pretendard, sans-serif; word-wrap: break-word">
        <span style="font-weight: 500;">Vizard</span> <span style="font-weight: 300;">Editor</span>
      </div>
    </div>
    <!-- Main Content -->
    <div id="main-content" style="flex: 1 1 0; width: 100%; max-width: 1440px; margin: 0 auto; display: flex; align-items: stretch; justify-content: center; background: white; transition: transform 0.3s cubic-bezier(.4,0,.2,1);">
      <!-- Editor Area -->
      <div style="flex: 1 1 0; min-width: 0; background: #3D3D3D; display: flex; flex-direction: column; align-items: center;">
        <div style="align-self: stretch; height: 60px; padding-left: 20px; padding-right: 20px; background: white; display: flex; align-items: center; flex-direction: row; justify-content: space-between;">
          <div style="display: flex; flex-direction: column; flex: 1;">
            <div style="color: black; font-size: 20px; font-family: Pretendard Variable; font-weight: 500; align-self: flex-start;">Raw Markdown</div>
            <div style="width: 100%; height: 2px; background: #21203C; margin-top: 8px;"></div>
          </div>
        </div>
        <div style="flex: 1 1 0; align-self: stretch; padding: 30px; background: #fff; display: flex; flex-direction: column; align-items: center;">
          <textarea id="md-editor" style="width: 100%; height: 100%; min-height: 500px; resize: none; font-size: 16px; font-family: 'Pretendard Variable', Pretendard, monospace; padding: 12px; border-radius: 8px; border: none; outline: none; box-sizing: border-box;">${markdownText}</textarea>
        </div>
      </div>
      <!-- Preview Area -->
      <div style="flex: 1 1 0; min-width: 0; background: #3D3D3D; display: flex; flex-direction: column; align-items: center; border-left: 1px #3D3D3D solid;">
        <div style="align-self: stretch; height: 60px; padding-left: 20px; padding-right: 20px; background: white; display: flex; align-items: center; flex-direction: column; justify-content: center;">
          <div style="color: black; font-size: 20px; font-family: Pretendard Variable; font-weight: 500; align-self: flex-start;">Preview with Vizard</div>
          <div style="width: 100%; height: 2px; background: #21203C; margin-top: 8px;"></div>
        </div>
        <div id="app-preview" style="flex: 1 1 0; align-self: stretch; padding: 30px; background: white; display: flex; flex-direction: column; align-items: flex-start; overflow: auto;"></div>
      </div>
    </div>
  </div>
`;
