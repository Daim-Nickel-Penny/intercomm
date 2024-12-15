import { BackButton } from "@/components/BackButton";
import { getCustomer } from "@/lib/queries/getCustomer";

export default async function CustomersFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    const { customerId } = await searchParams;

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

      //edit customer
    } else {
      //new customer
    }
  } catch (e) {
    console.log(e);
    if (e instanceof Error) {
      throw e;
    }
  }
}
