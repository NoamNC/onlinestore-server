const multer = require('multer');
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'public/products');
	},
	filename: (req, file, cb) => {
		const fileArr = file.originalname.split('.');
		cb(null, Date.now() + '.' + fileArr[fileArr.length - 1]);
	}
});
module.exports = multer({storage});