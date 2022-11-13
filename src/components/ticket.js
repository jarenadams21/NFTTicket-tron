export const Ticket = ({img, location, eventName}) => {
    return (
        <a href="#" class="text-white m-6 block rounded-lg p-4 shadow-sm shadow-indigo-100">
  <img
    src={img}
    class="h-64 w-full rounded-md object-cover"
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

  <div class="p-6">

  <a
  class="flex items-center justify-center rounded-xl border-4 border-black bg-red-500 px-8 py-4 font-bold shadow-[6px_6px_0_0_#000] transition hover:shadow-none focus:outline-none focus:ring active:bg-pink-50"
  href="/blog"
>
  Event Details <span aria-hidden="true" class="ml-1.5" role="img"></span>
</a>
<a
  class="mt-4 flex items-center justify-center rounded-xl border-4 border-black bg-red-500 px-8 py-4 font-bold shadow-[6px_6px_0_0_#000] transition hover:shadow-none focus:outline-none focus:ring active:bg-pink-50"
  href="/blog"
>
  My NFT <span aria-hidden="true" class="ml-1.5" role="img"></span>
</a>
<a
  class="mt-4 flex items-center justify-center rounded-xl border-4 border-black bg-red-500 px-8 py-4 font-bold shadow-[6px_6px_0_0_#000] transition hover:shadow-none focus:outline-none focus:ring active:bg-pink-50"
  href="/blog"
>
  Refill <span aria-hidden="true" class="ml-1.5" role="img"></span>
</a>

   </div>
 
  </div>
</a>
    )
}