import Head from "next/head";

export default function Home() {
  return (
    <div className="flex py-40 min-h-full flex-col items-center justify-center">
      <Head>
        <title>edView Base</title>
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-15 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <a href="">edView</a>
        </h1>

        <p className="mt-3 text-2xl">
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            data = progress{" "}
          </code>
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="/dataViews"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Dashboard &rarr;</h3>
            <p>Tables of interventions and services</p>
          </a>

          <a
            href="/reactPractice"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Sandbox &rarr;</h3>
            <p>Sandbox page of components</p>
          </a>

          <a
            href="/addStudent"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold"> Manage &rarr;</h3>
            <p>Manage students</p>
          </a>

          <a
            href="/insights"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Insights&rarr;</h3>
            <p>Support and insights about Special Ed data</p>
          </a>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t py-40">
        <a>Powered by known</a>
      </footer>
    </div>
  );
}
