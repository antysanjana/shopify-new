import React from "react";

function Pricing() {
  return (
    <div class="bg-primary">
      <div class="max-w-screen-xl py-8 w-10/12 mx-auto">
        <h2 class="text-[40px] font-bold color-primary text-center">
          on-demand
        </h2>
        <div class="gap-2 flex flex-col md:flex-row justify-center items-center">
          <div class="bg-tertiary duration-300 ease-in-out inline-block px-5 py-2 rounded-md">
            <div class="flex items-center justify-center">
              <div class="bg-[#F8D1A2] color-secondary h-7 w-7 flex justify-center rounded-full items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  version="1.2"
                  baseProfile="tiny"
                  viewBox="0 0 24 24"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path>
                </svg>
              </div>
              <span class="text-[40px] font-bold color-white ml-3">design</span>
            </div>
          </div>
          <div class="bg-tertiary duration-300 ease-in-out inline-block px-5 py-2 rounded-md">
            <div class="flex items-center justify-center">
              <div class="bg-[#F8D1A2] color-secondary h-7 w-7 flex justify-center rounded-full items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  version="1.2"
                  baseProfile="tiny"
                  viewBox="0 0 24 24"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path>
                </svg>
              </div>
              <span class="text-[40px] font-bold color-white ml-3">
                marketing
              </span>
            </div>
          </div>
          <div class="bg-tertiary duration-300 ease-in-out inline-block px-5 py-2 rounded-md">
            <div class="flex items-center justify-center">
              <div class="bg-[#F8D1A2] color-secondary h-7 w-7 flex justify-center rounded-full items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  version="1.2"
                  baseProfile="tiny"
                  viewBox="0 0 24 24"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path>
                </svg>
              </div>
              <span class="text-[40px] font-bold color-white ml-3">
                development
              </span>
            </div>
          </div>
        </div>
        <h2 class="text-[40px] font-bold color-primary text-center">
          with no commitment
        </h2>
      </div>
    </div>
  );
}

export default Pricing;
