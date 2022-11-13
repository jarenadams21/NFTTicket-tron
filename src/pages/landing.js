import rocket from './images/rocketshipevent.jpeg';


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Footer } from '../components/Footer';
import Sidemenu from '../components/Sidemenu';
import { EventCard } from '../components/EventCard';

const data = require("../utils/data.json");

export const Landing = () => {

  const sportsEvents = data.slice(0, 3);
  const concertEvents = data.slice(3, 6);

  console.log(concertEvents)

  return (
    // -----------------------// NAVBAR-TOP //----------------------------- //
    <div class="bg-gray-900 text-white">
      {/* <header aria-label="Site Header" class="border-b border-gray-100">
        <div
          class="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8"
        >
          <div class="flex items-center">
            <button type="button" class="p-2 sm:mr-4 lg:hidden">
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <a href="#" class="flex">
              <span class="sr-only">Logo</span>
              <span class="inline-block h-10 w-32 rounded-lg bg-gray-200"></span>
            </a>
          </div>

          <div class="flex flex-1 items-center justify-end">
            <nav
              aria-label="Site Nav"
              class="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500"
            >
              <a
                href="/about"
                class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
              >
                About
              </a>

              <a
                href="/news"
                class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
              >
                News
              </a>

              <a
                href="/products"
                class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
              >
                Products
              </a>

              <a
                href="/contact"
                class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
              >
                Contact
              </a>
            </nav>

            <div class="ml-8 flex items-center">
              <div
                class="flex items-center divide-x divide-gray-100 border-x border-gray-100"
              >
                <span>
                  <a
                    href="/cart"
                    class="block border-b-4 border-transparent p-6 hover:border-red-700"
                  >
                    <svg
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>

                    <span class="sr-only">Cart</span>
                  </a>
                </span>

                <span>
                  <a
                    href=" /account"
                    class="block border-b-4 border-transparent p-6 hover:border-red-700"
                  >
                    <svg
                      class="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>

                    <span class="sr-only"> Account </span>
                  </a>
                </span>

                <span class="hidden sm:block">
                  <a
                    href="/search"
                    class="block border-b-4 border-transparent p-6 hover:border-red-700"
                  >
                    <svg
                      class="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>

                    <span class="sr-only"> Search </span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header> */}
      <Sidemenu />



      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div
              class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
            >
              <img
                alt="Party"
                src={rocket}
                class="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div class="lg:py-24">
              <h2 class="text-3xl font-bold sm:text-4xl">JustPass</h2>

              <p class="mt-4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
                atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
                veniam tempora deserunt? Molestiae eius quidem quam repellat.
              </p>

              <a
                href="#"
                class="mt-8 inline-flex items-center rounded border border-red-600 bg-red-600 px-8 py-3 text-white hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring active:text-red-500"
              >
                <span class="text-sm font-medium"> Get Started </span>

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
      </section>


      <section class="bg-gray-900 text-white">
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">

          <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3">
            <a
              class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-red-500/10 hover:shadow-red-500/10"
              href="/services/digital-campaigns"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h2 class="mt-4 text-xl font-bold text-white">Find an Event</h2>

              <p class="mt-1 text-sm text-gray-300">
                Find out whats happening around you.
              </p>
            </a>

            <a
              class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-red-500/10 hover:shadow-red-500/10"
              href="/services/digital-campaigns"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h2 class="mt-4 text-xl font-bold text-white">Buy Your Pass</h2>

              <p class="mt-1 text-sm text-gray-300">
                ...
              </p>
            </a>

            <a
              class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-red-500/10 hover:shadow-red-500/10"
              href="/services/digital-campaigns"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h2 class="mt-4 text-xl font-bold text-white">Use Your Pass</h2>

              <p class="mt-1 text-sm text-gray-300">
                Your pass acts as your point of entry, and your wallet.
              </p>
            </a>
          </div>
          <div class="mt-12 text-center">

          </div>
        </div>
      </section>



      <div class="Music p-24">
        <h1 class="p-5 text-4xl">Music</h1>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {concertEvents && concertEvents.map((event, idx) => (
            <SwiperSlide>
              <EventCard id={idx} image={event.banner} date={event.time} name={event.name} description={event.description} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div class="Sports p-24">
        <h1 class="p-5 text-4xl">Sports</h1>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >

          {sportsEvents && sportsEvents.map((event, idx) => (
            <SwiperSlide>
              <EventCard id={idx} image={event.banner} date={event.time} name={event.name} description={event.description} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>




      {/* // -----------------------// RANDOM EVENT CATEGORIES-BOTTOM //---------------------------- // */}


      {/* // -----------------------// FOOTER-TOP //---------------------------- // */}

      <Footer />

      {/* // -----------------------// FOOTER-BOTTOM //---------------------------- // */}

    </div>
  );
};