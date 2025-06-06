const Button = ({ buttonText }) => {
  return (
    <>
      <div class="bg-blue-200 min-h-screen flex items-center">
        <div class="w-full">
          <h2 class="text-center text-blue-400 font-bold text-2xl uppercase mb-10">Fill out our form</h2>
          <div class="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
            <form action="">
              <div class="mb-5">
                <label for="name" class="block mb-2 font-bold text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Put in your fullname."
                  class="border border-gray-300 shadow p-3 w-full rounded mb-"
                />
              </div>

              <div class="mb-5">
                <label for="twitter" class="block mb-2 font-bold text-gray-600">
                  Twitter
                </label>
                <input
                  type="text"
                  id="twitter"
                  name="twitter"
                  placeholder="Put in your fullname."
                  class="border border-red-300 shadow p-3 w-full rounded mb-"
                />
                <p class="text-sm text-red-400 mt-2">Twitter username is required</p>
              </div>

              <button class="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Submit</button>
            </form>
          </div>
        </div>
      </div>

      <div class="bg-green-200 min-h-screen flex items-center">
        <div class="bg-white p-10 md:w-2/3 lg:w-1/2 mx-auto rounded">
          <form action="">
            <div class="flex items-center mb-5">
              <label for="name" class="w-20 inline-block text-right mr-4 text-gray-500 text-gray-500">
                Name
              </label>
              <input
                name="name"
                id="name"
                type="text"
                placeholder="Your name"
                class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
              />
            </div>

            <div class="flex items-center mb-10">
              <label for="twitter" class="w-20 inline-block text-right mr-4 text-gray-500 text-gray-500">
                Twitter
              </label>
              <input
                type="text"
                name="twitter"
                id="twitter"
                placeholder="Your Twitter pseudonym"
                class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
              />
            </div>
            <div class="text-right">
              <button class="py-3 px-8 bg-green-500 text-green-100 font-bold rounded">Submit</button>
            </div>
          </form>
        </div>
      </div>

      <div class="bg-purple-600 min-h-screen flex items-center text-lg">
        <form action="" class="p-10 md:w-2/3 lg:w-1/2 mx-auto rounded">
          <div class="shadow">
            <div class="flex items-center bg-purple-400 rounded-t-lg border-purple-500 border-b">
              <label for="name" class="w-20 text-right mr-8 p-4 text-purple-200">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Put in your name"
                class="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300  outline-none text-white overflow-ellipsis overflow-hidden"
              />
            </div>
            <div class="flex items-center bg-purple-400  rounded-b-lg border-purple-500 mb-10">
              <label for="twitter" class="w-20 text-right p-4 mr-8 text-purple-200">
                Twitter
              </label>
              <input
                type="text"
                name="twitter"
                id="twitter"
                placeholder="Put in Twitter pseudonym"
                class="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300 outline-none text-white overflow-ellipsis overflow-hidden"
              />
            </div>
          </div>
          <button class="bg-pink-400 block w-full rounded py-4 text-white font-bold shadow">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Button;
