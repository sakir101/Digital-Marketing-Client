import Link from "next/link";

const Common = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-center my-4">
        <h1 className="text-lg font-thin text-black">
          Create Account for <span className="text-black font-bold">User</span>
        </h1>
        <Link href="/signupUser">
          <button
            className="btn btn-sm text-yellow-400 border-blue-700 mt-4"
            style={{
              background:
                "linear-gradient(to right, #051937, #001b4b, #001c5f, #001b71, #0c1682)",
            }}
          >
            Create Account
          </button>
        </Link>
      </div>
      <div className="text-center">
        <h1 className="text-lg font-thin text-black">
          Already Have an Account{" "}
          <Link href="/login" className="no-underline">
            {" "}
            <span className="font-bold text-black no-underline">Login</span>
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Common;
