import { Link } from "react-router-dom";

const Login = () => {
    return (
      <section class="flex items-center justify-center h-screen w-full bg-[#003c44] shadow-[1px_3px_6px_#00000034]">
        <form class="flex flex-col gap-4 bg-white rounded-md p-4 min-h-[25em] md:min-h-[18em] md:w-[300px]">
          <input type="email" class="bg-[#e0e0e0] border-none rounded-md p-2.5 outline-none" />
          <input type="password" class="bg-[#e0e0e0] border-none rounded-md p-2.5 outline-none" />
          <button class="bg-[#00b398] border-none rounded-md shadow-[1px_3px_6px_#00000034] text-white font-semibold text-base py-2.5 px-20">
            Submit
          </button>
          <div class="flex flex-col gap-2 text-center">
            <Link to="/" class="text-[#333] text-base font-normal">Esqueceu a senha? Clique aqui</Link>
            <Link to="/register" class="text-[#333] text-base font-medium underline underline-offset-2 decoration-[#202020] decoration-2 last:text-[0.96em]">Já possuí uma conta? Crie uma agora mesmo e aproveite nosso conteúdo</Link>
          </div>
        </form>
      </section>
    );
  };
  
  export default Login;