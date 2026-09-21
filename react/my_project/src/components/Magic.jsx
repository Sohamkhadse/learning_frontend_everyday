function Cube() {
  return (
    <div className="flex justify-center items-center ">

      <div className="[perspective:800px]">

        <div className="relative size-40 transform-3d rotate-x-[-20deg] rotate-y-[-30deg]">

          <div className="absolute size-40 translate-z-20 bg-sky-300/75 flex items-center justify-center text-4xl">
            1
          </div>

          <div className="absolute size-40 -translate-z-20 rotate-y-180 bg-sky-400/75 flex items-center justify-center text-4xl">
            2
          </div>

          <div className="absolute size-40 translate-x-20 rotate-y-90 bg-sky-500/75 flex items-center justify-center text-4xl">
            3
          </div>

          <div className="absolute size-40 -translate-x-20 -rotate-y-90 bg-sky-600/75 flex items-center justify-center text-4xl">
            4
          </div>

          <div className="absolute size-40 -translate-y-20 rotate-x-90 bg-sky-700/75 flex items-center justify-center text-4xl">
            5
          </div>

          <div className="absolute size-40 translate-y-20 -rotate-x-90 bg-sky-800/75 flex items-center justify-center text-4xl">
            6
          </div>
          <br />
          <br />
          <br />
          <br />
          <br /><br /><br /><br /><br /><br /><br /><h1>SOHAM</h1><br />

              <div className="bg-gray-200 p-10 top-10">

      <div className="m-10 border-8 border-blue-500 p-8 bg-sky-300">
        <div className="bg-white p-5 text-center">
          <h1>KHADSE</h1>
        </div>
      </div>

    </div>

        </div>

      </div>

    </div>

    
  );
}

export default Cube;