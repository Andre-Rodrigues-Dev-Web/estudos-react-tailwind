const Login = () => {
    return (
      <section class="top bg-blue-500 flex items-center justify-center h-screen w-full">
        <form class="form_login bg-white rounded-lg flex justify-center flex-col gap-4 min-h-[25em] p-8 md:w-[25em]">
          <input
            type="email"
            class="bg-gray-800 border-none rounded-md py-2.5 px-4 outline-none md:w-[100%]"
          />
          <input
            type="password"
            class="bg-gray-800 border-none rounded-md py-2.5 px-4 outline-none md:w-[100%]"
          />
          <button class="bg-blue-500 border-none rounded-lg text-white inline-block text-lg font-semibold py-2 px-20">
            Logar
          </button>
        </form>
      </section>
    );
  };
  
  export default Login;