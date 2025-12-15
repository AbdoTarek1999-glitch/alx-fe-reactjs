import {
  createBrowserRouter,
  Navigate,
  Outlet,
  useLocation
} from "react-router-dom";
import App from "./App";
import Profile from "./Profile";
import Login from "./Login";

// تحقق من المصادقة
const isAuthenticated = () => {
  return localStorage.getItem("authToken") === "true";
};

// مكون حماية
const AuthWrapper = () => {
  const location = useLocation();

  if (!isAuthenticated()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <h2>الصفحة الرئيسية (عام)</h2> },
      { path: "login", element: <Login /> },

      { path: "post/:postId", element: <h3>منشور ديناميكي</h3> },

      {
        element: <AuthWrapper />,
        children: [
          {
            path: "profile",
            element: <Profile />,
            children: [
              { index: true, element: <h3>اختر قسمًا</h3> },
              { path: "details", element: <h3>تفاصيل الملف</h3> },
              { path: "settings", element: <h3>إعدادات الحساب</h3> }
            ]
          }
        ]
      },

      { path: "*", element: <h2>404 - الصفحة غير موجودة</h2> }
    ]
  }
]);

export default router;
