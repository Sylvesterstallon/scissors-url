//import { CheckIcon } from "@heroicons/react/solid"//
// import { CheckIcon } from "@heroicons/react/20/solid";

interface Props {
    name: string;
    description: string;
    price?: string;
    features: string[];
    color?: string;
    featured?: boolean;
  }
  
  const PlanCard = ({ name, description, price, features, featured }: Props) => {
    return (
      <>
        {featured ? (
          // feature card
          <div className="flex  flex-col py-8 px-10 bg-background-blue rounded-md shadow-xl cursor-pointer order-first lg:order-none lg:scale-110 lg:transform lg:z-10 text-white">
            <h1 className="mb-5 text-xl font-medium"> {name}</h1>
  
            <div className="mb-5 flex items-end text-4xl font-black">
              {price ? (
                <>
                  <div>${price}/month</div>
                </>
              ) : (
                "Free"
              )}
            </div>
            <p className="mb-5"> {description}</p>
            <ul className="mb-10 flex flex-col gap-y-2">
              {features.map((feature, index) => (
                <li className="flex items-center gap-3" key={index}>
                  {" "}
                  {/* add svg here */}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1982_1021)">
                      <path
                        d="M14.6666 7.38674V8.00007C14.6658 9.43769 14.2003 10.8365 13.3395 11.988C12.4787 13.1394 11.2688 13.9817 9.89016 14.3893C8.51154 14.797 7.03809 14.748 5.68957 14.2498C4.34104 13.7516 3.18969 12.8308 2.40723 11.6248C1.62476 10.4188 1.25311 8.99212 1.3477 7.55762C1.44229 6.12312 1.99806 4.75762 2.93211 3.66479C3.86615 2.57195 5.12844 1.81033 6.53071 1.4935C7.93298 1.17668 9.4001 1.32163 10.7133 1.90674"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.6667 2.66675L8 9.34008L6 7.34008"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1982_1021">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  {/* <CheckIcon className="text-primary-text w-6 h-6 flex-shrink-0" />{" "} */}
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="flex  flex-col py-8 px-10 bg-white border border-secondary-300 border-opacity-20 rounded-md shadow-xl cursor-pointer">
            <h1 className="mb-5 text-xl font-medium"> {name}</h1>
  
            <div className="mb-5 flex items-end text-4xl font-black">
              {price ? (
                <>
                  <div>${price}/month</div>
                </>
              ) : (
                "Free"
              )}
            </div>
            <p className="mb-5"> {description}</p>
            <ul className="mb-10 flex flex-col gap-y-2">
              {features.map((feature, index) => (
                <li className="flex items-center gap-3" key={index}>
                  {" "}
                  {/* <CheckIcon className="text-primary-text w-6 h-6 flex-shrink-0" />{" "} */}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1982_1009)">
                      <path
                        d="M14.6666 7.38674V8.00007C14.6658 9.43769 14.2003 10.8365 13.3395 11.988C12.4787 13.1394 11.2688 13.9817 9.89016 14.3893C8.51154 14.797 7.03809 14.748 5.68957 14.2498C4.34104 13.7516 3.18969 12.8308 2.40723 11.6248C1.62476 10.4188 1.25311 8.99212 1.3477 7.55762C1.44229 6.12312 1.99806 4.75762 2.93211 3.66479C3.86615 2.57195 5.12844 1.81033 6.53071 1.4935C7.93298 1.17668 9.4001 1.32163 10.7133 1.90674"
                        stroke="#005AE2"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.6667 2.66675L8 9.34008L6 7.34008"
                        stroke="#005AE2"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1982_1009">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
  };
  
  export default PlanCard;
  