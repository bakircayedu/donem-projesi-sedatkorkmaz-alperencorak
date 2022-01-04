const User = require("../../models/User");
const Article = require("../../models/Article");
const Comment = require("../../models/Comment");
const asyncErrorHandler = require("express-async-handler");
const CustomError = require("../../helpers/error/CustomError");

const checkUserExist = asyncErrorHandler(async (req, res, next) => {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if(!user) {
        return next(new CustomError("There is no such user with that id",400));
    }
    next();

});

const checkArticleExist = asyncErrorHandler(async (req, res, next) => {
    let article;
    if (req.params.slug) {
         article = await Article.findOne({slug : req.params.slug});
    }else{
        const articleId = req.params.id;
        article = await Article.findById(articleId);
    }
    if(!article) {
        return next(new CustomError("There is no such article with that slug",400));
    }
    req.articleId = article._id;
    next();

});
const checkCommentExist = asyncErrorHandler(async (req, res, next) => {
    const article_id = req.params.id;
    const comment_id =  req.params.comment_id;

    const comment = await Comment.findOne({
        _id : comment_id,
        article: article_id
    });

    if(!comment) {
        return next(new CustomError("There is no comment that id associated with article id",400));
    }
    next();

});


module.exports = {
    checkUserExist,
    checkArticleExist,
    checkCommentExist
};