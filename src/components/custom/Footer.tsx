"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const SocialMedia = [
  {
    name: "Discord",
    icon: (
      <svg
        width="92"
        height="92"
        viewBox="0 0 92 92"
        fill="none"
        className="size-12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M62.4748 30.562C67.87 38.5435 70.5344 47.5464 69.5384 57.9108C69.5342 57.9547 69.5115 57.9949 69.4757 58.0214C65.39 61.04 61.4316 62.8719 57.5287 64.0868C57.4983 64.0961 57.4657 64.0956 57.4357 64.0853C57.4056 64.0751 57.3794 64.0556 57.3609 64.0297C56.4592 62.7674 55.6399 61.4365 54.9221 60.039C54.8809 59.9566 54.9186 59.8575 55.0033 59.8251C56.3045 59.3318 57.5418 58.7406 58.7319 58.0406C58.8256 57.9853 58.8316 57.8501 58.745 57.7852C58.4924 57.5966 58.2422 57.3983 58.0028 57.2C57.958 57.1634 57.8977 57.1562 57.8469 57.1808C50.1205 60.7708 41.6566 60.7708 33.8389 57.1808C33.7881 57.158 33.7278 57.1658 33.6842 57.2018C33.4454 57.4001 33.1946 57.5966 32.9444 57.7852C32.8578 57.8501 32.8649 57.9853 32.9593 58.0406C34.1494 58.7273 35.3867 59.3318 36.686 59.8275C36.7702 59.8599 36.8102 59.9566 36.7684 60.039C36.0662 61.4383 35.2469 62.7692 34.3285 64.0315C34.2885 64.0826 34.2228 64.106 34.1607 64.0868C30.2763 62.8719 26.3179 61.04 22.2322 58.0214C22.1982 57.9949 22.1737 57.9529 22.1701 57.909C21.3377 48.9439 23.0342 39.8665 29.2271 30.5602C29.2421 30.5355 29.2648 30.5163 29.291 30.5049C32.3383 29.0977 35.6028 28.0625 39.0149 27.4713C39.077 27.4617 39.1391 27.4905 39.1713 27.5458C39.5929 28.2968 40.0748 29.26 40.4009 30.0471C43.9974 29.4943 47.6502 29.4943 51.322 30.0471C51.648 29.2768 52.1132 28.2968 52.533 27.5458C52.5479 27.5184 52.5711 27.4964 52.5992 27.483C52.6273 27.4696 52.6589 27.4655 52.6894 27.4713C56.1033 28.0643 59.3679 29.0995 62.4127 30.5049C62.4395 30.5163 62.4616 30.5355 62.4748 30.562ZM42.2293 47.6077C42.2669 44.9574 40.3465 42.7643 37.9359 42.7643C35.5449 42.7643 33.643 44.9382 33.643 47.6077C33.643 50.2766 35.5825 52.4504 37.9359 52.4504C40.3274 52.4504 42.2293 50.2766 42.2293 47.6077ZM58.1025 47.6077C58.1401 44.9574 56.2197 42.7643 53.8097 42.7643C51.4181 42.7643 49.5162 44.9382 49.5162 47.6077C49.5162 50.2766 51.4557 52.4504 53.8097 52.4504C56.2197 52.4504 58.1025 50.2766 58.1025 47.6077Z"
          fill="#5865F2"
        />
      </svg>
    ),
    href: "https://discord.com",
  },
  {
    name: "Instagram",
    icon: (
      <svg
        width="92"
        height="92"
        viewBox="0 0 92 92"
        fill="none"
        className="size-12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M37.4456 45.7808C37.4456 41.1786 41.1776 37.4468 45.7826 37.4468C50.3875 37.4468 54.1216 41.1786 54.1216 45.7808C54.1216 50.383 50.3875 54.1148 45.7826 54.1148C41.1776 54.1148 37.4456 50.383 37.4456 45.7808ZM32.9377 45.7808C32.9377 52.8708 38.6883 58.618 45.7826 58.618C52.8768 58.618 58.6275 52.8708 58.6275 45.7808C58.6275 38.6908 52.8768 32.9436 45.7826 32.9436C38.6883 32.9436 32.9377 38.6908 32.9377 45.7808ZM56.1342 32.4346C56.1339 33.0279 56.3098 33.608 56.6394 34.1015C56.9691 34.595 57.4377 34.9797 57.9861 35.2069C58.5346 35.4342 59.1381 35.4939 59.7204 35.3784C60.3028 35.2628 60.8378 34.9773 61.2577 34.5579C61.6777 34.1385 61.9638 33.6041 62.0799 33.0222C62.1959 32.4403 62.1367 31.8371 61.9097 31.2888C61.6828 30.7406 61.2982 30.2719 60.8047 29.942C60.3112 29.6122 59.7309 29.436 59.1372 29.4358H59.136C58.3402 29.4361 57.5771 29.7522 57.0142 30.3144C56.4514 30.8767 56.1349 31.6392 56.1342 32.4346ZM35.6765 66.1302C33.2377 66.0192 31.9121 65.6132 31.0311 65.2702C29.8632 64.8158 29.0299 64.2746 28.1538 63.4002C27.2777 62.5258 26.7354 61.6938 26.2827 60.5266C25.9393 59.6466 25.533 58.3214 25.4222 55.884C25.3009 53.2488 25.2767 52.4572 25.2767 45.781C25.2767 39.1048 25.3029 38.3154 25.4222 35.678C25.5332 33.2406 25.9425 31.918 26.2827 31.0354C26.7374 29.8682 27.2789 29.0354 28.1538 28.1598C29.0287 27.2842 29.8612 26.7422 31.0311 26.2898C31.9117 25.9466 33.2377 25.5406 35.6765 25.4298C38.3133 25.3086 39.1054 25.2844 45.7826 25.2844C52.4598 25.2844 53.2527 25.3106 55.8916 25.4298C58.3305 25.5408 59.6539 25.9498 60.537 26.2898C61.7049 26.7422 62.5382 27.2854 63.4144 28.1598C64.2905 29.0342 64.8308 29.8682 65.2855 31.0354C65.6289 31.9154 66.0351 33.2406 66.146 35.678C66.2673 38.3154 66.2915 39.1048 66.2915 45.781C66.2915 52.4572 66.2673 53.2466 66.146 55.884C66.0349 58.3214 65.6267 59.6462 65.2855 60.5266C64.8308 61.6938 64.2893 62.5266 63.4144 63.4002C62.5394 64.2738 61.7049 64.8158 60.537 65.2702C59.6565 65.6134 58.3305 66.0194 55.8916 66.1302C53.2549 66.2514 52.4628 66.2756 45.7826 66.2756C39.1024 66.2756 38.3125 66.2514 35.6765 66.1302ZM35.4694 20.9322C32.8064 21.0534 30.9867 21.4754 29.3976 22.0934C27.7518 22.7316 26.3585 23.5878 24.9663 24.977C23.5741 26.3662 22.7195 27.7608 22.081 29.4056C21.4626 30.9948 21.0403 32.8124 20.9191 35.4738C20.7958 38.1394 20.7676 38.9916 20.7676 45.7808C20.7676 52.57 20.7958 53.4222 20.9191 56.0878C21.0403 58.7494 21.4626 60.5668 22.081 62.156C22.7195 63.7998 23.5743 65.196 24.9663 66.5846C26.3583 67.9732 27.7518 68.8282 29.3976 69.4682C30.9897 70.0862 32.8064 70.5082 35.4694 70.6294C38.138 70.7506 38.9893 70.7808 45.7826 70.7808C52.5759 70.7808 53.4286 70.7526 56.0958 70.6294C58.759 70.5082 60.5774 70.0862 62.1676 69.4682C63.8124 68.8282 65.2066 67.9738 66.5989 66.5846C67.9911 65.1954 68.8438 63.7998 69.4842 62.156C70.1026 60.5668 70.5268 58.7492 70.6461 56.0878C70.7674 53.4202 70.7956 52.57 70.7956 45.7808C70.7956 38.9916 70.7674 38.1394 70.6461 35.4738C70.5248 32.8122 70.1026 30.9938 69.4842 29.4056C68.8438 27.7618 67.9889 26.3684 66.5989 24.977C65.2088 23.5856 63.8124 22.7316 62.1696 22.0934C60.5775 21.4754 58.7588 21.0514 56.0978 20.9322C53.4306 20.811 52.5779 20.7808 45.7846 20.7808C38.9913 20.7808 38.138 20.809 35.4694 20.9322Z"
          fill="url(#paint0_radial_1_376)"
        />
        <path
          d="M37.4456 45.7808C37.4456 41.1786 41.1776 37.4468 45.7826 37.4468C50.3875 37.4468 54.1216 41.1786 54.1216 45.7808C54.1216 50.383 50.3875 54.1148 45.7826 54.1148C41.1776 54.1148 37.4456 50.383 37.4456 45.7808ZM32.9377 45.7808C32.9377 52.8708 38.6883 58.618 45.7826 58.618C52.8768 58.618 58.6275 52.8708 58.6275 45.7808C58.6275 38.6908 52.8768 32.9436 45.7826 32.9436C38.6883 32.9436 32.9377 38.6908 32.9377 45.7808ZM56.1342 32.4346C56.1339 33.0279 56.3098 33.608 56.6394 34.1015C56.9691 34.595 57.4377 34.9797 57.9861 35.2069C58.5346 35.4342 59.1381 35.4939 59.7204 35.3784C60.3028 35.2628 60.8378 34.9773 61.2577 34.5579C61.6777 34.1385 61.9638 33.6041 62.0799 33.0222C62.1959 32.4403 62.1367 31.8371 61.9097 31.2888C61.6828 30.7406 61.2982 30.2719 60.8047 29.942C60.3112 29.6122 59.7309 29.436 59.1372 29.4358H59.136C58.3402 29.4361 57.5771 29.7522 57.0142 30.3144C56.4514 30.8767 56.1349 31.6392 56.1342 32.4346ZM35.6765 66.1302C33.2377 66.0192 31.9121 65.6132 31.0311 65.2702C29.8632 64.8158 29.0299 64.2746 28.1538 63.4002C27.2777 62.5258 26.7354 61.6938 26.2827 60.5266C25.9393 59.6466 25.533 58.3214 25.4222 55.884C25.3009 53.2488 25.2767 52.4572 25.2767 45.781C25.2767 39.1048 25.3029 38.3154 25.4222 35.678C25.5332 33.2406 25.9425 31.918 26.2827 31.0354C26.7374 29.8682 27.2789 29.0354 28.1538 28.1598C29.0287 27.2842 29.8612 26.7422 31.0311 26.2898C31.9117 25.9466 33.2377 25.5406 35.6765 25.4298C38.3133 25.3086 39.1054 25.2844 45.7826 25.2844C52.4598 25.2844 53.2527 25.3106 55.8916 25.4298C58.3305 25.5408 59.6539 25.9498 60.537 26.2898C61.7049 26.7422 62.5382 27.2854 63.4144 28.1598C64.2905 29.0342 64.8308 29.8682 65.2855 31.0354C65.6289 31.9154 66.0351 33.2406 66.146 35.678C66.2673 38.3154 66.2915 39.1048 66.2915 45.781C66.2915 52.4572 66.2673 53.2466 66.146 55.884C66.0349 58.3214 65.6267 59.6462 65.2855 60.5266C64.8308 61.6938 64.2893 62.5266 63.4144 63.4002C62.5394 64.2738 61.7049 64.8158 60.537 65.2702C59.6565 65.6134 58.3305 66.0194 55.8916 66.1302C53.2549 66.2514 52.4628 66.2756 45.7826 66.2756C39.1024 66.2756 38.3125 66.2514 35.6765 66.1302ZM35.4694 20.9322C32.8064 21.0534 30.9867 21.4754 29.3976 22.0934C27.7518 22.7316 26.3585 23.5878 24.9663 24.977C23.5741 26.3662 22.7195 27.7608 22.081 29.4056C21.4626 30.9948 21.0403 32.8124 20.9191 35.4738C20.7958 38.1394 20.7676 38.9916 20.7676 45.7808C20.7676 52.57 20.7958 53.4222 20.9191 56.0878C21.0403 58.7494 21.4626 60.5668 22.081 62.156C22.7195 63.7998 23.5743 65.196 24.9663 66.5846C26.3583 67.9732 27.7518 68.8282 29.3976 69.4682C30.9897 70.0862 32.8064 70.5082 35.4694 70.6294C38.138 70.7506 38.9893 70.7808 45.7826 70.7808C52.5759 70.7808 53.4286 70.7526 56.0958 70.6294C58.759 70.5082 60.5774 70.0862 62.1676 69.4682C63.8124 68.8282 65.2066 67.9738 66.5989 66.5846C67.9911 65.1954 68.8438 63.7998 69.4842 62.156C70.1026 60.5668 70.5268 58.7492 70.6461 56.0878C70.7674 53.4202 70.7956 52.57 70.7956 45.7808C70.7956 38.9916 70.7674 38.1394 70.6461 35.4738C70.5248 32.8122 70.1026 30.9938 69.4842 29.4056C68.8438 27.7618 67.9889 26.3684 66.5989 24.977C65.2088 23.5856 63.8124 22.7316 62.1696 22.0934C60.5775 21.4754 58.7588 21.0514 56.0978 20.9322C53.4306 20.811 52.5779 20.7808 45.7846 20.7808C38.9913 20.7808 38.138 20.809 35.4694 20.9322Z"
          fill="url(#paint1_radial_1_376)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_1_376"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(27.4144 71.017) scale(65.31 65.2708)"
          >
            <stop offset="0.09" stop-color="#FA8F21" />
            <stop offset="0.78" stop-color="#D82D7E" />
          </radialGradient>
          <radialGradient
            id="paint1_radial_1_376"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(51.1086 73.257) scale(51.4733 51.4424)"
          >
            <stop offset="0.64" stop-color="#8C3AAA" stop-opacity="0" />
            <stop offset="1" stop-color="#8C3AAA" />
          </radialGradient>
        </defs>
      </svg>
    ),
    href: "https://instagram.com",
  },
  {
    name: "LinkedIn",
    icon: (
      <svg
        width="92"
        height="92"
        viewBox="0 0 92 92"
        fill="none"
        className="size-12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 24.5838C21 22.6057 22.6561 21 24.6975 21H67.3325C69.3747 21 71.03 22.6057 71.03 24.5838V67.4468C71.03 69.4255 69.3747 71.03 67.3325 71.03H24.6975C22.6563 71.03 21 69.4257 21 67.4474V24.5832V24.5838Z"
          fill="#006699"
        />
        <path
          d="M36.2032 62.8686V40.345H28.7167V62.8686H36.204H36.2032ZM32.4615 37.2703C35.0717 37.2703 36.6967 35.5407 36.6967 33.3793C36.6478 31.1686 35.0717 29.4873 32.5111 29.4873C29.9489 29.4873 28.2754 31.1686 28.2754 33.3791C28.2754 35.5405 29.8998 37.2701 32.4124 37.2701H32.4609L32.4615 37.2703ZM40.3471 62.8686H47.833V50.2918C47.833 49.6195 47.8819 48.9455 48.0796 48.4653C48.6206 47.1198 49.8524 45.7269 51.921 45.7269C54.6293 45.7269 55.7133 47.7922 55.7133 50.8204V62.8686H63.1991V49.9543C63.1991 43.0363 59.5062 39.8169 54.5808 39.8169C50.5426 39.8169 48.7691 42.074 47.7838 43.6112H47.8336V40.3458H40.3475C40.4452 42.4588 40.3469 62.8694 40.3469 62.8694L40.3471 62.8686Z"
          fill="white"
        />
      </svg>
    ),
    href: "https://linkedin.com",
  },
  {
    name: "Facebook",
    icon: (
      <svg
        width="92"
        height="92"
        viewBox="0 0 92 92"
        fill="none"
        className="size-12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M56.4927 48.6403L57.7973 40.3588H49.7611V34.9759C49.7611 32.7114 50.883 30.4987 54.4706 30.4987H58.1756V23.4465C56.018 23.1028 53.8378 22.9168 51.6527 22.8901C45.0385 22.8901 40.7204 26.8626 40.7204 34.0442V40.3588H33.3887V48.6403H40.7204V68.671H49.7611V48.6403H56.4927Z"
          fill="#337FFF"
        />
      </svg>
    ),
    href: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: (
      <svg
        width="92"
        height="92"
        viewBox="0 0 92 92"
        fill="none"
        className="size-12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M68.941 31.1457C67.4292 31.7963 65.8398 32.2494 64.2122 32.4937C64.9731 32.3632 66.0928 30.9935 66.5386 30.4391C67.2157 29.6028 67.7317 28.6481 68.0605 27.6235C68.0605 27.5474 68.1366 27.4387 68.0605 27.3843C68.0221 27.3634 67.9792 27.3524 67.9355 27.3524C67.8918 27.3524 67.8488 27.3634 67.8105 27.3843C66.0431 28.3414 64.162 29.0719 62.2119 29.5585C62.144 29.5793 62.0716 29.5811 62.0027 29.5639C61.9337 29.5467 61.8708 29.511 61.8206 29.4607C61.6688 29.2799 61.5054 29.1092 61.3314 28.9497C60.536 28.2371 59.6336 27.6538 58.6571 27.2213C57.3391 26.6805 55.9154 26.4463 54.4935 26.5364C53.1139 26.6235 51.767 26.9936 50.5365 27.6235C49.3248 28.2876 48.2599 29.1899 47.4057 30.276C46.5072 31.3939 45.8585 32.6913 45.5033 34.0808C45.2104 35.4026 45.1771 36.7687 45.4054 38.1031C45.4054 38.3314 45.4054 38.364 45.2098 38.3314C37.4588 37.1899 31.0993 34.4396 25.903 28.5366C25.6747 28.2757 25.5551 28.2757 25.3703 28.5366C23.1091 31.9719 24.2071 37.4073 27.0335 40.0925C27.414 40.4512 27.8054 40.7991 28.2185 41.1252C26.9226 41.0332 25.6583 40.682 24.5006 40.0925C24.2832 39.9511 24.1636 40.0272 24.1527 40.2881C24.1219 40.6498 24.1219 41.0135 24.1527 41.3752C24.3796 43.1087 25.0627 44.7508 26.1323 46.1337C27.202 47.5166 28.6197 48.5905 30.2405 49.2458C30.6356 49.415 31.0473 49.5426 31.4689 49.6263C30.2692 49.8625 29.0388 49.8992 27.8271 49.735C27.5662 49.6806 27.4684 49.822 27.5662 50.072C29.1642 54.4204 32.6321 55.7466 35.1759 56.4858C35.5237 56.5402 35.8716 56.5402 36.263 56.6272C36.263 56.6272 36.263 56.6272 36.1977 56.6924C35.4476 58.0621 32.4147 58.9862 31.0232 59.4645C28.4834 60.3768 25.7755 60.7255 23.0874 60.4864C22.6634 60.4211 22.5656 60.432 22.4569 60.4864C22.3482 60.5407 22.4569 60.6603 22.5764 60.769C23.12 61.1277 23.6635 61.443 24.2288 61.7474C25.9117 62.6653 27.6908 63.3944 29.5339 63.9216C39.0785 66.5523 49.819 64.6173 56.983 57.4968C62.6141 51.9092 64.5927 44.2017 64.5927 36.4833C64.5927 36.1898 64.9514 36.0159 65.1579 35.8637C66.5826 34.7536 67.8386 33.4427 68.8867 31.9719C69.0682 31.7526 69.1612 31.4735 69.1476 31.1892C69.1476 31.0261 69.1476 31.0587 68.941 31.1457Z"
          fill="#33CCFF"
        />
      </svg>
    ),
    href: "https://twitter.com",
  },
];

