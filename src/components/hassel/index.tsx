import Typography from "@/utils/Typography";
import Image from "next/image";

const hasselData = [
  {
    title: "Orders Everywhere",
    description:
      "Sellers juggle dozens of conversations across chats and easily lose track of who ordered what.",
    image: "/images/overwhelmed-dms.webp",
  },
  {
    title: "Inventory Chaos",
    description:
      "Stock is managed in notebooks or spreadsheets, leading to overselling and disappointed customers",
    image: "/images/inventoryHassel.webp",
  },
  {
    title: "Payment Confusion",
    description:
      "Every transaction requires manual confirmation, scrolling through bank alerts or checking screenshots",
    image: "/images/payment-confirmation-issues.webp",
  },
  {
    title: "Delivery Stress",
    description:
      "Arranging and tracking deliveries is time-consuming, leaving buyers in the dark.",
    image: "/images/delivery.webp",
  },
];

export function Hassel() {
  return (
    <div className="px-5 md:px-0">
      <div className="mt-[10rem]">
        <Typography.Headers className="md:text-[50px] text-[40px]">
          The Hassel
        </Typography.Headers>
      </div>
      <div className="mt-1">
        <Typography.Text className="text-center">
          Running a business through DMs isn’t easy, it’s messy, stressful, and
          full of mistakes.
        </Typography.Text>
      </div>
      <div className="mt-16 w-[80%] mx-auto space-y-[5rem] hidden md:block ">
        {hasselData.map((el, i) =>
          i % 2 == 0 ? (
            <div
              key={i}
              className={`md:grid grid-cols-2 gap-16 items-center ${
                1 % 2 == 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-[550px] h-[200px] md:h-[350px] overflow-hidden rounded-md">
                <Image
                  className="object-cover w-full h-full"
                  src={el.image}
                  alt={el.title}
                  width={550}
                  height={350}
                  priority
                  sizes="(max-width: 768px) 100vw, 550px"
                />
              </div>
              <div className="flex justify-center">
                <div className="flex flex-col items-start w-[70%] space-y-2">
                  <Typography.Headers>{el.title}</Typography.Headers>
                  <Typography.Text className="">
                    {el.description}
                  </Typography.Text>
                </div>
              </div>
            </div>
          ) : (
            <div key={i} className="md:grid grid-cols-2 gap-16 items-center">
              <div className="flex justify-center">
                <div className="flex flex-col items-start w-[70%] space-y-2">
                  <Typography.Headers>{el.title}</Typography.Headers>
                  <Typography.Text className="">
                    {el.description}
                  </Typography.Text>
                </div>
              </div>
              <div className="w-full md:w-[550px] h-[200px] md:h-[350px] overflow-hidden rounded-md">
                <Image
                  className="object-cover w-full h-full"
                  src={el.image}
                  alt={el.title}
                  width={550}
                  height={350}
                  priority
                  sizes="(max-width: 768px) 100vw, 550px"
                />
              </div>
            </div>
          )
        )}
      </div>
      <div className="mt-16 w-[80%] mx-auto space-y-[2rem] md:hidden ">
        {hasselData.map((el, i) =>
            <div
              key={i}
              className={`md:grid grid-cols-2 gap-16 items-center border rounded-xl bg-gray-200 border-gray-300 ${
                1 % 2 == 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-[550px] h-[200px] md:h-[350px] overflow-hidden rounded-md">
                <Image
                  className="object-cover w-full h-full"
                  src={el.image}
                  alt={el.title}
                  width={550}
                  height={350}
                  priority
                  sizes="(max-width: 768px) 100vw, 550px"
                />
              </div>
              <div className="flex justify-center p-3">
                <div className="flex flex-col items-center space-y-2">
                  <Typography.Headers className="text-center">{el.title}</Typography.Headers>
                  <Typography.Text className="text-center">
                    {el.description}
                  </Typography.Text>
                </div>
              </div>
            </div>
        )}
      </div>
    </div>
  );
}
