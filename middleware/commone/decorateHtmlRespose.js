function decorateHtmlResponse (page_title){
    return function (req,res,next) {
        res.locals.html = true;
        res.locals.title = `${page_title} - ${process.env.CHAT_APPLICATION_NAME}`
        next()
    };
}


module.exports = decorateHtmlResponse;