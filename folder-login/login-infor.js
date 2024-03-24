const mysql = require('mysql');

// Tạo kết nối đến cơ sở dữ liệu
const connection = mysql.createConnection({
  host: 'localhost', // Địa chỉ máy chủ MySQL
  user: 'username', // Tên người dùng MySQL
  password: 'password', // Mật khẩu MySQL
  database: 'mydb' // Tên cơ sở dữ liệu
});

// Kết nối đến cơ sở dữ liệu
connection.connect((err) => {
  if (err) {
    console.error('Lỗi kết nối: ' + err.stack);
    return;
  }
  console.log('Kết nối thành công với ID ' + connection.threadId);
});

// Thực hiện truy vấn
const sqlQuery = 'SELECT * FROM mytable';
connection.query(sqlQuery, (error, results, fields) => {
  if (error) {
    console.error('Lỗi truy vấn: ' + error);
  } else {
    console.log('Kết quả truy vấn:', results);
  }
});

// Đóng kết nối sau khi hoàn thành
connection.end((err) => {
  if (err) {
    console.error('Lỗi khi đóng kết nối: ' + err);
  } else {
    console.log('Kết nối đã được đóng.');
  }
});
