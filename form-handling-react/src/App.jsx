// src/App.jsx

import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm'; // المكون الجديد

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>مهمة معالجة النماذج</h1>
      <RegistrationForm />
      <hr />
      <FormikForm />
    </div>
  );
}

export default App;