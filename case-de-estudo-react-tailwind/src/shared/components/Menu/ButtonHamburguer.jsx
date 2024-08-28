import { ContainerButtonHamburguer } from "./style";

const ButtonHamburguer = () => {
  return (
    <ContainerButtonHamburguer>
      <div className="relative">
        <div className="bg-white h-[3px] w-[30px] relative">
          <div className="absolute left-0 top-[-10px] bg-white h-[3px] w-[30px]" />
          <div className="absolute left-0 top-[10px] bg-white h-[3px] w-[30px]" />
        </div>
      </div>
    </ContainerButtonHamburguer>
  );
};

export default ButtonHamburguer;
