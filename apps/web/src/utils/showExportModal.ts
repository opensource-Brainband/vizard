// src/utils/showExportModal.ts
// Show Export Modal utility for Vizard Editor

export function showExportModal(onSelect: (type: 'md' | 'html' | 'json') => void) {
	if (document.getElementById('vizard-export-modal')) return;
	const modal = document.createElement('div');
	modal.id = 'vizard-export-modal';
	modal.style.position = 'fixed';
	modal.style.top = '0';
	modal.style.left = '0';
	modal.style.width = '100vw';
	modal.style.height = '100vh';
	modal.style.background = 'rgba(0,0,0,0.25)';
	modal.style.zIndex = '9999';
	modal.style.display = 'flex';
	modal.style.alignItems = 'center';
	modal.style.justifyContent = 'center';
	modal.innerHTML = `\n    <div style=\"background: #fff; border-radius: 12px; max-width: 340px; width: 90vw; padding: 32px 24px 24px 24px; box-shadow: 0 8px 32px rgba(0,0,0,0.18); position: relative; text-align:center;\">\n      <div style=\"font-size: 20px; font-weight: 700; margin-bottom: 18px; color: #232336;\">Export as...</div>\n      <button id=\"export-md\" style=\"margin: 8px 0; width: 100%; padding: 10px; font-size: 16px; border-radius: 6px; border: 1px solid #ddd; background: #f4f4f4; cursor: pointer;\">Markdown (.md)</button><br>\n      <button id=\"export-html\" style=\"margin: 8px 0; width: 100%; padding: 10px; font-size: 16px; border-radius: 6px; border: 1px solid #ddd; background: #f4f4f4; cursor: pointer;\">HTML (.html)</button><br>\n      <button id=\"export-json\" style=\"margin: 8px 0; width: 100%; padding: 10px; font-size: 16px; border-radius: 6px; border: 1px solid #ddd; background: #f4f4f4; cursor: pointer;\">JSON (.json)</button>\n      <button id=\"export-cancel\" style=\"margin-top: 18px; width: 100%; padding: 10px; font-size: 15px; border-radius: 6px; border: none; background: #eee; cursor: pointer;\">Cancel</button>\n    </div>\n  `;
	document.body.appendChild(modal);
	(document.getElementById('export-md') as HTMLButtonElement)?.addEventListener('click', () => { close(); onSelect('md'); });
	(document.getElementById('export-html') as HTMLButtonElement)?.addEventListener('click', () => { close(); onSelect('html'); });
	(document.getElementById('export-json') as HTMLButtonElement)?.addEventListener('click', () => { close(); onSelect('json'); });
	(document.getElementById('export-cancel') as HTMLButtonElement)?.addEventListener('click', close);
	modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
	function close() { modal.remove(); }
}
