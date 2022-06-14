export default function Header() {
  return (
    <div className="mx-auto px-4 sm:px-6  border-width-2">
      <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1"></div>

        <a
          href="/"
          className="text-base font-medium text-gray-500 hover:text-gray-900"
        >
          Home
        </a>
        <a
          href="/dataViews"
          className="text-base font-medium text-gray-500 hover:text-gray-900"
        >
          Dashboard
        </a>
        <a
          href="/addStudent"
          className="text-base font-medium text-gray-500 hover:text-gray-900"
        >
          Manage
        </a>
        <a
          href="/workspace"
          className="text-base font-medium text-gray-500 hover:text-gray-900"
        >
          Workspace
        </a>
        <a
          href="/userProfile"
          className="text-base font-medium text-gray-500 hover:text-gray-900"
        >
          My Profile
        </a>
        <a
          href="/support"
          className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
        >
          Insights
        </a>
        <a
          href="/signin"
          className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Sign Out
        </a>
      </div>
    </div>
  );
}
