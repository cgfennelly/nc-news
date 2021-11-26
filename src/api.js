import axios from 'axios';

const ncNewsApi = axios.create({
    baseURL: 'https://server-example-cgf.herokuapp.com/api',
});

export const getTopics = () => {
    return ncNewsApi.get('/topics').then((res) => {
        return res.data.topics;
    });
};

export const getArticles = (topic) => {
    return ncNewsApi.get('/articles', {params: {topic: topic}})
    .then((res) => {
        return res.data.articles;
    });
};

export const getSingleArticleById = (article_id) => {
    return ncNewsApi.get(`/articles/${article_id}`)
    .then((res) => {
        return res.data.article[0];
    })
}

export const getSingleArticleComments = (article_id) => {
    return ncNewsApi.get(`/articles/${article_id}/comments`)
    .then((res) => {
        return res.data.comments;
    })
}

export const addVoteArticle = (article_id) => {
    return ncNewsApi.patch(`/articles/${article_id}`, {inc_votes: 1})
    .then((res) => {
        return res.data.article[0];
    })
}

export const postCommentArticle = (article_id, username, body) => {
    return ncNewsApi.post(`/articles/${article_id}/comments`, {username: username, body: body})
    .then((res) => {
        return res.data.comment;
    })
}

export const deleteComment = (comment_id) => {
    return ncNewsApi.delete(`/comments/${comment_id}`)
    .then((res) => {
        return res;
    })
}