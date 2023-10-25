import getUsers from "@/app/api/getUsers";
import Link from "next/link";
export default async function UsersPage() {
  const users = await getUsers();
  return (
    <div className="text-center mt-20">
      <h1 className=" text-5xl font-bold"> Users</h1>
      {users.map((user) => {
        return (    
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
          </>
        );
      })}
    </div>
  );
}
