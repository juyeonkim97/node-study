/*
 * GET home page.
 */

exports.index = (req, res) =>{
    res.render('index', {
        title: '간단한 ToDo 리스트 예제 실습'
    });
};