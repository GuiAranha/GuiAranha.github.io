export default function About() {
  return (
    <>
      <div class="flex flex-col lg:flex-row w-auto h-auto bg-neutral-900 justify-center items-center">
        <div className="flex-shrink-0 sm:w-[400px] sm:h-[400px]">
          <img className="rounded-2xl scale-75 sm:scale-100" src="./assets/images/foto.jpg" alt="" />
        </div>
        <div className="w-screen sm:w-[440px] pl-20 sm:p-10">
          <p className="text-left text-white">Ola, me chamo</p>
          <h1 className="text-left text-white">Guilherme Aranha</h1>
          <h3 className="text-left text-white">e sou um desenvolvedor</h3>
          <p className="text-left w-4/5 sm:w-[420px] text-justify text-white">
            Amo fazer aplicacoes web, formado Front-End pela Trybe, 
            atualmente cursando Back-End pela trybe e também 
            Engenharia da Computação pela Universidade FHO
          </p>
        </div>
      </div>
    </>
  )
}
