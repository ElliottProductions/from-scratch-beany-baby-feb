import { getCryptid } from '../fetch-utils.js';
import { renderCryptidDetails } from '../render-utils.js';

const cryptidDetailContainer = document.getElementById('cryptid-detail-container');

// on load

window.addEventListener('load', async () => {
    const data = new URLSearchParams(window.location.search);
    
    const cryptidId = data.get('id');

    const specCryptid = await getCryptid(cryptidId);

    const cryptidEl = renderCryptidDetails(specCryptid);

    cryptidDetailContainer.append(cryptidEl);
});