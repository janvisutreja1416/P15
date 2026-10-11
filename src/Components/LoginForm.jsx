
import { useRef } from "react";

function LoginForm({ onLogin }) {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    onLogin({
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-rose-50 to-violet-100 p-5">

      {/* Decorative background circles */}
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-orange-200/50 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-purple-300/40 blur-3xl" />

      <div className="relative grid w-full max-w-5xl overflow-hidden rounded-[32px] border border-white/80 bg-white/80 shadow-2xl backdrop-blur-xl md:grid-cols-2">

        {/* Illustration / welcome section */}
        <div className="flex flex-col justify-between bg-gradient-to-br from-[#f7c9b9] via-[#f2d8dc] to-[#dcd3f7] p-8 sm:p-12">

          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/70 text-3xl shadow-sm">
              ✨
            </div>

            <p className="mt-10 text-sm font-bold uppercase tracking-[0.25em] text-[#75536d]">
              YOUR NEXT CHAPTER
            </p>

            <h1 className="mt-5 text-4xl font-black leading-tight text-[#46344f] sm:text-5xl">
              Make today
              <br />
              amazing.
            </h1>

            <p className="mt-5 max-w-sm leading-7 text-[#66516d]">
              Every big achievement starts with one small step.
              Sign in and keep moving forward.
            </p>
          </div>

          <div className="mt-12 rounded-3xl border border-white/60 bg-white/40 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl">
                💗
              </div>

              <div>
                <p className="font-bold text-[#46344f]">
                  Little step, big dreams 
                </p>
                <p className="mt-1 text-sm text-[#755f79]">
                  Your journey matters.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Login form section */}
        <div className="flex items-center justify-center bg-white/90 p-7 sm:p-12">
          <div className="w-full max-w-sm">

            <div className="mb-8">
              <span className="rounded-full bg-[#f8e9f0] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#a34d78]">
                Welcome Back
              </span>

              <h2 className="mt-6 text-3xl font-extrabold text-gray-800">
                Sign in
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Enter your details to access your account.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Username
                </label>

                <div className="flex items-center rounded-2xl border border-rose-100 bg-rose-50/50 transition focus-within:border-rose-300 focus-within:ring-4 focus-within:ring-rose-100">
                  <span className="pl-4 text-xl">👤</span>

                  <input
                    ref={usernameRef}
                    type="text"
                    placeholder="Enter username"
                    required
                    className="w-full rounded-2xl bg-transparent px-4 py-4 text-gray-800 outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Password
                </label>

                <div className="flex items-center rounded-2xl border border-purple-100 bg-purple-50/50 transition focus-within:border-purple-300 focus-within:ring-4 focus-within:ring-purple-100">
                  <span className="pl-4 text-xl">🔑</span>

                  <input
                    ref={passwordRef}
                    type="password"
                    placeholder="Enter password"
                    required
                    className="w-full rounded-2xl bg-transparent px-4 py-4 text-gray-800 outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-[#e58cae] via-[#c58bc9] to-[#9989dc] py-4 font-bold text-white shadow-lg shadow-purple-200/60 transition duration-300 hover:-translate-y-1 hover:shadow-xl active:translate-y-0"
              >
                Login to Your Account →
              </button>
            </form>

            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-400">
              <span>♡</span>
              <span>A fresh start begins with you</span>
              <span>♡</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
