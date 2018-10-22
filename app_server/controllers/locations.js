/* GET 'Home' page */
const homelist = function(req, res){
res.render('index', { title: 'Allure' });
};
/* GET 'Feed' page*/ 
const feed = function(req, res){
res.render('feed', { title: 'The Feed' });
};

/* GET 'Dive In' page */
const diveIn = function(req, res){
res.render('index', { title: 'Dive In' });
};

module.exports = {
homelist,
feed,
diveIn
};
