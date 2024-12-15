import { BackButton } from "@/components/BackButton";
import { getCustomer } from "@/lib/queries/getCustomer";
import { getTicket } from "@/lib/queries/getTicket";

export default async function TicketsFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    const { customerId, ticketId } = await searchParams;
    if (!customerId && !ticketId) {
      return (
        <>
          <h2 className="text-2xl mb-2">Customer not found {customerId}</h2>
          <BackButton title="Back" variant={"default"} />
        </>
      );
    }

    //new ticket
    if (customerId) {
      const customer = await getCustomer(parseInt(customerId));
      if (!customer) {
        return (
          <>
            <h2 className="text-2xl mb-2">Customer not found {customerId}</h2>
            <BackButton title="Back" variant={"default"} />
          </>
        );
      }

      if (!customer.active) {
        return (
          <>
            <h2 className="text-2xl mb-2">
              Customer ID is not active {customerId}
            </h2>
            <BackButton title="Back" variant={"default"} />
          </>
        );
      }

      if (ticketId) {
        const ticket = await getTicket(parseInt(ticketId));
        if (!ticket) {
          return (
            <>
              <h2 className="text-2xl mb-2">Ticket not found {ticketId}</h2>
              <BackButton title="Back" variant={"default"} />
            </>
          );
        }

        const customer = await getCustomer(ticket.customerId);

        //return
        console.log(customer);
        console.log(ticket);
      }
    }
  } catch (e) {
    console.log(e);
    if (e instanceof Error) {
      throw e;
    }
  }
}
