import { useParams, useSearchParams } from "react-router-dom";

const ResetPassword = () => {
  const { token } = useParams();
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  console.log(token, email);
  return <div>ResetPassword</div>;
};

export default ResetPassword;
