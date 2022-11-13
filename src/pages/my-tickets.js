import { Ticket } from '../components/ticket';
const data = require("../utils/data.json")

export const MyTickets = () => {

  const concertEvents = data.concerts;
    return (

        <div>
        { concertEvents && concertEvents.map((event) => (
              <Ticket img={event.banner} location={event.location} eventName={event.name} />
                     
          ))}
          
        </div>
    )
}