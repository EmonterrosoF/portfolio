import Link from 'next/link'

import { FormattedMessage } from 'react-intl'

import { HiDownload } from 'react-icons/hi'
import { AiFillPhone } from 'react-icons/ai'

import style from './home.module.scss'

export const Home = () => {
  return (
    <section id="home" className={style.section}>
      <div className={style.sectionLeft}>
        <p className={style.sectionP}>EDRAS</p>
        <p className={style.sectionP}>MONTERROSO</p>
        <h1 className={style.sectionH1}>
          <FormattedMessage id="home.subtitle" />
        </h1>
        <div className={style.sectionDiv}>
          <Link className={`Link ${style.sectionCV}`} href="#">
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <HiDownload />
            </span>
            <FormattedMessage id="home.download" />
          </Link>
          <Link className={`Link ${style.sectionContact}`} href="#">
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <AiFillPhone />
            </span>
            <FormattedMessage id="home.contact" />
          </Link>
        </div>
      </div>
      <div className={style.sectionRight}>
        <svg
          className="floating-icons"
          width="477"
          height="477"
          viewBox="0 0 477 477"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="67" cy="162" r="47" fill="url(#paint0_radial_15_97)" />
          <path
            d="M49.9322 182.102L46 138H89.2075L85.27 182.095L67.5775 187L49.9322 182.102Z"
            fill="#E44F26"
          />
          <path
            d="M67.6038 183.251L81.9013 179.288L85.2648 141.607H67.6038V183.251Z"
            fill="#F1662A"
          />
          <path
            d="M67.6038 157.962H60.4463L59.9528 152.423H67.6038V147.014H67.5845H54.0413L54.1708 148.467L55.499 163.371H67.6038V157.962Z"
            fill="#EBEBEB"
          />
          <path
            d="M67.6037 172.01L67.5792 172.017L61.5557 170.391L61.1707 166.077H58.243H55.7405L56.4982 174.568L67.5792 177.645L67.6037 177.638V172.01Z"
            fill="#EBEBEB"
          />
          <path
            d="M67.5845 157.962V163.371H74.245L73.6185 170.387L67.5845 172.015V177.643L78.6742 174.568L78.7547 173.654L80.0252 159.415L80.1582 157.962H78.7005H67.5845Z"
            fill="white"
          />
          <path
            d="M67.5845 147.014V150.374V152.411V152.423H80.6325H80.65L80.7585 151.209L81.0052 148.467L81.1347 147.014H67.5845Z"
            fill="white"
          />
          <circle cx="318" cy="78" r="47" fill="url(#paint1_radial_15_97)" />
          <path
            d="M342.5 53.4375H293.5V101.562H342.5V53.4375Z"
            fill="#F5DE19"
          />
          <path
            d="M326.416 91.0352C326.833 91.8681 327.482 92.5681 328.287 93.0547C329.092 93.5412 330.021 93.7945 330.966 93.7852C332.873 93.7852 334.093 92.8484 334.093 91.5508C334.093 90.0039 332.84 89.4505 330.74 88.5481L329.589 88.0634C326.264 86.673 324.059 84.9319 324.059 81.2503C324.059 77.8592 326.684 75.2759 330.801 75.2759C332.134 75.1814 333.466 75.4744 334.631 76.1184C335.795 76.7624 336.741 77.7289 337.35 78.8973L333.75 81.1575C333.516 80.5781 333.107 80.0825 332.579 79.7362C332.052 79.39 331.429 79.2095 330.794 79.2188C330.517 79.1915 330.238 79.2213 329.973 79.306C329.709 79.3908 329.465 79.5288 329.258 79.7112C329.05 79.8936 328.884 80.1164 328.769 80.3654C328.654 80.6144 328.594 80.8842 328.591 81.1575C328.591 82.5136 329.447 83.0636 331.423 83.9075L332.574 84.3922C336.487 86.0405 338.699 87.7197 338.699 91.4958C338.699 95.5675 335.442 97.7984 331.069 97.7984C329.365 97.9051 327.666 97.5251 326.177 96.7044C324.688 95.8837 323.473 94.6573 322.678 93.1733L326.416 91.0352ZM310.15 91.427C310.872 92.6869 311.53 93.7525 313.112 93.7525C314.624 93.7525 315.58 93.1716 315.58 90.9114V75.5338H320.184V90.9716C320.184 95.6534 317.384 97.7847 313.308 97.7847C311.868 97.862 310.437 97.5094 309.204 96.7732C307.971 96.0369 306.994 94.9515 306.401 93.6597L310.15 91.427Z"
            fill="black"
          />
          <circle cx="414" cy="279" r="47" fill="url(#paint2_radial_15_97)" />
          <path
            d="M414.246 282.292C416.986 282.292 419.208 280.07 419.208 277.33C419.208 274.59 416.986 272.368 414.246 272.368C411.506 272.368 409.284 274.59 409.284 277.33C409.284 280.07 411.506 282.292 414.246 282.292Z"
            fill="#61DAFB"
          />
          <path
            d="M433.092 269.147C432.135 268.799 431.133 268.451 430.089 268.146C430.35 267.102 430.568 266.057 430.742 265.056C431.656 259.311 430.655 255.263 427.869 253.696C427.042 253.218 426.128 253 425.084 253C422.037 253 418.163 255.263 414.246 259.05C410.329 255.263 406.455 253 403.409 253C402.364 253 401.45 253.218 400.623 253.696C397.838 255.307 396.836 259.355 397.75 265.056C397.925 266.057 398.142 267.102 398.403 268.146C397.359 268.451 396.358 268.756 395.4 269.147C389.96 271.237 387 274.109 387 277.33C387 280.551 390.003 283.423 395.4 285.513C396.358 285.861 397.359 286.209 398.403 286.514C398.142 287.558 397.925 288.603 397.75 289.604C396.836 295.349 397.838 299.397 400.623 300.964C401.45 301.442 402.364 301.66 403.409 301.66C406.499 301.66 410.372 299.397 414.246 295.61C418.163 299.397 422.037 301.66 425.084 301.66C426.128 301.66 427.042 301.442 427.869 300.964C430.655 299.353 431.656 295.305 430.742 289.604C430.568 288.603 430.35 287.558 430.089 286.514C431.133 286.209 432.135 285.904 433.092 285.513C438.533 283.423 441.492 280.551 441.492 277.33C441.492 274.109 438.533 271.237 433.092 269.147ZM426.65 255.873C428.435 256.917 429.044 260.138 428.304 264.708C428.174 265.622 427.956 266.58 427.695 267.581C425.432 267.058 423.038 266.71 420.514 266.492C419.034 264.403 417.51 262.532 415.987 260.834C419.208 257.657 422.472 255.481 425.127 255.481C425.693 255.481 426.215 255.611 426.65 255.873V255.873ZM421.776 281.682C420.992 283.075 420.078 284.468 419.121 285.861C417.51 285.991 415.9 286.035 414.246 286.035C412.549 286.035 410.938 285.991 409.371 285.861C408.414 284.468 407.543 283.075 406.76 281.682C405.933 280.246 405.15 278.766 404.453 277.33C405.15 275.894 405.933 274.414 406.76 272.978C407.543 271.585 408.457 270.192 409.415 268.799C411.025 268.669 412.636 268.625 414.29 268.625C415.987 268.625 417.597 268.669 419.164 268.799C420.122 270.192 420.992 271.585 421.776 272.978C422.603 274.414 423.386 275.894 424.083 277.33C423.343 278.766 422.603 280.203 421.776 281.682ZM425.388 280.246C426.041 281.769 426.563 283.249 427.042 284.729C425.562 285.077 423.996 285.338 422.342 285.556C422.864 284.729 423.43 283.859 423.908 282.945C424.431 282.031 424.91 281.117 425.388 280.246ZM414.246 292.041C413.202 290.91 412.2 289.691 411.243 288.429C412.244 288.472 413.245 288.516 414.246 288.516C415.247 288.516 416.248 288.472 417.249 288.429C416.292 289.691 415.291 290.91 414.246 292.041ZM406.151 285.513C404.497 285.295 402.93 285.034 401.45 284.686C401.929 283.249 402.451 281.726 403.104 280.203C403.583 281.073 404.061 281.987 404.584 282.858C405.106 283.815 405.628 284.642 406.151 285.513V285.513ZM403.104 274.414C402.451 272.891 401.929 271.411 401.45 269.931C402.93 269.583 404.497 269.322 406.151 269.104C405.628 269.931 405.063 270.801 404.584 271.715C404.061 272.629 403.583 273.543 403.104 274.414V274.414ZM414.246 262.619C415.291 263.75 416.292 264.969 417.249 266.231C416.248 266.188 415.247 266.144 414.246 266.144C413.245 266.144 412.244 266.188 411.243 266.231C412.2 264.969 413.202 263.75 414.246 262.619V262.619ZM423.908 271.759L422.342 269.147C423.996 269.365 425.562 269.626 427.042 269.974C426.563 271.411 426.041 272.934 425.388 274.457C424.91 273.543 424.431 272.629 423.908 271.759V271.759ZM400.188 264.708C399.448 260.138 400.057 256.917 401.842 255.873C402.277 255.611 402.799 255.481 403.365 255.481C405.977 255.481 409.241 257.614 412.505 260.834C410.982 262.488 409.458 264.403 407.979 266.492C405.454 266.71 403.06 267.102 400.797 267.581C400.536 266.58 400.362 265.622 400.188 264.708ZM389.437 277.33C389.437 275.284 391.918 273.108 396.271 271.498C397.141 271.15 398.099 270.845 399.056 270.584C399.753 272.76 400.623 275.067 401.668 277.374C400.623 279.68 399.709 281.944 399.056 284.12C393.05 282.379 389.437 279.767 389.437 277.33V277.33ZM401.842 298.787C400.057 297.743 399.448 294.522 400.188 289.952C400.318 289.038 400.536 288.08 400.797 287.079C403.06 287.602 405.454 287.95 407.979 288.167C409.458 290.257 410.982 292.128 412.505 293.826C409.284 297.003 406.02 299.179 403.365 299.179C402.799 299.179 402.277 299.049 401.842 298.787ZM428.304 289.952C429.044 294.522 428.435 297.743 426.65 298.787C426.215 299.049 425.693 299.179 425.127 299.179C422.516 299.179 419.251 297.046 415.987 293.826C417.51 292.172 419.034 290.257 420.514 288.167C423.038 287.95 425.432 287.558 427.695 287.079C427.956 288.08 428.13 289.038 428.304 289.952V289.952ZM432.222 283.162C431.351 283.51 430.394 283.815 429.436 284.076C428.74 281.9 427.869 279.593 426.825 277.286C427.869 274.98 428.783 272.716 429.436 270.54C435.442 272.281 439.055 274.893 439.055 277.33C439.055 279.376 436.53 281.552 432.222 283.162V283.162Z"
            fill="#61DAFB"
          />
          <circle cx="181" cy="78" r="47" fill="url(#paint3_radial_15_97)" />
          <path
            d="M156.438 77.5V101.562H180.5H204.562V77.5V53.4375H180.5H156.438V77.5Z"
            fill="#007ACC"
          />
          <path
            d="M195.219 75.5819C196.372 75.85 197.419 76.4534 198.229 77.3161C198.675 77.7828 199.062 78.3023 199.382 78.863C199.398 78.9248 197.304 80.329 196.036 81.1162C195.989 81.1472 195.807 80.9444 195.601 80.6419C195.37 80.2424 195.041 79.9081 194.645 79.6703C194.25 79.4326 193.8 79.2991 193.339 79.2823C191.88 79.1826 190.933 79.9475 190.948 81.2228C190.936 81.536 191.007 81.8469 191.154 82.1234C191.476 82.7886 192.071 83.1856 193.942 83.9951C197.38 85.4767 198.861 86.4547 199.786 87.8451C200.301 88.7233 200.617 89.7033 200.713 90.7166C200.81 91.7299 200.683 92.7519 200.343 93.7112C199.876 94.7646 199.136 95.6737 198.199 96.3441C197.262 97.0145 196.162 97.4217 195.015 97.5234C193.796 97.6633 192.564 97.6506 191.349 97.4856C189.486 97.1798 187.77 96.286 186.452 94.935C185.954 94.3742 185.533 93.75 185.199 93.0787C185.34 92.9741 185.488 92.8799 185.642 92.7969C185.856 92.6748 186.674 92.209 187.43 91.7656L188.805 90.963L189.094 91.3875C189.583 92.0873 190.206 92.6832 190.928 93.1406C191.653 93.5386 192.475 93.7271 193.302 93.6852C194.129 93.6433 194.928 93.3727 195.609 92.9034C195.959 92.5607 196.177 92.1062 196.226 91.6191C196.275 91.132 196.152 90.6431 195.878 90.2376C195.503 89.7031 194.74 89.2528 192.571 88.3126C190.87 87.7368 189.321 86.7838 188.04 85.5248C187.429 84.8288 186.978 84.0075 186.718 83.1186C186.526 82.1059 186.498 81.0689 186.634 80.0472C186.889 78.8716 187.499 77.8029 188.382 76.9857C189.264 76.1685 190.377 75.6424 191.569 75.4787C192.784 75.3296 194.015 75.3643 195.219 75.5819V75.5819ZM183.922 77.5911L183.937 79.5625H177.674V97.3619H173.243V79.5625H166.979V77.6306C166.962 76.9678 166.979 76.3046 167.032 75.6437C167.054 75.6128 170.866 75.5973 175.488 75.6059L183.898 75.6283L183.922 77.5911Z"
            fill="white"
          />
          <circle cx="184" cy="394" r="47" fill="url(#paint4_radial_15_97)" />
          <path
            d="M184 419.563C183.363 419.563 182.736 419.392 182.184 419.068L176.406 415.584C175.544 415.092 175.964 414.918 176.249 414.817C177.166 414.528 178.045 414.124 178.863 413.614C178.932 413.582 179.007 413.568 179.083 413.573C179.158 413.579 179.23 413.604 179.294 413.647L183.733 416.333C183.816 416.378 183.908 416.401 184.002 416.401C184.095 416.401 184.187 416.378 184.27 416.333L201.584 406.155C201.665 406.105 201.732 406.035 201.778 405.951C201.825 405.868 201.849 405.773 201.849 405.677V385.316C201.849 385.219 201.824 385.123 201.777 385.037C201.73 384.952 201.662 384.881 201.58 384.83L184.267 374.66C184.185 374.613 184.093 374.589 183.999 374.589C183.905 374.589 183.813 374.613 183.732 374.66L166.428 384.833C166.346 384.883 166.277 384.954 166.229 385.038C166.181 385.123 166.156 385.219 166.155 385.316V405.668C166.155 405.764 166.18 405.858 166.228 405.941C166.276 406.024 166.344 406.092 166.426 406.139L171.175 408.93C173.748 410.24 175.325 408.697 175.325 407.146V387.052C175.325 386.916 175.378 386.784 175.473 386.688C175.568 386.591 175.697 386.537 175.831 386.537H178.025C178.159 386.537 178.288 386.591 178.383 386.688C178.477 386.784 178.531 386.916 178.531 387.052V407.148C178.531 410.646 176.661 412.648 173.404 412.648C171.999 412.673 170.616 412.29 169.417 411.545L164.865 408.886C164.313 408.558 163.854 408.088 163.536 407.524C163.217 406.959 163.05 406.319 163.05 405.668V385.316C163.048 384.664 163.215 384.023 163.534 383.457C163.852 382.892 164.312 382.421 164.865 382.094L182.181 371.912C182.739 371.601 183.364 371.438 184 371.438C184.636 371.438 185.261 371.601 185.819 371.912L203.133 382.094C203.685 382.421 204.144 382.89 204.463 383.454C204.782 384.018 204.95 384.657 204.95 385.308V405.668C204.949 406.319 204.781 406.959 204.462 407.523C204.143 408.088 203.685 408.557 203.133 408.886L185.819 419.068C185.266 419.393 184.639 419.563 184 419.563V419.563Z"
            fill="#83CD29"
          />
          <path
            d="M180.716 398.857C180.716 398.72 180.769 398.589 180.864 398.492C180.959 398.395 181.088 398.341 181.222 398.341H183.462C183.581 398.341 183.697 398.385 183.788 398.464C183.879 398.543 183.94 398.652 183.959 398.772C184.297 401.095 185.309 402.265 189.888 402.265C193.534 402.265 195.089 401.425 195.089 399.453C195.089 398.317 194.648 397.473 188.98 396.908C184.241 396.43 181.312 395.361 181.312 391.504C181.312 387.946 184.256 385.823 189.192 385.823C194.739 385.823 197.485 387.785 197.832 391.992C197.838 392.062 197.829 392.133 197.806 392.199C197.784 392.266 197.748 392.327 197.701 392.379C197.655 392.431 197.598 392.473 197.535 392.502C197.472 392.531 197.404 392.546 197.335 392.547H195.08C194.967 392.546 194.858 392.505 194.77 392.433C194.681 392.361 194.62 392.261 194.594 392.148C194.056 389.706 192.738 388.926 189.194 388.926C185.212 388.926 184.749 390.339 184.749 391.397C184.749 392.68 185.296 393.054 190.672 393.778C195.993 394.495 198.521 395.509 198.521 399.317C198.521 403.16 195.375 405.36 189.889 405.36C182.304 405.371 180.716 401.828 180.716 398.857Z"
            fill="#83CD29"
          />
          <circle cx="322" cy="388" r="47" fill="url(#paint5_radial_15_97)" />
          <path
            d="M314.917 383.565C314.917 383.565 312.736 384.848 316.472 385.283C320.997 385.805 323.309 385.73 328.295 384.777C328.295 384.777 329.609 385.608 331.44 386.328C320.259 391.174 306.136 386.047 314.917 383.565ZM313.55 377.239C313.55 377.239 311.103 379.072 314.841 379.463C319.676 379.968 323.492 380.01 330.101 378.722C330.101 378.722 331.013 379.66 332.449 380.172C318.934 384.172 303.88 380.487 313.55 377.239V377.239Z"
            fill="#0074BD"
          />
          <path
            d="M325.067 366.508C327.823 369.719 324.344 372.605 324.344 372.605C324.344 372.605 331.339 368.952 328.127 364.376C325.126 360.11 322.826 357.992 335.279 350.684C335.28 350.684 315.731 355.623 325.067 366.508Z"
            fill="#EA2D2E"
          />
          <path
            d="M339.853 388.243C339.853 388.243 341.468 389.591 338.075 390.632C331.623 392.609 311.218 393.206 305.55 390.711C303.514 389.814 307.334 388.569 308.535 388.308C309.789 388.033 310.504 388.084 310.504 388.084C308.239 386.469 295.858 391.254 304.216 392.627C327.01 396.364 345.765 390.943 339.853 388.243V388.243ZM315.967 370.685C315.967 370.685 305.588 373.179 312.292 374.086C315.124 374.469 320.764 374.381 326.022 373.935C330.318 373.57 334.629 372.79 334.629 372.79C334.629 372.79 333.116 373.447 332.019 374.204C321.478 377.009 301.119 375.702 306.98 372.835C311.936 370.409 315.967 370.685 315.967 370.685V370.685ZM334.586 381.213C345.301 375.581 340.346 370.169 336.888 370.898C336.043 371.076 335.663 371.231 335.663 371.231C335.663 371.231 335.978 370.731 336.578 370.517C343.419 368.085 348.679 377.693 334.372 381.499C334.372 381.499 334.536 381.348 334.586 381.213Z"
            fill="#0074BD"
          />
          <path
            d="M328.127 338.882C328.127 338.882 334.061 344.888 322.499 354.122C313.227 361.53 320.384 365.754 322.495 370.581C317.083 365.64 313.113 361.291 315.776 357.243C319.686 351.302 330.521 348.421 328.127 338.882V338.882Z"
            fill="#EA2D2E"
          />
          <path
            d="M317.021 396.479C327.303 397.144 343.098 396.109 343.472 391.186C343.472 391.186 342.753 393.052 334.972 394.533C326.195 396.205 315.367 396.01 308.947 394.938C308.947 394.938 310.262 396.04 317.021 396.479V396.479Z"
            fill="#0074BD"
          />
          <path
            d="M342.997 405.309H342.683V405.132H343.527V405.309H343.215V406.194H342.996L342.997 405.309V405.309ZM344.68 405.353H344.676L344.366 406.194H344.222L343.913 405.353H343.91V406.194H343.703V405.132H344.006L344.293 405.884L344.579 405.132H344.881V406.194H344.68V405.353V405.353ZM315.335 415.29C314.366 416.141 313.341 416.619 312.42 416.619C311.109 416.619 310.397 415.823 310.397 414.547C310.397 413.166 311.158 412.155 314.208 412.155H315.335V415.29H315.335ZM318.012 418.346V408.888C318.012 406.47 316.649 404.875 313.366 404.875C311.449 404.875 309.769 405.355 308.403 405.965L308.796 407.64C309.872 407.24 311.263 406.869 312.629 406.869C314.521 406.869 315.335 407.64 315.335 409.235V410.43H314.389C309.793 410.43 307.719 412.234 307.719 414.947C307.719 417.285 309.086 418.613 311.659 418.613C313.313 418.613 314.548 417.922 315.702 416.911L315.912 418.347H318.012V418.346V418.346ZM326.945 418.346H323.607L319.589 405.118H322.505L324.999 413.247L325.553 415.689C326.812 412.156 327.705 408.57 328.151 405.118H330.987C330.228 409.473 328.86 414.254 326.945 418.346ZM339.754 415.29C338.781 416.141 337.755 416.619 336.837 416.619C335.525 416.619 334.814 415.823 334.814 414.547C334.814 413.166 335.577 412.155 338.623 412.155H339.753V415.29H339.754ZM342.432 418.346V408.888C342.432 406.47 341.064 404.875 337.784 404.875C335.866 404.875 334.186 405.355 332.82 405.965L333.214 407.64C334.29 407.24 335.683 406.869 337.048 406.869C338.938 406.869 339.754 407.64 339.754 409.235V410.43H338.808C334.211 410.43 332.138 412.234 332.138 414.947C332.138 417.285 333.503 418.613 336.075 418.613C337.73 418.613 338.963 417.922 340.12 416.911L340.331 418.347H342.432V418.346V418.346ZM304.784 420.594C304.022 421.722 302.789 422.615 301.439 423.118L300.118 421.543C301.146 421.009 302.026 420.149 302.435 419.347C302.789 418.632 302.935 417.714 302.935 415.516V400.411H305.78V415.309C305.78 418.248 305.549 419.437 304.784 420.594V420.594Z"
            fill="#EA2D2E"
          />
          <circle cx="73" cy="287" r="47" fill="url(#paint6_radial_15_97)" />
          <path
            d="M53.144 306.602L49.2837 262.5H91.7162L87.8507 306.595L70.4742 311.5L53.144 306.602Z"
            fill="#1572B6"
          />
          <path
            d="M70.5 307.752L84.5422 303.788L87.8456 266.107H70.5V307.752Z"
            fill="#33A9DC"
          />
          <path
            d="M70.5 282.084H77.5297L78.0144 276.545H70.5V271.136H70.5189H83.8203L83.6931 272.587L82.3886 287.493H70.5V282.084Z"
            fill="white"
          />
          <path
            d="M70.5326 296.132L70.5086 296.139L64.5926 294.511L64.2145 290.197H61.339H58.8812L59.6254 298.69L70.5069 301.767L70.5326 301.76V296.132Z"
            fill="#EBEBEB"
          />
          <path
            d="M77.0777 287.264L76.4383 294.507L70.5138 296.135V301.763L81.4038 298.69L81.4846 297.776L82.4075 287.264H77.0777Z"
            fill="white"
          />
          <path
            d="M70.5189 271.136V274.496V276.531V276.545H57.7039H57.6867L57.5801 275.329L57.3378 272.587L57.2106 271.136H70.5189Z"
            fill="#EBEBEB"
          />
          <path
            d="M70.5 282.084V285.444V287.479V287.493H64.6752H64.658L64.5514 286.277L64.3108 283.535L64.1836 282.084H70.5Z"
            fill="#EBEBEB"
          />
          <circle cx="404" cy="162" r="47" fill="url(#paint7_radial_15_97)" />
          <path
            d="M397.673 188C399.883 188 402.003 187.122 403.566 185.559C405.129 183.996 406.007 181.877 406.007 179.667V171.333H397.673C395.463 171.333 393.343 172.211 391.781 173.774C390.218 175.337 389.34 177.457 389.34 179.667C389.34 181.877 390.218 183.996 391.781 185.559C393.343 187.122 395.463 188 397.673 188V188Z"
            fill="#0ACF83"
          />
          <path
            d="M389.34 163C389.34 160.79 390.218 158.67 391.781 157.107C393.343 155.545 395.463 154.667 397.673 154.667H406.007V171.333H397.673C395.463 171.333 393.343 170.455 391.781 168.893C390.218 167.33 389.34 165.21 389.34 163V163Z"
            fill="#A259FF"
          />
          <path
            d="M389.34 146.333C389.34 144.124 390.217 142.006 391.778 140.443C393.34 138.88 395.458 138.002 397.667 138H406V154.667H397.673C395.463 154.667 393.343 153.789 391.781 152.226C390.218 150.663 389.34 148.543 389.34 146.333V146.333Z"
            fill="#F24E1E"
          />
          <path
            d="M406.006 138H414.34C416.55 138 418.67 138.878 420.232 140.441C421.795 142.004 422.673 144.123 422.673 146.333C422.673 148.543 421.795 150.663 420.232 152.226C418.67 153.789 416.55 154.667 414.34 154.667H406.006V138Z"
            fill="#FF7262"
          />
          <path
            d="M422.673 163C422.673 165.21 421.795 167.33 420.232 168.893C418.67 170.455 416.55 171.333 414.34 171.333C412.13 171.333 410.01 170.455 408.447 168.893C406.884 167.33 406.006 165.21 406.006 163C406.006 160.79 406.884 158.67 408.447 157.107C410.01 155.545 412.13 154.667 414.34 154.667C416.55 154.667 418.67 155.545 420.232 157.107C421.795 158.67 422.673 160.79 422.673 163V163Z"
            fill="#1ABCFE"
          />
          <defs>
            <radialGradient
              id="paint0_radial_15_97"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(67 162) rotate(90) scale(47)"
            >
              <stop stop-color="#E44F26" />
              <stop offset="1" stop-color="#A4857C" stop-opacity="0" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_15_97"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(318 78) rotate(90) scale(47)"
            >
              <stop stop-color="#F5DE19" />
              <stop offset="1" stop-color="#A4857C" stop-opacity="0" />
            </radialGradient>
            <radialGradient
              id="paint2_radial_15_97"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(414 279) rotate(90) scale(47)"
            >
              <stop stop-color="#60D5F5" stop-opacity="0.76" />
              <stop offset="1" stop-color="#A4857C" stop-opacity="0" />
            </radialGradient>
            <radialGradient
              id="paint3_radial_15_97"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(181 78) rotate(90) scale(47)"
            >
              <stop stop-color="#007ACC" />
              <stop offset="1" stop-color="#A4857C" stop-opacity="0" />
            </radialGradient>
            <radialGradient
              id="paint4_radial_15_97"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(184 394) rotate(90) scale(47)"
            >
              <stop stop-color="#83CD29" stop-opacity="0.63" />
              <stop offset="1" stop-color="#A4857C" stop-opacity="0" />
            </radialGradient>
            <radialGradient
              id="paint5_radial_15_97"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(322 388) rotate(90) scale(47)"
            >
              <stop stop-color="#0A6DAB" stop-opacity="0.76" />
              <stop offset="1" stop-color="#A4857C" stop-opacity="0" />
            </radialGradient>
            <radialGradient
              id="paint6_radial_15_97"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(73 287) rotate(90) scale(47)"
            >
              <stop stop-color="#3B76A6" />
              <stop offset="1" stop-color="#A4857C" stop-opacity="0" />
            </radialGradient>
            <radialGradient
              id="paint7_radial_15_97"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(404 162) rotate(90) scale(47)"
            >
              <stop stop-color="#0ACF83" stop-opacity="0.71" />
              <stop offset="1" stop-color="#A4857C" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>
        <svg
          className={style.circle}
          width="543"
          height="543"
          viewBox="0 0 543 543"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="271.5"
            cy="271.5"
            r="271.5"
            fill="url(#paint0_radial_113_2)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_113_2"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(271.5 271.5) rotate(90) scale(271.5)"
            >
              <stop stop-color="#CC35FF" stop-opacity="0.68" />
              <stop offset="1" stop-color="#D9D9D9" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}
