/**
* 메인메뉴 middleware 
* 
*/
module.exports.mainMenu = function(req, res, next) {
	res.locals.mainMenu = [
		{name : '질문과 답변', url : '/board/list/qna'},
		{name : '자유게시판', url : '/board/list/freetalk'},
		{name : '회원가입', url : '/member/join'},
		{name : '로그인', url : '/member/login'},
		{name : '로그아웃', url : '/member/logout'},
		
	];
	
	next();
};

