import AdminForm from "../src/components/pages/admin/adminForm";
import { AuthProvider } from "../src/components/context/AuthContext";

export default function admin() {
  return (
    <AuthProvider>
      <AdminForm />
    </AuthProvider>
  );
}
