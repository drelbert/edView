import { useState } from "react";

// this component is about sharing state between components
// state lifted up to this common parent for Panels
// this is an uncontrolled component, driven by state
export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Feature
            </h3>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6 ">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 ">
                  <Panel
                    title="featureA"
                    isActive={activeIndex === 0}
                    onShow={() => setActiveIndex(0)}
                  >
                    Description here, placholder for future content or event.
                  </Panel>
                  <Panel
                    title="featureB"
                    isActive={activeIndex === 1}
                    onShow={() => setActiveIndex(1)}
                  >
                    Description here, placholder to be updated with event UI.
                  </Panel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// this is a controlled component, driven by props
function Panel({ title, children, isActive, onShow }) {
  return (
    <section className="my-4 py-2 px-2 block text-md font-medium text-gray-700 bg-gray-50 ">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <div className="text-right sm:px-2">
          <button
            onClick={onShow}
            type="submit"
            className="inline-flex justify-center py-2 px-4 my-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            View
          </button>
        </div>
      )}
    </section>
  );
}
