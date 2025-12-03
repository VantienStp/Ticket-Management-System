# Ticket Management System

Hệ thống được xây dựng nhằm quản lý toàn bộ quy trình xử lý “ticket” trong nội bộ: tạo yêu cầu, phân công, theo dõi tiến độ và đóng yêu cầu.  
Dự án tách riêng Backend và Frontend để dễ phát triển, dễ bảo trì và dễ triển khai.

---

## 1. Giới thiệu

Ticket Management System là ứng dụng Full-Stack với các mục tiêu:

- Cho phép người dùng tạo ticket kèm mô tả, ảnh và mức độ ưu tiên.  
- Quản trị viên có thể xem, lọc, phân công và cập nhật trạng thái ticket.  
- Lưu lại lịch sử thay đổi để theo dõi toàn bộ vòng đời của ticket.  
- Sử dụng xác thực bằng JWT (Access Token + Refresh Token).  
- Kiến trúc tách biệt giữa Backend và Frontend, phù hợp triển khai thực tế.

---

## 2. Tính năng chính

### Người dùng (User)
- Tạo ticket mới.  
- Xem danh sách ticket của riêng mình.  
- Theo dõi tiến độ và lịch sử cập nhật.  

### Quản trị (Admin)
- Xem toàn bộ ticket.  
- Lọc theo trạng thái, ưu tiên, người tạo.  
- Phân công ticket cho nhân sự.  
- Cập nhật trạng thái: Pending → In Progress → Done.  
- Quản lý tài khoản người dùng.

---

## 3. Công nghệ sử dụng

### Backend
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JWT Authentication  
- BcryptJS  
- Multer (upload file nếu cần)

### Frontend
- React / Next.js  
- TailwindCSS  
- Fetch API hoặc Axios  
- Zustand / Context API

### Công cụ phát triển
- VS Code  
- Git & GitHub  
- Postman để test API  

---

## 4. Cấu trúc thư mục

### Backend (`tms_backend/`)

tms_backend/
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
├── uploads/
├── server.js
└── README.md

### end (`tms_frontend/`)
tms_frontend/
├── src/
│   ├── app/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   └── styles/
├── public/
└── package.json


## 5. Cách chạy dự án

### Backend

1. Cài đặt package:

cd tms_backend
npm install

2. Tạo file .env:

PORT=5000
MONGO_URI=<your_mongo_uri>
JWT_SECRET=<your_secret>
REFRESH_SECRET=<your_secret>

3. Chạy server:


5. Cách chạy dự án
Backend

Cài đặt package:

cd tms_backend
npm install


Tạo file .env:

PORT=5000
MONGO_URI=<your_mongo_uri>
JWT_SECRET=<your_secret>
REFRESH_SECRET=<your_secret>


Chạy server:

npm start

Frontend

Cài đặt package:

cd tms_frontend
npm install


Tạo file .env.local:

NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api


Chạy dự án:

npm run dev

6. API Endpoints
Authentication
METHOD	ENDPOINT	MÔ TẢ
POST	/api/auth/register	Đăng ký tài khoản
POST	/api/auth/login	Đăng nhập
POST	/api/auth/refresh-token	Làm mới token
Ticket
METHOD	ENDPOINT	MÔ TẢ
GET	/api/tickets	Lấy toàn bộ ticket (admin)
GET	/api/tickets/my	Lấy ticket của user đang đăng nhập
POST	/api/tickets	Tạo ticket mới
PUT	/api/tickets/:id	Cập nhật ticket
DELETE	/api/tickets/:id	Xóa ticket
7. Roadmap

 Thêm realtime bằng Socket.io

 Thêm phân quyền nâng cao (Role: Manager)

 Hỗ trợ upload nhiều files

 Dashboard analytics cho admin

 Thêm Activity Log chi tiết

 Deploy: BE lên Render, FE lên Vercel

8. ERD – Mô tả mô hình dữ liệu (cơ bản)
User
├── name: String
├── email: String
├── password: String
└── role: "user" | "admin"

Ticket
├── title: String
├── description: String
├── priority: "low" | "medium" | "high"
├── status: "pending" | "in_progress" | "done"
├── createdBy: ObjectId(User)
├── assignedTo: ObjectId(User)
└── history: [ { action, date, user } ]

9. Tác giả

Tiến – Fullstack Developer (Fresher).
Dự án phát triển với mục tiêu rèn luyện kỹ năng thực tế và xây dựng hệ thống quản lý hoàn chỉnh.

10. Giấy phép (License)

MIT License – Tự do sử dụng, chỉnh sửa và triển khai.

11. Ghi chú

README sẽ được cập nhật khi dự án mở rộng.

Mọi ý tưởng cải tiến đều được hoan nghênh.
