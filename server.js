const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

const FEED_URL = 'https://www.weho.org/Home/Components/RssFeeds/RssFeed/View?ctID=6&cateIDs=3%2c6%2c7%2c12%2c17%2c18%2c19%2c20%2c21%2c45%2c46';

app.get('/rss', async (req, res) => {
  try {
    const response = await fetch(FEED_URL); // Uses native fetch
    const data = await response.text();
    res.set('Content-Type', 'application/rss+xml');
    res.send(data);
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    res.status(500).send('Error fetching RSS feed');
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});