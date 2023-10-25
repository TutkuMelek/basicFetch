import getUser from "@/app/api/getUser";
import getUserPosts from "../../api/getUserPosts";
import { Suspense } from "react";
import UserPosts from "@/components/UserPosts";
export default async function UserPage({ params: { id } }) {
  const userData = getUser(id);
  const userPosts = getUserPosts(id);
  const user = await userData;
  return (
    <div>
      <h1 className="text-5xl font-bold">User Information</h1>
      <p className="text-3xl mt-10">{user.name}</p>
      <Suspense fallback={<p className="text-center text-5xl">Loading...</p>}>
        <UserPosts promise={userPosts} />
      </Suspense>
    </div>
  );
}
