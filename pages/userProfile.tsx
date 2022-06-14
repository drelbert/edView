import Head from "next/head";
import ProfileForm from "../components/profileForm";
import Accordion from "../components/profilePanel";

export default function UserProfile() {
  return (
    <>
      <Head>
        <title>Profile and State</title>
      </Head>
      <div className="pr-4 ">
        <ProfileForm />
      </div>
      <div>
        <Accordion />
      </div>
    </>
  );
}
