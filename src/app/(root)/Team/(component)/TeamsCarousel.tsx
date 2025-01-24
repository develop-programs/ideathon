"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function TeamsCarousel() {
  const { data, refetch, isLoading, isError, error } = useQuery({
    queryKey: ["team"],
    queryFn: async () => {
      const response = await axios.get(`${window.location.origin}/api/Team`);
      return response.data.teams;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <Carousel
      className="max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-4xl xl:max-w-6xl mx-auto"
      plugins={[Autoplay({ delay: 1000 })]}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="h-full">
        {data.map((info: TeamMember, index: number) => (
          <CarouselItem
            key={index}
            className="h-full sm:basis-full lg:basis-1/3"
          >
            <div className="p-5 lg:p-2.5 xl:p-5">
              <Card className="w-full h-full aspect-square shadow-lg rounded-lg overflow-hidden dark:bg-dark-card">
                <CardContent className="relative w-full h-full flex flex-col items-center justify-end p-0">
                  <Image
                    src="/placeholder.svg"
                    className="absolute aspect-square w-full h-full object-cover"
                    width={300}
                    height={300}
                    alt="images"
                  />
                  <div className="w-full bg-black/30 dark:bg-black/60 z-50 py-2 sm:py-4 space-y-1 sm:space-y-2 rounded-b-md">
                    <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 dark:text-gray-100">
                      {info.name}
                    </h3>
                    <p className="text-base sm:text-lg text-center text-gray-600 dark:text-gray-300">
                      {info.role}
                    </p>
                    <div className="flex justify-center space-x-2 sm:space-x-4">
                      <Link
                        href={info.linkedIn}
                        target="_blank"
                        className="flex items-center gap-1 sm:gap-2 text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="size-6 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.55834 8.00004C6.51861 8.00876 5.47864 8.00685 4.43882 8.00107C4.14502 7.99933 3.99947 8.10075 4 8.43514C4.00651 12.1638 4.00398 15.8924 4.00475 19.621C4.00483 19.763 3.98308 19.919 4.15789 19.9836C4.16455 20.0064 7.83017 20.0049 7.84004 19.9824C8.033 19.9072 7.9941 19.7323 7.99418 19.5811C7.99586 15.8787 7.99288 12.1763 8 8.47397C8.00053 8.13799 7.88553 7.99727 7.55834 8.00004Z"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.99997 3C4.89547 3 4 3.89547 4 4.99997C4 6.1046 4.89547 7 5.99997 7C7.10453 7 8 6.1046 8 4.99997C8 3.89547 7.10453 3 5.99997 3Z"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20.9481 19.4252C20.9505 17.514 20.9602 15.6028 20.9447 13.6917C20.9379 12.8546 20.9078 12.0153 20.7319 11.1914C20.4435 9.84065 19.7945 8.78605 18.5054 8.29429C17.6453 7.96624 16.7461 7.94512 15.848 8.07229C15.0935 8.17912 14.3985 8.46649 13.7653 9.00065C13.7653 8.80631 13.7647 8.67743 13.7655 8.5487C13.7674 8.25961 13.6329 8.12894 13.3557 8.13026C12.3708 8.13486 11.3859 8.13369 10.4008 8.13104C10.1297 8.13026 9.99963 8.24224 10 8.54699C10.0052 12.2144 10.0033 15.8818 10.0034 19.5492C10.0034 19.6898 9.98491 19.8395 10.1477 19.9087C10.1649 19.9314 13.7208 19.9399 13.7207 19.9168C13.9539 19.812 13.8822 19.5909 13.8826 19.4109C13.8858 17.6021 13.875 15.7932 13.8847 13.9844C13.8877 13.4188 13.9086 12.8474 14.1529 12.3207C14.4424 11.6966 15.0415 11.4262 15.8854 11.5369C16.4659 11.6129 16.8365 12.006 16.9519 12.6909C16.9946 12.9439 17.0265 13.2026 17.028 13.4589C17.0393 15.4485 17.0409 17.4382 17.0491 19.4279C17.05 19.6116 16.9948 19.8285 17.2315 19.9209C17.2234 19.947 20.8039 19.9312 20.8048 19.9059C20.9975 19.7936 20.9479 19.5977 20.9481 19.4252Z"
                          />
                        </svg>
                      </Link>
                      <Link
                        href={info.instagram}
                        target="_blank"
                        className="flex items-center gap-1 sm:gap-2 text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="size-6 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8 2H15.7C19.0137 2 21.7 4.68629 21.7 8V15.7C21.7 19.0137 19.0137 21.7 15.7 21.7H8C4.68629 21.7 2 19.0137 2 15.7V8C2 4.68629 4.68629 2 8 2ZM20.2 8C20.1945 5.517 18.183 3.5055 15.7 3.5H8C5.517 3.5055 3.5055 5.517 3.5 8V15.7C3.5055 18.183 5.517 20.1945 8 20.2H15.7C18.183 20.1945 20.1945 18.183 20.2 15.7V8Z"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.55 11.85C7.5555 9.47746 9.47746 7.5555 11.85 7.55C14.2225 7.5555 16.1445 9.47746 16.15 11.85C16.15 14.2248 14.2248 16.15 11.85 16.15C9.47518 16.15 7.55 14.2248 7.55 11.85ZM14.65 11.85C14.65 10.3036 13.3964 9.05 11.85 9.05C10.3059 9.05549 9.05549 10.3059 9.05 11.85C9.05 13.3964 10.3036 14.65 11.85 14.65C13.3964 14.65 14.65 13.3964 14.65 11.85Z"
                          />
                          <path d="M15.51 6.505C15.51 5.90577 15.9958 5.42 16.595 5.42C17.1942 5.42 17.68 5.90577 17.68 6.505C17.68 7.10423 17.1942 7.59 16.595 7.59C15.9958 7.59 15.51 7.10423 15.51 6.505Z" />
                        </svg>
                      </Link>
                      <Link
                        href={info.github}
                        target="_blank"
                        className="flex items-center gap-1 sm:gap-2 text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          className="size-6 stroke-current"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_195_460)">
                            <path
                              d="M7.49996 15.8334C3.33329 17.0834 3.33329 13.75 1.66663 13.3334M13.3333 18.3334V15.1084C13.3646 14.711 13.3109 14.3115 13.1758 13.9365C13.0407 13.5615 12.8274 13.2195 12.55 12.9334C15.1666 12.6417 17.9166 11.65 17.9166 7.10003C17.9164 5.93655 17.4689 4.8177 16.6666 3.97503C17.0465 2.95712 17.0196 1.83199 16.5916 0.833363C16.5916 0.833363 15.6083 0.541696 13.3333 2.0667C11.4233 1.54905 9.40995 1.54905 7.49996 2.0667C5.22496 0.541696 4.24163 0.833363 4.24163 0.833363C3.81361 1.83199 3.78675 2.95712 4.16663 3.97503C3.3584 4.82395 2.91039 5.95292 2.91663 7.12503C2.91663 11.6417 5.66663 12.6334 8.28329 12.9584C8.00912 13.2417 7.79768 13.5795 7.66272 13.95C7.52775 14.3204 7.4723 14.7151 7.49996 15.1084V18.3334"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_195_460">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
