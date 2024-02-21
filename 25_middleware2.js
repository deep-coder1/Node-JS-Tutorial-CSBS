module.exports =  reqFilter=(req,resp,next)=>{
    // console.log('reqFilter');
    if(!req.query.age)
    {
        resp.send("Please provide your age");
    }
    else if(req.query.age<18)
    {
        resp.send("You can not access this page, your age is less tahn 18");
    }
    else
    {
        next();
    }
    // next();
}