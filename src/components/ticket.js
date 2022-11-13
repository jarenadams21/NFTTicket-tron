export const Ticket = ({img, location, eventName}) => {
    return (
        <a href="#" class="text-white m-6 block rounded-lg p-4 shadow-sm shadow-indigo-100">
  <img
    src={img}
    class="h-56 w-full rounded-md object-cover"
  />

  <div class="mt-2">
    <dl>
      <div>
        <dt class="sr-only">Location</dt>

        <dd class="text-sm text-red-500">{location}</dd>
      </div>

      <div>
        <dt class="sr-only">EventName</dt>

        <dd class="font-small">{eventName}</dd>
      </div>
    </dl>

    <div class="flex flex-wrap justify-between mt-4  items-center text-xs">
    <a
  class="group relative inline-block text-sm font-medium text-red-600 focus:outline-none focus:ring active:text-red-500"
  href="/download"
>
  <span class="absolute inset-0 border border-current"></span>
  <span
    class="block border border-current bg-white px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"
  >
    Details
  </span>
</a>
<a
  class="group relative inline-block text-sm font-medium text-red-600 focus:outline-none focus:ring active:text-red-500"
  href="/download"
>
  <span class="absolute inset-0 border border-current"></span>
  <span
    class="block border border-current bg-white px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"
  >
    NFT
  </span>
</a>
    </div>
  </div>
</a>
    )
}