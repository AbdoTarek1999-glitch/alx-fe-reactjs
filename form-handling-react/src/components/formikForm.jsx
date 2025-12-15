import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // مكتبة التحقق من الصحة مع Formik

// تعريف مخطط التحقق من الصحة باستخدام Yup
const validationSchema = Yup.object({
    username: Yup.string().required('اسم المستخدم مطلوب'),
    email: Yup.string().email('صيغة بريد إلكتروني غير صحيحة').required('البريد الإلكتروني مطلوب'),
    password: Yup.string().min(6, 'يجب أن تكون 6 أحرف على الأقل').required('كلمة المرور مطلوبة'),
});

const FormikForm = () => {
    const initialValues = { username: '', email: '', password: '' };

    const handleSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            console.log("بيانات الإرسال (Formik):", values);
            setSubmitting(false);
            // يمكنك هنا إعادة تعيين النموذج عبر actions.resetForm()
        }, 400);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <h2>تسجيل باستخدام Formik</h2>
                    
                    <Field type="text" name="username" placeholder="اسم المستخدم" />
                    <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
                    
                    {/* حقول أخرى للإيميل وكلمة المرور... */}
                    
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'جاري الإرسال...' : 'تسجيل'}
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default FormikForm;