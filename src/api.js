import axios from 'axios';

const ncNewsApi = axios.create({
    baseURL: 'https://server-example-cgf.herokuapp.com/api',
});

export const getTopics = () => {
    return ncNewsApi.get('/topics').then((res) => {
        return res.data.topics;
    });
};

export const getArticles = () => {
    return ncNewsApi.get('/articles')
    .then((res) => {
        return res.data.articles;
    });
};

export const getQueryArticles = (slug) => {
    return slug === "All topics" ? getArticles : ncNewsApi.get(`/articles?topic=${slug}`)
    .then((res) => {
        return res.data.articles;
    })
}