export default function Footer() {
  const pathname = usePathname();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <footer className="bg-[#1A1F2C] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Title Section */}
          <div>
            <div className="flex flex-col items-start gap-4">
              <Image
                src="/university_logo.png"
                alt="ITM University Logo"
                width={150}
                height={150}
                className="w-32 object-cover"
              />
              <h2 className="text-xl font-bold text-white">Ideathon</h2>
              <span>From Concept To Market</span>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white border-b border-gray-700 pb-2">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-3">
              {[
                { title: "Home", href: "/" },
                { title: "Team", href: "/Team" },
                { title: "Sponsors", href: "/Sponsors" },
                { title: "Events", href: "/Events" },
                { title: "Contact", href: "/Contact" },
                { title: "Blog", href: "/Blog" },
                { title: "Our Startup", href: "/OurStartup" },
                { title: "Startup Detail", href: "/startup-detail" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:font-semibold transition-all duration-300 ease-in-out"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white border-b border-gray-700 pb-2">
              Follow Us
            </h4>
            <div className="flex items-center">
              {SocialMedia.map((social, index) => (
                <Link href={social.href} key={index}>
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center space-y-2">
          <p className="text-sm text-gray-400">
            Developed with <span className="text-red-500 animate-pulse">❤</span>{" "}
            by School of Engineering and Research
          </p>
          <p className="text-sm text-gray-500">
            © 2024 - ITM University, Raipur ~ All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
