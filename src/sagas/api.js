const urlGetFeed = 'https://www.zdnet.com/news/rss.xml';

function* getFeedFromApi() {
    const response = yield fetch(urlGetFeed, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: '',
    });
    const feed = yield response.status === 200 ? JSON.parse(response._bodyInit): []       
    return feed;
}
export const Api = {
    getFeedFromApi
};