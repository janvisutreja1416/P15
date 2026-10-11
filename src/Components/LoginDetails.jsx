
function LoginDetails({ user, onBack }) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-rose-50 to-violet-100 p-5">

      {/* Decorative background circles */}
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-orange-200/50 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-purple-300/40 blur-3xl" />

      <div className="relative w-full max-w-lg overflow-hidden rounded-[32px] border border-white/80 bg-white/85 shadow-2xl backdrop-blur-xl">

        {/* Header */}
        <div className="bg-gradient-to-r from-[#f7c9b9] via-[#f2d8dc] to-[#dcd3f7] px-7 py-9 text-center sm:px-10">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-white/70 bg-white/60 text-4xl shadow-sm">
            🌷
          </div>

          <p className="mt-5 text-xs font-bold uppercase tracking-[0.25em] text-[#75536d]">
            LOGIN COMPLETE
          </p>

          <h1 className="mt-3 text-3xl font-black text-[#46344f]">
            You're All Set!
          </h1>

          <p className="mt-2 text-sm text-[#66516d]">
            Your submitted information is shown below.
          </p>
        </div>

        {/* Submitted details */}
        <div className="p-7 sm:p-10">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f8e9f0] text-2xl">
              ✨
            </div>

            <div>
              <h2 className="text-lg font-extrabold text-gray-800">
                Account Details
              </h2>
              <p className="text-sm text-gray-500">
                Information you entered
              </p>
            </div>
          </div>

          <div className="space-y-4">

            {/* Username */}
            <div className="rounded-2xl border border-rose-100 bg-rose-50/70 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-[#a34d78]">
                👤 Username
              </p>

              <p className="mt-2 break-words text-lg font-bold text-gray-800">
                {user.username}
              </p>
            </div>

            {/* Password */}
            <div className="rounded-2xl border border-purple-100 bg-purple-50/70 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-[#8970b8]">
                🔑 Password
              </p>

              <p className="mt-2 break-words text-lg font-bold text-gray-800">
                {user.password}
              </p>
            </div>

          </div>

          {/* Status */}
          <div className="mt-5 flex items-center gap-3 rounded-2xl border border-green-100 bg-green-50 p-4">
            <span className="text-2xl">✅</span>
            <div>
              <p className="font-bold text-green-800">
                Form Submitted Successfully
              </p>
              <p className="mt-1 text-xs text-green-700">
                Your form submission is complete.
              </p>
            </div>
          </div>

          {/* Back button */}
          <button
            onClick={onBack}
            className="mt-7 w-full rounded-2xl bg-gradient-to-r from-[#e58cae] via-[#c58bc9] to-[#9989dc] py-4 font-bold text-white shadow-lg shadow-purple-200/60 transition duration-300 hover:-translate-y-1 hover:shadow-xl active:translate-y-0"
          >
            ← Back to Login
          </button>

          <p className="mt-6 text-center text-xs text-gray-400">
            Made with care ♡
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginDetails;
