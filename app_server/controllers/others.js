/* GET Register page */
const registerUser = function(req, res){
  res.render('index', { title: 'Register User' });
};

module.exports = {
  registerUser
};


