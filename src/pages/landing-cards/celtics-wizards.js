import celtics from '../images/celtics@wizards.jpeg'

export const CelticsWizards = () => {
    return (
        <a href="#" class="group relative block bg-black">
  <img
    alt="Developer"
    src={celtics}
    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div class="relative p-8">
    <p class="text-sm font-medium uppercase tracking-widest text-red-600">
      November 16th
    </p>

    <p class="text-2xl font-bold text-white">Washington Wizards @ Boston Celtics</p>

    <div class="mt-64">
      <div
        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p class="text-sm text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
          perferendis hic asperiores quibusdam quidem voluptates doloremque
          reiciendis nostrum harum. Repudiandae?
        </p>

        <a
          href="#"
          class="mt-8 inline-flex items-center rounded border border-red-600 bg-red-600 px-8 py-3 text-white hover:bg-transparent focus:outline-none focus:ring active:text-pink-500"
        >
          <span class="text-sm font-medium"> Find Tickets </span>
  
          <svg
            class="ml-3 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>

      </div>
    </div>
  </div>
</a>
    )
}