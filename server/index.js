// filepath: /Users/tomasliubertas/dev/mini-reddit/server/index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/me', async (req, res) => {
    const accessToken = req.headers['authorization']?.split(' ')[1];
    if (!accessToken) return res.status(401).json({ error: 'No access token provided' });

    try {
        const redditRes = await fetch('https://oauth.reddit.com/r/javascript/hot', {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'User-Agent': 'mini-reddit-app/0.1 by analizat0r'
            }
        });
        const data = await redditRes.json();
        res.status(redditRes.status).json(data);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch from Reddit' });
    }
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));