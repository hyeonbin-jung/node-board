/**
* 메인메뉴 middleware 
* 
*/
module.exports.mainMenu = function(req, res, next) {
	res.locals.mainMenu = [
		{name : '질문과 답변', url : '/board/list/qna'},
		{name : '자유게시판', url : '/board/list/freetalk'},		
	];
	
	next();
};

