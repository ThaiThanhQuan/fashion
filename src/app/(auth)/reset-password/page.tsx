import { Suspense } from "react";
import ResetPasswordForm from "./components/ResetPasswordForm/ResetPasswordForm";

function ResetPassword() {
    return ( 
        <div>
            <Suspense fallback={null}>
                <ResetPasswordForm />
            </Suspense>
        </div>
     );
}

export default ResetPassword;
