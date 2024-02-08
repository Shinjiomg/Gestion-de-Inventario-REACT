export default function ErrorPage() {
  return (
    <section class="bg-white dark:bg-gray-900 ">
      <div class="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div class="wf-ull lg:w-1/2">
          <p class="text-sm font-medium text-blue-500 dark:text-blue-400">error 404</p>
          <h1 class="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Página no encontrada</h1>
          <p class="mt-4 text-gray-500 dark:text-gray-400">Lo sentimos, la página que estás buscando no existe.</p>
        </div>

        <div class="relative w-full mt-12 lg:w-1/2 lg:mt-0">
          <img class="w-full max-w-lg lg:mx-auto" src="https://merakiui.com/images/components/illustration.svg" alt="not-found" />
        </div>
      </div>
    </section>
  );
}