import { Ticket } from '../components/ticket';
import { Footer } from '../components/Footer';
import Sidemenu from '../components/Sidemenu';
const data = require("../utils/data.json")

export const MyTickets = () => {

  const concertEvents = data;
    return (

        
        <div class="bg-gray-900">
            <Sidemenu/>
<header aria-label="Page Header">
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div class="flex items-center sm:justify-center sm:gap-4">
      <div class="relative hidden sm:block">

    <div class="mt-8">
      <h1 class="flex justify-center text-2xl font-bold text-white sm:text-3xl">
        Your Tickets
      </h1>

    </div>
  </div>
  </div>
  </div>
</header>

       
        <div className="grid grid-cols-2 lg:grid-cols-3">
        { concertEvents && concertEvents.slice(0,3).map((event) => (
              <Ticket img={event.banner} location={event.location} eventName={event.name} />
                     
          ))}

        </div>
        <Footer/>
        </div>
    )
}