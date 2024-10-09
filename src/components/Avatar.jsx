export default function Avatar({ user }) {
  return (
    <span className="rounded-full h-10 w-10 inline-flex place-content-center place-items-center bg-blue-950 text-white font-bold text-xl border-2 border-white">
      {user.username[0]}
    </span>
  );
}
