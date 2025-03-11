import { useParams } from "react-router-dom";

function Profile() {
  const details = useParams();
  console.log(details);
  return <></>;
}

export default Profile;
